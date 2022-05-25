function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
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

    window.addEventListener('resize', removeTransitionMdClass);

    const navbarToggler = document.querySelector(".header-nav .navbar-toggle-wrapper");
    navbarToggler.addEventListener("click", function () {
        document.querySelector("body").classList.toggle("nav-open")
    })

    // WAVES ANIMATION
    const waves = document.querySelectorAll(".main-banner-wave");
    const wavesAnimationDuration = parseFloat(getComputedStyle(document.body).getPropertyValue('--main-banner-wave-animation-duration')) * 1000;

    function addAnimateClass() {

        waves.forEach((wave) => {
            wave.classList.toggle("animate")
        })
    }

    addAnimateClass()

    setInterval(() => {
        addAnimateClass()
    }, wavesAnimationDuration);
})