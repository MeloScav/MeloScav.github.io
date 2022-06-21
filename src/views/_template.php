<!DOCTYPE html>
<html lang="fr">
<?php $activePage = basename($_SERVER['PHP_SELF'], ".php"); ?>

<head>
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
    <link rel="manifest" href="/assets/favicons/site.webmanifest">
    <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#ab2bc0">
    <link rel="shortcut icon" href="/assets/favicons/favicon.ico">
    <meta name="apple-mobile-web-app-title" content="M&eacute;lo&eacute; Scavezzoni">
    <meta name="application-name" content="M&eacute;lo&eacute; Scavezzoni">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="/assets/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Merienda:wght@700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.6/dist/css/splide-core.min.css">
    <link rel="stylesheet" href="/css/style.css">

    <title><?= $title ?></title>
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.6/dist/js/splide.min.js"></script>
</head>

<body class="loading">
    <?php include("_navbar.php"); ?>
    <?= $content ?>
    <?php include("_footer.php"); ?>

    <div class="init-loader remove-onload-transition">
        <svg viewBox="0 0 192 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.04 76.5C14.7345 76.5 18.54 72.6944 18.54 68C18.54 63.3056 14.7345 59.5 10.04 59.5C5.34562 59.5 1.54004 63.3056 1.54004 68C1.54004 72.6944 5.34562 76.5 10.04 76.5Z"
                stroke="#AB2BC0" stroke-miterlimit="10" class="logo-path-1" fill="none"></path>
            <path
                d="M0.53997 7.50002C0.86997 4.41002 1.53997 2.50002 3.53997 1.50002C4.74997 0.890015 8.63997 -0.849985 16.54 2.50002C34.3 10.03 65.52 40.28 61.54 64.5C61.1 67.2 60.11 73.22 55.54 75.5C51.8 77.37 46.25 76.44 44.54 73.5C42.4 69.83 46.83 65.64 48.54 60.5C59.54 27.5 -1.30003 24.88 0.53997 7.50002Z"
                stroke="#AB2BC0" stroke-miterlimit="10" class="logo-path-2" fill="none"></path>
            <path
                d="M41.54 7.50002C41.87 4.41002 42.54 2.50002 44.54 1.50002C45.75 0.890015 49.64 -0.849985 57.54 2.50002C75.3 10.03 106.52 40.28 102.54 64.5C102.1 67.2 101.11 73.22 96.54 75.5C92.8 77.37 87.25 76.44 85.54 73.5C83.4 69.83 87.83 65.64 89.54 60.5C100.54 27.5 39.7 24.88 41.54 7.50002Z"
                stroke="#AB2BC0" stroke-width="0.75" stroke-miterlimit="10" class="logo-path-3" fill="none"></path>
            <path
                d="M171.95 28.76C170.31 24.73 180.33 19.19 178.64 14.54C176.98 9.95 165.43 10.32 164.42 10.36C143.1 11.21 122.88 31.27 125.95 37.96C129.35 45.39 159.01 31.08 170.28 44.65C175.52 50.96 175.02 61.18 171.12 67.23C160.87 83.11 124.64 74.22 123.45 67.23C123.12 65.28 125.38 62.62 127.63 62.21C131.08 61.58 132.98 66.47 137.67 68.9C145.57 73 159.36 69.04 161.09 62.21C162.47 56.74 156.22 49.15 149.38 47.16C144.11 45.63 141.83 48.39 133.49 48.83C131.77 48.92 116.61 49.72 113.42 43.81C109.4 36.37 124.16 17.84 141.86 8.68C148.12 5.44 165.31 -3.45 178.66 4.5C188.01 10.07 194.29 23.19 190.37 28.75C186.66 34 173.63 32.83 171.97 28.75L171.95 28.76Z"
                stroke="#1E73E4" stroke-width="0.75" stroke-miterlimit="10" class="logo-path-4" fill="none"></path>
        </svg>
    </div>
    <script src="/index.js"></script>
</body>

</html>