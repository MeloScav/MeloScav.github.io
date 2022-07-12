<?php if (isset($currentProject['icons']) && !empty($currentProject['icons'])) : ?>
<section class="project-details-icons">
    <div class="container">
        <h2 class="mb-lg project-details-icons-title">Les icônes</h2>

        <?php foreach ($currentProject['icons'] as $index => $projectIcon) : ?>
        <?php
                $iconCSSClass = "";

                if ($index % 2 == 0) {
                    $iconCSSClass .= " icons-right";
                } else {
                    $iconCSSClass .= " icons-left";
                }

                ?>
        <div class="project-details-icons-content<?= $iconCSSClass; ?>">
            <div class="icons-text">
                <?php if (isset($projectIcon['icon'])) : ?>
                <img class="mb-lg" src="<?= $projectIcon['icon'] ?>" alt="<?= $projectIcon['iconAlt'] ?>">
                <?php endif; ?>
                <?php if (isset($projectIcon['text'])) : ?>
                <div class="texts">
                    <?php foreach ($projectIcon['text'] as $projectIconText) : ?>
                    <p><?= $projectIconText ?></p>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?>
            </div>

            <?php if (isset($projectIcon['image'])) : ?>
            <div class="icons-image">
                <img src="<?= $projectIcon['image'] ?>" alt="<?= $currentProject['title'] ?>">
            </div>
            <?php endif; ?>
        </div>
        <?php endforeach; ?>
        <svg class="project-details-icons-wave" viewBox="0 0 1920 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 0H1920V59.5761C1430.69 -4.69575 1251.1 13.6325 976.986 41.6087C792.096 60.4786 564.198 83.7377 169.241 89H0V0Z"
                fill="#D595DF" />
        </svg>
    </div>
</section>
<?php endif; ?>