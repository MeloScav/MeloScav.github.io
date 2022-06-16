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

    <svg class="project-details-banner-wave" viewBox="0 0 1920 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0 48.0324V81H1920.01C1418.45 80.9615 1153.3 51.742 943.503 28.6218C669.245 -1.60176 489.568 -21.4024 0 48.0324Z"
            fill="#FFFDFF" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M2.31266e-05 0.458252C-0.394774 0.458252 -0.789662 0.458252 -1.18464 0.458252C-1.18464 0.458252 -3.0192 28.0176 -1.18464 68.9939C16.6872 66.3275 34.8791 63.5162 53.4991 60.6387C182.85 40.6493 332.862 17.4671 539.782 17.4671C617.938 17.4671 715.246 16.642 821.789 15.301C606.51 -6.0675 414.175 -11.1678 0 48.0001C8.58307e-06 32.7031 1.62125e-05 16.8268 2.31266e-05 0.458252Z"
            fill="#AB2BC0" />
    </svg>

    <?php if (isset($currentProject['detailsBanner']) && !empty($currentProject['detailsBanner'])) : ?>
    <img class="project-details-banner-img" src="<?= $currentProject['detailsBanner']; ?>"
        alt="<?= $currentProject['title']; ?>" />
    <?php endif; ?>
</section>