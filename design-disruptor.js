window.onload = function () {
    // GETTING ANIMATION CLASSES
    const animations = [
        "slide-in-left",
        "slide-in-right",
        "pulse-slow",
        "rotate",
        "rotate-backwards",
        "bounce-slow",
        "scale-up-down",
        "scale-down-up"
    ];

    // APPLIES ANIMATION CLASSES RADNOMLY TO ALL ELEMENTS AND CHILD ELEMENTS
    function applyRandomAnimation(element) {
        let randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        element.classList.add(randomAnimation);

        // RECURSE INTO CHILD ELEMENTS
        Array.from(element.children).forEach(child => {
            applyRandomAnimation(child);
        });
    }

    applyRandomAnimation(document.body);
};