<section class="project-details project-details-banner container-full">
    <div class="container pt-main-nav-height project-details-breadcrumb">
        <?php if (isset($currentProject['type']) && !empty($currentProject['type'])) : ?>
        <?php foreach ($currentProject['type'] as $index => $projectType) : ?>
        <a class="text-primary text-md" href="/<?= $projectType ?>.php">
            <?php
                    if ($projectType === "development") {
                        echo "Développement";
                    } else {
                        echo ucfirst($projectType);
                    }
                    ?>
            <?= ($index >= 0 && $index !== count($currentProject['type']) - 1) ? " / " : "" ?>
        </a>
        <?php endforeach; ?>
        <?php endif; ?>
    </div>

    <?php if (isset($currentProject['title']) && !empty($currentProject['title'])) : ?>
    <div class="container">
        <h1 class="project-details-title"><?= $currentProject['title']; ?></h1>
    </div>
    <?php endif; ?>

    <svg class="project-details-banner-wave" viewBox="0 0 1920 82" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.97291e-05 49.001C826.5 -76 907 80.9999 1920 81.0005C1920 81.3911 1920 82.0008 1920 82.0008H0.000455289C0.000455289 82.0008 -0.000242626 67.0011 8.97291e-05 49.001Z"
            fill="#FFFDFF" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M864.768 15.7844C741.47 17.4531 628.333 18.5122 539.781 18.5122C333.52 18.5122 184.705 41.5519 55.8653 61.4989C36.8485 64.443 18.2669 67.3198 8.36979e-05 70.0452C4.41352e-05 64.3136 1.71504e-05 58.8459 0 53.6802C1.44691e-05 52.1492 3.57526e-05 50.5868 6.50322e-05 49.001C399.277 -11.3862 624.453 -5.96018 864.768 15.7844Z"
            fill="#AB2BC0" />
    </svg>



    <?php if (isset($currentProject['detailsBanner']) && !empty($currentProject['detailsBanner'])) : ?>
    <img class="project-details-banner-img" src="<?= $currentProject['detailsBanner']; ?>"
        alt="<?= $currentProject['title']; ?>" />
    <?php endif; ?>
</section>