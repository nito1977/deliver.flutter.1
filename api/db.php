<?php
// db.php
$db = [
    //Servidor
    'host' => 'localhost',
    'user' => 'c1110355_fspatin',
    'pass' => '2018FspatiN123',
    'name' => 'c1110355_fsp'
];

try {
    $pdo = new PDO("mysql:host={$db['host']};dbname={$db['name']};charset=utf8", $db['user'], $db['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database Connection Error: ' . $e->getMessage()]);
    exit();
}
?>
