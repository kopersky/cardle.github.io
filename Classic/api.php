<?php
$servername = "sql109.infinityfree.com";
$username = "if0_39043535";
$password = "Cardle123 ";
$dbname = "if0_39043535_cardle";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("connection error: " . $conn->connect_error);
}

$sql = "SELECT id, marka, rok_produkcji, model, typ_nadwozia, kraj FROM cardle ORDER BY rand() LIMIT 1";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data = $row;
    }
} else {
    $data = ["error" => "0 results"];
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($data);
?>