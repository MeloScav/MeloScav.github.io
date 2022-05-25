<?php $title = 'Accueil'; ?>
<?php ob_start(); ?>

<?php
// $test = "<h1>test</h1><p>test</p>";
// echo $test;
?>

<?php include("./views/_banner.php"); ?>
<div class="section-stack section-py">
    <?php include("./views/_projects_section.php"); ?>
    <?php include("./views/_see_more_project_section.php"); ?>
    <?php include("./views/_about_me_section.php"); ?>
</div>

<?php $content = ob_get_clean(); ?>
<?php require('./views/_template.php'); ?>