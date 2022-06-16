<section class="projects-wrapper">
    <div class="container pt-main-nav-height section-stack-sm">
        <h1><?= $title ?></h1>

        <?php
        $projectsListByType = array();

        foreach ($PROJECTS as $project) {
            if (isset($project['type']) && count($project['type']) > 0) {
                foreach ($project['type'] as $projectType) {
                    if ($projectType == $projectsType) {
                        $projectsListByType[] = $project;
                    }
                }
            }
        }
        ?>

        <?php foreach ($projectsListByType as $index => $project) : ?>
        <?php
            $projectCSSClass = "";

            if ($index % 2 == 0) {
                $projectCSSClass .= " project-left";
            } else {
                $projectCSSClass .= " project-right";
            }

            if (isset($project['cssClass']) && !empty($project['cssClass'])) {
                $projectCSSClass .= " " . $project['cssClass'];
            }
            ?>
        <div class="project<?= $projectCSSClass; ?>">
            <div class="box-image">
                <?php if (isset($project['introductionBanner']) && !empty($project['introductionBanner'])) : ?>
                <img src="<?= $project['introductionBanner']; ?>" alt="<?= $project['title']; ?>" />
                <?php endif; ?>

                <div class="overlay"></div>
            </div>
            <div class="project-info">
                <?php if (isset($project['title']) && !empty($project['title'])) : ?>
                <h3 class="h4"><?= $project['title']; ?></h3>
                <?php endif; ?>

                <?php if (isset($project['shortDescription']) && !empty($project['shortDescription'])) : ?>
                <p><?= $project['shortDescription']; ?></p>
                <?php endif; ?>

                <?php if (isset($project['link']) && !empty($project['link'])) : ?>
                <a href="<?= $project['link']; ?>" class="btn btn-outline-primary">En savoir plus</a>
                <?php endif; ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>

    <div class="project-banner-waves-wrapper">
        <svg class="project-banner-wave wave-1" viewBox="0 0 1920 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1920 0H0V59.5767C489.313 -4.69498 668.897 13.6333 943.013 41.6094C1127.89 60.4784 1355.78 83.7363 1750.7 89H1920V0Z"
                fill="#F2DFF6" />
        </svg>

        <svg class="project-banner-wave wave-2" viewBox="0 0 1920 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M-1 0H1922V68.9487C1431.92 -5.43325 1252.06 15.7781 977.513 48.155C792.346 69.9918 564.109 96.9077 168.581 103H-1V0Z"
                fill="#FBE9FF" fill-opacity="0.49" />
        </svg>
    </div>
</section>