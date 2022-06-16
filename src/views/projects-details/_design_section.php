<?php if (isset($currentProject['design']) && !empty($currentProject['design'])) : ?>

<section class="project-details-design">
    <div class="container">
        <h2>Le design</h2>

        <?php foreach ($currentProject['design'] as $index => $projectDesign) : ?>
        <?php
                $projectDesignCSSClass = "";

                if ($index % 2 == 0) {
                    $projectDesignCSSClass .= " img-right";
                } else {
                    $projectDesignCSSClass .= " img-left";
                }
                ?>

        <div class="project-details-design-content<?= $projectDesignCSSClass; ?>">
            <?php if (isset($projectDesign['text'])) : ?>
            <div class="design-text">
                <?php foreach ($projectDesign['text'] as $projectDesignText) : ?>
                <p><?= $projectDesignText ?></p>
                <?php endforeach; ?>
            </div>
            <?php endif; ?>

            <?php if (isset($projectDesign['image'])) : ?>
            <div class="design-image">
                <img src="<?= $projectDesign['image'] ?>" alt="<?= $currentProject['title'] ?>">
            </div>
            <?php endif; ?>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<?php endif; ?>