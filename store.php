<?php

$data = json_decode(file_get_contents("tasks.json"), true);

$title = $_POST['title'] ?? '';
$description = $_POST['description'] ?? '';

if($title == ""){
    echo json_encode(["error"=>"Titulo requerido"]);
    exit;
}

$newTask = [
    "id" => time(),
    "title" => $title,
    "description" => $description,
    "completed" => false
];

$data[] = $newTask;

file_put_contents("tasks.json", json_encode($data));

echo json_encode($newTask);