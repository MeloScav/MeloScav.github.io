<?php
$activePage = basename($_SERVER['PHP_SELF'], ".php");
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Merienda:wght@700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.6/dist/css/splide-core.min.css">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.6/dist/css/splide.min.css"> -->
    <link rel="stylesheet" href="/css/style.css">

    <title><?= $title ?></title>
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.6/dist/js/splide.min.js"></script>
</head>

<body>
    <?php include("_navbar.php"); ?>
    <?= $content ?>
    <?php include("_footer.php"); ?>
    <script src="/index.js"></script>
</body>

</html>