<?php
$title = 'Projects | Illu car';
$transparentMainNav = true;
require($_SERVER['DOCUMENT_ROOT'] . '/src/data/database.php');

$currentProject = [];

foreach ($PROJECTS as $project) {
    if (isset($project['link']) && $project['link'] === str_replace("/src", "", $_SERVER['PHP_SELF'])) {
        $currentProject = $project;
    }
}

?>
<?php ob_start(); ?>

<?php include("../../views/projects-details/_banner_section.php"); ?>
<div class="section-stack">
    <?php include("../../views/projects-details/_presentation_section.php"); ?>
    <?php include("../../views/projects-details/_colors_section.php"); ?>
    <?php include("../../views/projects-details/_fonts_section.php"); ?>
    <?php include("../../views/projects-details/_icons_section.php"); ?>
    <?php include("../../views/projects-details/_design_section.php"); ?>
</div>

<?php $content = ob_get_clean(); ?>
<?php require('../../views/_template.php'); ?>