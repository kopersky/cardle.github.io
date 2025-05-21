<?php
header('Content-type: application/json');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cardle";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
$sql = "SELECT id, marka, model, zdjecia FROM cardle ORDER BY rand() LIMIT 1";
$result = $conn->query($sql);
$data = [];
if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();
} else {
    $data = ["error" => "0 results"];
}

echo json_encode($data);
$conn->close();
?>