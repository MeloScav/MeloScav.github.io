function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

ready(() => {
    // Loading animation
    const loadingAnimationDuration = parseFloat(getComputedStyle(document.body).getPropertyValue("--loading-animation-duration")) * 1000;

    if (typeof sessionStorage.animatedOnce === "undefined") {
        sessionStorage.setItem("animatedOnce", "false");
    }

    let animatedOnce = sessionStorage.getItem("animatedOnce") === "true";

    if (!animatedOnce) {
        sessionStorage.setItem("animatedOnce", "true");

        document.body.classList.add("loading");
        setTimeout(() => {
            document.body.classList.remove("loading");
        }, loadingAnimationDuration + 500);
    }

    // Remove transition class on load
    const removeTransition = document.querySelectorAll(".remove-onload-transition");
    const removeTransitionClass = () => {
        removeTransition.forEach(element => {
            element.classList.remove("remove-onload-transition");
        });
    }

    removeTransitionClass();

    // Remove transition class on resize for hamburger menu
    const removeOnloadTransitionMd = document.querySelectorAll(".remove-onload-transition-md");
    const removeOnloadTransitionMdClass = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth < 992) {
            removeOnloadTransitionMd.forEach(element => {
                element.classList.remove("remove-onload-transition-md");
            });
        } else {
            removeOnloadTransitionMd.forEach(element => {
                element.classList.add("remove-onload-transition-md");
            });
        }
    }

    removeOnloadTransitionMdClass();

    window.addEventListener("resize", removeTransitionMdClass);

    // Toggle hamburger menu
    const navbarToggler = document.querySelector(".header-nav .navbar-toggle-wrapper");
    navbarToggler.addEventListener("click", function () {
        document.querySelector("body").classList.toggle("nav-open")
    })

    // WAVES ANIMATION
    const waves = document.querySelectorAll("[data-animate-wave]");
    const wavesAnimationDuration = parseFloat(getComputedStyle(document.body).getPropertyValue("--wave-animation-duration")) * 1000;

    function addAnimateClass() {

        waves.forEach((wave) => {
            wave.classList.toggle("animate")
        })
    }

    addAnimateClass()

    setInterval(() => {
        addAnimateClass()
    }, wavesAnimationDuration);


    // Slide JS init
    if (document.querySelectorAll(".splide").length > 0) {
        const splideSlider = new Splide('.splide', {
            updateOnMove: true,
            type: 'loop',
            perPage: 3,
            perMove: 1,
            trimSpace: 'move',
            focus: 'center',
            drag: true,
            breakpoints: {
                1199: {
                    perPage: 2
                },
                991: {
                    perPage: 1,
                    focus: 0
                },
            }
        });
        splideSlider.mount();
    }

})