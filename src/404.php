<?php
$title = 'Page 404';
$transparentMainNav = false;
?>

<?php ob_start(); ?>

<?php include("./views/_404-section.php"); ?>

<?php $content = ob_get_clean(); ?>
<?php require('./views/_template.php'); ?>