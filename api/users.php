<?php
// users.php
// Expects $pdo to be available

$action = $_GET['action'] ?? '';
$data = json_decode(file_get_contents("php://input"), true);

try {
    switch ($action) {
        case 'list':
            $stmt = $pdo->prepare("SELECT u.id, u.username, u.email, u.first_name, u.last_name, u.active, u.company, g.group_id 
                                   FROM users u 
                                   LEFT JOIN users_groups g ON u.id = g.user_id 
                                   GROUP BY u.id");
            $stmt->execute();
            $users = $stmt->fetchAll();
            echo json_encode(['status' => 'success', 'data' => $users]);
            break;

        case 'save':
            $id = $data['id'] ?? null;
            $username = $data['username'];
            $email = $data['email'];
            $password = $data['password'] ?? null;
            $groupId = $data['group_id'] ?? 2;

            if ($id) {
                // UPDATE
                $sql = "UPDATE users SET username=?, email=?, first_name=?, last_name=?, active=?, company=? WHERE id=?";
                $params = [$username, $email, $data['first_name'] ?? '', $data['last_name'] ?? '', $data['active'] ?? 1, $data['company'] ?? '', $id];
                $stmt = $pdo->prepare($sql);
                $stmt->execute($params);

                if ($password) {
                    $hashed = password_hash($password, PASSWORD_DEFAULT);
                    $stmt = $pdo->prepare("UPDATE users SET password=? WHERE id=?");
                    $stmt->execute([$hashed, $id]);
                }

                if ($groupId) {
                    $pdo->prepare("DELETE FROM users_groups WHERE user_id=?")->execute([$id]);
                    $pdo->prepare("INSERT INTO users_groups (user_id, group_id) VALUES (?, ?)")->execute([$id, $groupId]);
                }

                echo json_encode(['status' => 'success', 'message' => 'User updated']);
            } else {
                // CREATE
                $hashed = password_hash($password, PASSWORD_DEFAULT);
                $sql = "INSERT INTO users (username, password, email, first_name, last_name, active, ip_address, created_on, company) VALUES (?, ?, ?, ?, ?, 1, '127.0.0.1', ?, ?)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([$username, $hashed, $email, $data['first_name'] ?? '', $data['last_name'] ?? '', time(), $data['company'] ?? '']);
                $newId = $pdo->lastInsertId();

                $pdo->prepare("INSERT INTO users_groups (user_id, group_id) VALUES (?, ?)")->execute([$newId, $groupId]);

                echo json_encode(['status' => 'success', 'message' => 'User created', 'data' => ['id' => $newId]]);
            }
            break;

        case 'delete':
            $id = $data['id'];
            $pdo->prepare("DELETE FROM users_groups WHERE user_id=?")->execute([$id]);
            $pdo->prepare("DELETE FROM users WHERE id=?")->execute([$id]);
            echo json_encode(['status' => 'success', 'message' => 'User deleted']);
            break;

        default:
            echo json_encode(['status' => 'error', 'message' => 'Invalid action for Users service']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
