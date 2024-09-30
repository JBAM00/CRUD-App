<?php

header("Access-Control-Allow-Origin:* ");

header("Access-Control-Allow-Headers:* ");

header("Access-Control-Allow-Methods:* ");

$connect = new PDO("mysql:host=127.0.0.1;dbname=crud", "root", "");

$method = $_SERVER['REQUEST_METHOD'];

if($method === 'GET')
{ 
    if(isset($_GET['ID']))
    {
        $query = "SELECT * FROM users WHERE ID = '".$_GET["ID"]."'";

        $result = $connect->query($query, PDO::FETCH_ASSOC); 

        $data = array();    
        
        foreach($result as $row)
        {
            $data['Firstname'] = $row['Firstname'];

            $data['Lastname'] = $row['Lastname'];

            $data['Email'] = $row['Email'];

            $data['ID'] = $row['ID'];
        }

        echo json_encode($data);
    }
    else
    {
        $query = "SELECT * FROM users ORDER BY ID DESC";

        $result = $connect->query($query, PDO::FETCH_ASSOC);

        $data = array();

        foreach($result as $row)
        {
            $data[] = $row;
        }

        echo json_encode($data); 
    }
}

if($method === 'POST')
{
    $form_data = json_decode(file_get_contents('php://input'));

    $data = array(
        ':Firstname'        => $form_data->Firstname,
        ':Lastname'         => $form_data->Lastname, 
        ':Email'            => $form_data->Email
    );

    $query = "
    INSERT INTO users (Firstname, Lastname, Email) VALUES (:Firstname, :Lastname, :Email);
    ";

    $statement = $connect->prepare($query);

    $statement->execute($data);

    echo json_encode(["success" => "done"]);
}

if($method === 'PUT')
{
    $form_data = json_decode(file_get_contents('php://input'));
    
    $data = array(
        ':Firstname'        => $form_data->Firstname,
        ':Lastname'         => $form_data->Lastname, 
        ':Email'            => $form_data->Email,
        ':ID'               => $form_data->ID
    );

    $query = "
    UPDATE users SET Firstname = :Firstname, Lastname = :Lastname, Email = :Email WHERE ID = :ID
    ";

    $statement = $connect->prepare($query);

    $statement->execute($data);

    echo json_encode(["success" => "done"]);
}

if($method === 'DELETE')
{
    $data = array(
        'ID' => $_GET['ID']
    );

    $query = " DELETE FROM users WHERE ID = :ID ";

    $statement = $connect->prepare($query);

    $statement->execute($data);

    echo json_encode(["success" => "done"]);
}

?>