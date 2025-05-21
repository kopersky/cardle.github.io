<?php
header('Content-type: application/json');
$servername = "sql109.infinityfree.com";
$username = "if0_39043535";
$password = "Cardle123 ";
$dbname = "if0_39043535_cardle";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
$sql = "SELECT id, marka, logo FROM cardle ORDER BY rand() LIMIT 1";
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