<?php

header("Access-Control-Allow-Origin:* ");

header("Access-Control-Allow-Headers:* ");

header("Access-Control-Allow-Methods:* ");

$connect = new PDO("mysql:host=127.0.0.1;dbname=crud", "root", "");

$method = $_SERVER['REQUEST_METHOD'];

if($method === 'GET')
{ 
    $query = "SELECT * FROM users ORDER BY ID ASC";
 
    $result = $connect->query($query, PDO::FETCH_ASSOC);

    $data = array();

    foreach($result as $row)
    {
        $data[] = $row;
    }

    echo json_encode($data);
}
?>