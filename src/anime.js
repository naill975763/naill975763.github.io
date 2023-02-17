$(function() {
    AOS.init();

    anime({
        targets: ".avatar",
        translateX: "-25vw",
        direction: 'reverse',
        easing: "easeInOutBack",
        duration: 500,
    })
    
    anime({
        targets: "#привет-я-сон",
        marginLeft: "-6rem",
        opacity: "0",
        direction: 'reverse',
        easing: "easeInOutSine",
        duration: 500,
    })
})
