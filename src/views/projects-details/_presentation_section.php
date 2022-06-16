<?php
$projectPresentation = (isset($currentProject['presentation']['text']) && !empty($currentProject['presentation']['text'])) ? $currentProject['presentation']['text'] : null;
$projectPresentationImage = (isset($currentProject['presentation']['image']) && !empty($currentProject['presentation']['image'])) ? $currentProject['presentation']['image'] : null;
?>

<?php if ($projectPresentation) : ?>
<section>
    <div class="container">
        <div class="project-details-presentation">
            <div class="project-details-presentation-content">
                <h2 class="mb-lg">Présentation</h2>
                <?php foreach ($projectPresentation as $projectPresentationText) : ?>
                <p><?= $projectPresentationText ?></p>
                <?php endforeach; ?>
                <?php if (isset($currentProject['presentation']['buttonLink']) && !empty($currentProject['presentation']['buttonLink'])) : ?>
                <a class="btn btn-primary" href="<?= $currentProject['presentation']['buttonLink']; ?>" target="_blank"
                    rel="noreferrer noopener">
                    Voir le site
                </a>
                <?php endif; ?>
            </div>

            <?php if ($projectPresentationImage) : ?>
            <div class="project-details-presentation-img">
                <img src="<?= $projectPresentationImage; ?>" alt="<?= $currentProject['title']; ?>">
            </div>
            <?php endif; ?>
        </div>
    </div>
</section>
<?php endif; ?>