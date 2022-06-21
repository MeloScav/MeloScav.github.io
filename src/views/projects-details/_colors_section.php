<?php
$projectDetailsColors = (isset($currentProject['detailsColors']['colors']) && !empty($currentProject['detailsColors']['colors'])) ? $currentProject['detailsColors']['colors'] : null;
$projectDetailsColorsImg = (isset($currentProject['detailsColors']['image']) && !empty($currentProject['detailsColors']['image'])) ? $currentProject['detailsColors']['image'] : null;
$projectDetailsColorsClass = (isset($currentProject['detailsColors']['cssClass']) && !empty($currentProject['detailsColors']['cssClass'])) ? $currentProject['detailsColors']['cssClass'] : null;
?>

<?php if ($projectDetailsColors) : ?>

<section class="project-details-colors">
    <div class="container">
        <h2 class="project-details-colors-title mb-lg">Les couleurs</h2>
        <div class="project-details-colors-content">
            <div class="colors-wrapper grid-gap gap-32">

                <?php foreach ($projectDetailsColors as $color) : ?>
                <div class="color">
                    <?php if ($color['colorHex']) : ?>
                    <div class="color-block <?= $projectDetailsColorsClass . '-' . $color['name'] ?>">
                        <p><?= $color['colorHex'] ?></p>
                    </div>
                    <?php endif; ?>
                    <?php if ($color['text']) : ?>
                    <div class="color-text">
                        <p>
                            <?= $color['text'] ?>
                        </p>
                    </div>
                    <?php endif; ?>
                </div>
                <?php endforeach; ?>

            </div>

            <?php if ($projectDetailsColorsImg) : ?>
            <img class="project-details-colors-img" src="<?= $projectDetailsColorsImg; ?>"
                alt="<?= $currentProject['title']; ?>">
            <?php endif; ?>

        </div>
    </div>

    <svg class="project-details-colors-wave" viewBox="0 0 1920 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0 0H1920V59.5765C1430.68 -4.69552 1251.1 13.6328 976.985 41.609L976.985 41.609C792.098 60.4785 564.206 83.7371 169.264 89H0V0Z"
            fill="#8FB9F1" />
    </svg>

</section>

<?php endif; ?>