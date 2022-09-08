<?php
$title = 'Design';
$projectsType = 'design';
$transparentMainNav = false;
require($_SERVER['DOCUMENT_ROOT'] . '/src/data/_database.php');
?>

<?php ob_start(); ?>

<div class="section-stack">
    <?php include("./views/_projects_list_section.php"); ?>
    <?php include("./views/_projects_slider_section.php"); ?>
    <?php include("./views/_call_to_action_section.php"); ?>
</div>

<?php $content = ob_get_clean(); ?>
<?php require('./views/_template.php'); ?>