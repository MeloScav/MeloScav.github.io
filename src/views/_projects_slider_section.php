<?php
$projectsSliderByType = array();

foreach ($PROJECTS as $project) {
    if (isset($project['type']) && count($project['type']) > 0) {
        foreach ($project['type'] as $projectType) {
            if ($projectType !== $projectsType) {
                $projectsSliderByType[] = $project;
            }
        }
    }
}
?>

<section>
    <div class="container section-stack-sm">
        <h2 class="text-center">Voir plus de projets</h2>

        <div class="splide" role="group" aria-label="Carousel">
            <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev">
                    <svg>
                        <use href="../assets/sprite.svg#slider-arrow-icon"></use>
                    </svg>
                </button>
                <button class="splide__arrow splide__arrow--next">
                    <svg>
                        <use href="../assets/sprite.svg#slider-arrow-icon"></use>
                    </svg>
                </button>
            </div>

            <div class="splide__track--wrapper">
                <div class="splide__track">
                    <div class="splide__list">
                        <?php foreach ($projectsSliderByType as $project) : ?>
                        <?php if (isset($project['slideBanner']) && !empty($project['slideBanner'])) : ?>
                        <div class="splide__slide project-card-wrapper">
                            <div class="project-card">
                                <img class="project-card-img" src="<?= $project['slideBanner']; ?>"
                                    alt="<?= $project['title']; ?>">

                                <?php if (isset($project['link']) && !empty($project['link'])) : ?>
                                <a class="project-card-link stretched-link" href="<?= $project['link']; ?>">
                                    <span>Voir en détails</span>
                                </a>
                                <?php endif; ?>
                            </div>
                        </div>
                        <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>