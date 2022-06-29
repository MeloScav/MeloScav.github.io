function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

ready(() => {
    // Anchor link scroll to section
    const anchorLinks = document.querySelectorAll('a[href*="#"]');

    const scrollTo = (element) => {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop
        });
    }

    if (anchorLinks.length > 0) {
        anchorLinks.forEach(anchorLink => {
            anchorLink.addEventListener("click", () => {
                const anchorTarget = document.querySelector(anchorLink.hash);
                if (anchorTarget.length > 0) {
                    scrollTo(anchorTarget);
                }
            });
        });
    }

    // Loading animation

    if (typeof sessionStorage.animatedOnce === "undefined") {
        sessionStorage.setItem("animatedOnce", "false");
    }

    const initLoaderPaths = document.querySelectorAll(".init-loader path");

    const launchInitLoader = () => {
        let anchorTarget;
        if (window.location.hash) {
            anchorTarget = document.querySelector(window.location.hash);
        }

        // If document is visible, stop event listener
        if (!document.hidden) {
            document.removeEventListener("visibilitychange", launchInitLoader);
        }

        // Check if the animation had run once
        if (sessionStorage.animatedOnce !== "true") {
            document.body.classList.add("init-loading");
            sessionStorage.setItem("animatedOnce", "true");

            // Check if each Path has finished its animation
            initLoaderPaths.forEach((path, index) => {
                let initLoaderAnimationFinished = false;
                path.addEventListener('animationend', () => {
                    initLoaderAnimationFinished = true;
                    if (index === initLoaderPaths.length - 1 && initLoaderAnimationFinished) {
                        window.scrollTo(0, 0);
                        setTimeout(() => {
                            document.body.classList.remove("init-loading", "loading");
                            // Smooth scroll to anchor target
                            if (anchorTarget) {
                                setTimeout(() => {
                                    scrollTo(anchorTarget);
                                }, 250);
                            }
                        }, 500);
                    }
                });
            });
        } else {
            // Remove loading class if animation had run once
            document.body.classList.remove("loading");

            // Smooth scroll to anchor target
            if (anchorTarget) {
                window.scrollTo(0, 0);
                scrollTo(anchorTarget);
            }
        }
    };

    // Check if page is visible by user
    if (document.visibilityState === "visible") {
        launchInitLoader();
    }
    // If not, add event listener to check the page visibility
    else {
        document.addEventListener("visibilitychange", launchInitLoader)
    }

    // Remove transition class on load
    const removeTransition = document.querySelectorAll(".remove-onload-transition");
    const removeTransitionClass = () => {
        removeTransition.forEach(element => {
            element.classList.remove("remove-onload-transition");
        });
    }

    removeTransitionClass();

    // Remove transition class for hamburger menu on resize
    const removeTransitionMd = document.querySelectorAll(".remove-transition-md");
    const removeTransitionMdClass = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth < 992) {
            removeTransitionMd.forEach(element => {
                element.classList.remove("remove-transition-md");
            });
        } else {
            removeTransitionMd.forEach(element => {
                element.classList.add("remove-transition-md");
            });
        }
    }

    removeTransitionMdClass();

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