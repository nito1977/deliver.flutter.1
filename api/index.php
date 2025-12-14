<?php
// index.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'db.php';

$service = $_GET['service'] ?? '';

// Basic Router
switch ($service) {
    case 'auth':
        require 'auth.php';
        break;
    case 'users':
        require 'users.php';
        break;
    case 'upload':
        require 'upload.php';
        break;
    default:
        http_response_code(404);
        echo json_encode(['status' => 'error', 'message' => 'Service not found or invalid']);
        break;
}
?>
