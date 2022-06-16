<section class="bg-light-secondary">
    <div class="container section-stack-sm">
        <h2>Mes projets récents</h2>

        <?php
        $projectsLimit = 3;
        $lastProjects = array_slice($PROJECTS, -$projectsLimit, $projectsLimit, false);

        // $lastProjects = array();

        // foreach ($PROJECTS as $index => $project) {
        //     if ($index === 3 || $index === 2 || $index === 1) {
        //         $lastProjects[] = $project;
        //     }
        // }
        ?>

        <?php foreach ($lastProjects as $index => $project) : ?>
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
</section>