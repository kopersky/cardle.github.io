<?php
$servername = "localhost"; 
$username = "root";        
$password = "";            
$dbname = "cardle";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT marka FROM cardle";
$result = $conn->query($sql);

$input = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $input[] = $row;
    }
} else {
    $input = ["error" => "0 results"];
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($input);
?>