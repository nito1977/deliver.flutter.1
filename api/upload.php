<?php
// api/upload.php

$targetDir = "../uploads/";
// Path to the watermark image (adjust if necessary based on your folder structure)
$watermarkPath = "../src/assets/logofspchico.png";

// Create uploads directory if it doesn't exist
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['photo'];
        $fileName = uniqid() . '_' . basename($file['name']);
        $targetFilePath = $targetDir . $fileName;
        $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

        // Allow certain file formats
        $allowTypes = array('jpg', 'png', 'jpeg', 'gif');
        if (in_array($fileType, $allowTypes)) {
            
            // 1. Move the uploaded file temporarily
            if (move_uploaded_file($file['tmp_name'], $targetFilePath)) {
                
                // 2. Apply Watermark
                addWatermark($targetFilePath, $watermarkPath, $fileType);

                // Construct public URL
                $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
                // Assuming /uploads relative to domain root
                $publicUrl = '/uploads/' . $fileName;

                echo json_encode([
                    'status' => 'success',
                    'message' => 'File uploaded and watermarked successfully',
                    'data' => [
                        'filePath' => $publicUrl,
                        'fileName' => $fileName
                    ]
                ]);
            } else {
                http_response_code(500);
                echo json_encode(['status' => 'error', 'message' => 'Error saving file.']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Invalid file type.']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'No file uploaded.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
}

function addWatermark($targetFilePath, $watermarkPath, $fileType) {
    // Try multiple possible paths for the watermark
    $possiblePaths = [
        "../src/assets/logofspchico.png",
        "../assets/logofspchico.png",
        "../../src/assets/logofspchico.png",
        __DIR__ . "/../src/assets/logofspchico.png"
    ];
    
    $watermarkFound = false;
    foreach ($possiblePaths as $path) {
        if (file_exists($path)) {
            $watermarkPath = $path;
            $watermarkFound = true;
            break;
        }
    }
    
    $watermarkFound = false;
    foreach ($possiblePaths as $path) {
        if (file_exists($path)) {
            $watermarkPath = $path;
            $watermarkFound = true;
            break;
        }
    }
    
    // Check if watermark exists
    if (!$watermarkFound) {
        // Log all attempted paths for debugging
        error_log("Watermark not found. Tried paths: " . implode(", ", $possiblePaths));
        return;
    }

    // Load the image based on file type
    switch($fileType){
        case 'jpg':
        case 'jpeg':
            $image = imagecreatefromjpeg($targetFilePath);
            break;
        case 'png':
            $image = imagecreatefrompng($targetFilePath);
            break;
        case 'gif':
            $image = imagecreatefromgif($targetFilePath);
            break;
        default:
            return;
    }

    // Load watermark
    $watermark = imagecreatefrompng($watermarkPath);

    // Get dimensions
    $imgWidth = imagesx($image);
    $imgHeight = imagesy($image);
    $watermarkWidth = imagesx($watermark);
    $watermarkHeight = imagesy($watermark);

    // Set watermark position (top left with 30px padding)
    $destX = 30;
    $destY = 30;

    // Copy watermark onto image with transparency support
    imagecopy($image, $watermark, $destX, $destY, 0, 0, $watermarkWidth, $watermarkHeight);


    // Save the image back
    switch($fileType){
        case 'jpg':
        case 'jpeg':
            imagejpeg($image, $targetFilePath, 90);
            break;
        case 'png':
            imagepng($image, $targetFilePath);
            break;
        case 'gif':
            imagegif($image, $targetFilePath);
            break;
    }

    // Free memory
    imagedestroy($image);
    imagedestroy($watermark);
}
?>
