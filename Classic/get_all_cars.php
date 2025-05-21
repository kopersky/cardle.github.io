<?php
$servername = "localhost"; 
$username = "root";
$password = "";
$dbname = "cardle";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT marka, model, rok_produkcji, typ_nadwozia, kraj FROM cardle";
$result = $conn->query($sql);

$cars = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $cars[] = $row;
    }
} else {
    $cars = ["error" => "0 results"];
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($cars);
?>