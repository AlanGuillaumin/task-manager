<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Task Manager</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="assets/styles.css">

</head>

<body class="container mt-5">

<h2>Gestor de Tareas</h2>

<div class="card p-3">

<form id="taskForm">

<div class="mb-3">
<label>Título</label>
<input type="text" id="title" class="form-control" required>
</div>

<div class="mb-3">
<label>Descripción</label>
<textarea id="description" class="form-control"></textarea>
</div>

<button class="btn btn-primary">
Guardar
</button>

</form>

</div>

<hr>

<h4>Lista de Tareas</h4>

<ul id="taskList" class="list-group"></ul>

<script src="assets/script.js"></script>

</body>
</html>