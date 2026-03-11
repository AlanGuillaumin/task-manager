<?php

$data = json_decode(file_get_contents("tasks.json"), true);

$id = $_POST['id'];

foreach ($data as &$task) {

    if ($task['id'] == $id) {
        $task['completed'] = !$task['completed'];
    }

}

file_put_contents("tasks.json", json_encode($data));

echo json_encode(["success" => true]);
