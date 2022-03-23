<?php $title = 'Accueil'; ?>
<?php ob_start(); ?>

<?php
$test = "test 3";
echo $test;
?>

<?php $content = ob_get_clean(); ?>
<?php require('./views/_template.php'); ?>