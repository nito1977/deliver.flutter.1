<?php
// auth.php
// Expects $pdo to be available

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if (empty($username) || empty($password)) {
    echo json_encode(['status' => 'error', 'message' => 'Username and password required']);
    exit();
}

try {
    // 1. Find User with Group ID
    $stmt = $pdo->prepare("SELECT u.*, g.group_id 
                           FROM users u 
                           LEFT JOIN users_groups g ON u.id = g.user_id 
                           WHERE u.username = :username OR u.email = :email 
                           LIMIT 1");
    $stmt->execute([':username' => $username, ':email' => $username]);
    $user = $stmt->fetch();

    if ($user) {
        // Validation: Active User
        // Strict check: Must be effectively 1
        if ((int)$user['active'] !== 1) {
             http_response_code(403); // Forbidden
             echo json_encode(['status' => 'error', 'message' => 'User is inactive. Contact administrator.']);
             exit();
        }

        $authSuccess = false;

        // Modern Check
        if (password_verify($password, $user['password'])) {
            $authSuccess = true;
        } 
        // Fallback/Legacy Check (if defined)
        /*
        else if (!empty($user['salt']) && $user['password'] === sha1($user['salt'] . $password)) {
             $authSuccess = true;
        }
        */

        if ($authSuccess) {
            unset($user['password']);
            unset($user['salt']);
            unset($user['remember_code']);
            unset($user['activation_code']);

            echo json_encode([
                'status' => 'success',
                'message' => 'Login successful',
                'data' => $user
            ]);
        } else {
            http_response_code(401);
            echo json_encode(['status' => 'error', 'message' => 'Invalid credentials']);
        }
    } else {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'message' => 'User not found']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Server error: ' . $e->getMessage()]);
}
?>
