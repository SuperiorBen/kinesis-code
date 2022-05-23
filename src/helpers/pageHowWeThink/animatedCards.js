const animatedCards = function () {
    bodymovin.loadAnimation({
        animationData:,
        container: document.getElementById(`card1`),
        path: "robot.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: `robot`,
    });

    bodymovin.loadAnimation({
        animationData:,
        container: document.getElementById(`card2`),
        path: "grafico.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: `grafico`,
    });

    bodymovin.loadAnimation({
        animationData:,
        container: document.getElementById(`card3`),
        path: "laptop.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: `laptop`,
    });

    bodymovin.loadAnimation({
        animationData:,
        container: document.getElementById(`card4`),
        path: "shield.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: `shield`,
    });

    bodymovin.loadAnimation({
        animationData:,
        container: document.getElementById(`card5`),
        path: "nube.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: `nube`,
    });
}