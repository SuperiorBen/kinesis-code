const scrolls = function () {
    let controller = new ScrollMagic.Controller();
    // Planet1 animation ===========================================================================
    let planet1Scene1 = new ScrollMagic.Scene({
        triggerElement: "#part2-animation",
    })
        .setClassToggle("#planet1", "content-planet1-part2")
        .addTo(controller);

    let planet1Scene2 = new ScrollMagic.Scene({
        triggerElement: "#part3-animation",
    })
        .setClassToggle("#planet1", "content-planet1-part3")
        .addTo(controller);

    let planet1Scene3 = new ScrollMagic.Scene({
        triggerElement: "#part4-animation",
    })
        .setClassToggle("#planet1", "content-planet1-part4")
        .addTo(controller);

    // Planet2 animation ===========================================================================

    let planet2Scene1 = new ScrollMagic.Scene({
        triggerElement: "#part2-animation",
    })
        .setClassToggle("#planet2", "content-planet2-part2")
        .addTo(controller);

    let planet2Scene2 = new ScrollMagic.Scene({
        triggerElement: "#part3-animation",
    })
        .setClassToggle("#planet2", "content-planet2-part3")
        .addTo(controller);

    let planet2Scene3 = new ScrollMagic.Scene({
        triggerElement: "#part4-animation",
    })
        .setClassToggle("#planet2", "content-planet2-part4")
        .addTo(controller);

    // Planet3 animation ===========================================================================
    let planet3Scene1 = new ScrollMagic.Scene({
        triggerElement: "#part2-animation",
    })
        .setClassToggle("#planet3", "content-planet3-part2")
        .addTo(controller);

    let planet3Scene2 = new ScrollMagic.Scene({
        triggerElement: "#part3-animation",
    })
        .setClassToggle("#planet3", "content-planet3-part3")
        .addTo(controller);

    let planet3Scene3 = new ScrollMagic.Scene({
        triggerElement: "#part4-animation",
    })
        .setClassToggle("#planet3", "content-planet3-part4")
        .addTo(controller);

    // rocket animation ===========================================================================
    let rocketScene1 = new ScrollMagic.Scene({
        triggerElement: "#part2-animation",
    })
        .setClassToggle("#c-rocket", "content-rocket-part2")
        .addTo(controller);

    let rocketScene2 = new ScrollMagic.Scene({
        triggerElement: "#part3-animation",
    })
        .setClassToggle("#c-rocket", "content-rocket-part3")
        .addTo(controller);

    let rocketScene3 = new ScrollMagic.Scene({
        triggerElement: "#part4-animation",
    })
        .setClassToggle("#c-rocket", "content-rocket-part4")
        .addTo(controller);

    // rocket animation ===========================================================================
    let satelliteScene1 = new ScrollMagic.Scene({
        triggerElement: "#part2-animation",
    })
        .setClassToggle("#c-satellite", "content-satellite-part2")
        .addTo(controller);

    let satelliteScene2 = new ScrollMagic.Scene({
        triggerElement: "#part3-animation",
    })
        .setClassToggle("#c-satellite", "content-satellite-part3")
        .addTo(controller);

    let satelliteScene3 = new ScrollMagic.Scene({
        triggerElement: "#part4-animation",
    })
        .setClassToggle("#c-satellite", "content-satellite-part4")
        .addTo(controller);

    // paragraph1 animation ===========================================================================
    let paragraph1Off = new ScrollMagic.Scene({
        triggerElement: "#part2-animation",
    })
        .setClassToggle("#c-paragraph1", "content-paragraph1-off")
        .addTo(controller);
}

export default scrolls;