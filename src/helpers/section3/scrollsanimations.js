const scrolls = function (i) {
    let controller = new ScrollMagic.Controller();
    // Scene  animation ===========================================================================


    if (i != 1) {
        new ScrollMagic.Scene({
            triggerElement: `#beginSection${i}`,
        })
            .setClassToggle(`#S${i}planet1`, "animate__backInRight")
            .addTo(controller);
    
        new ScrollMagic.Scene({
            triggerElement: `#beginSection${i}`,
        })
            .setClassToggle(`#S${i}planet2`, "animate__backInRight")
            .addTo(controller);
    
        new ScrollMagic.Scene({
            triggerElement: `#beginSection${i}`,
        })
            .setClassToggle(`#S${i}planet3`, "animate__backInRight")
            .addTo(controller);
    
        new ScrollMagic.Scene({
            triggerElement: `#beginSection${i}`,
        })
            .setClassToggle(`#S${i}satelliteC`, "animate__backInLeft")
            .addTo(controller);
    
        new ScrollMagic.Scene({
            triggerElement: `#beginSection${i}`,
        })
            .setClassToggle(`#S${i}c-paragraph`, "animate__backInLeft")
            .addTo(controller);
    }











         new ScrollMagic.Scene({
            triggerElement: `#finalSection${i}`,
        })
            .setClassToggle(`#S${i}planet1`, "animate__backOutRight")
            .addTo(controller);
    
         new ScrollMagic.Scene({
            triggerElement: `#finalSection${i}`,
        })
            .setClassToggle(`#S${i}planet2`, "animate__backOutRight")
            .addTo(controller);
    
         new ScrollMagic.Scene({
            triggerElement: `#finalSection${i}`,
        })
            .setClassToggle(`#S${i}planet3`, "animate__backOutRight")
            .addTo(controller);
    
         new ScrollMagic.Scene({
            triggerElement: `#finalSection${i}`,
        })
            .setClassToggle(`#S${i}satelliteC`, "animate__backOutLeft")
            .addTo(controller);
    
         new ScrollMagic.Scene({
            triggerElement: `#finalSection${i}`,
        })
            .setClassToggle(`#S${i}c-paragraph`, "animate__backOutLeft")
            .addTo(controller);


    
    


}

export default scrolls;