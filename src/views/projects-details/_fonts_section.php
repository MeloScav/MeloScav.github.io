<?php if (isset($currentProject['fonts']) && !empty($currentProject['fonts'])) : ?>
<section class="project-details-font">
    <div class="container">
        <h2 class="mb-lg">Les polices</h2>

        <?php foreach ($currentProject['fonts'] as $projectFont) : ?>
        <div class="project-details-font-content">
            <?php if (isset($projectFont['image'])) : ?>
            <div class="font-image">
                <img src="<?= $projectFont['image'] ?>" alt="<?= $projectFont['title'] ?>">
            </div>
            <?php endif; ?>

            <div class="font-text mb-left">
                <?php if (isset($projectFont['title'])) : ?>
                <h3><?= $projectFont['title'] ?></h3>
                <?php endif; ?>

                <?php if (isset($projectFont['text'])) : ?>
                <?php foreach ($projectFont['text'] as $projectFontText) : ?>
                <p><?= $projectFontText ?></p>
                <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
        <?php endforeach; ?>

</section>
<?php endif; ?>