<?php if (isset($currentProject['design']) && !empty($currentProject['design'])) : ?>
<?php
    $isSmallPhoto = false;
    $currentProjectIndex = array_search($currentProject, $PROJECTS);
    if ($currentProjectIndex !== false) {
        switch ($currentProjectIndex) {
            case 16:
            case 15:
                $isSmallPhoto = true;
                break;
        }
    }
    ?>
<section class="project-details-design">
    <div class="container">
        <h2>Le design</h2>

        <?php foreach ($currentProject['design'] as $index => $projectDesign) : ?>
        <?php
                $projectDesignCSSClass = "";
                $projectImageCSSClass = "";

                if ($index % 2 == 0) {
                    $projectDesignCSSClass .= " img-right";
                } else {
                    $projectDesignCSSClass .= " img-left";
                }

                if (isset($projectDesign['image']['cssClass'])) {
                    $projectImageCSSClass = " " . $projectDesign['image']['cssClass'];
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
            <div class='design-image<?= $projectImageCSSClass ?>'>
                <img src="<?= $projectDesign['image']['source'] ?>" alt="<?= $currentProject['title'] ?>">
            </div>
            <?php endif; ?>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<?php endif; ?>