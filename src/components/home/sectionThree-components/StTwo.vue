<template>
    <div id="beginSection2"></div>
    <div class="content-animation">
        <!--Planets -->
        <div id="S2planet1" data-aos="fade-up-left" class="content-planet1">
            <img src="../../../assets/images-home/section3/moon.svg" alt="moon" />
        </div>
        <div id="S2planet2" data-aos="fade-up-right" class="content-planet2 animate__animated animate__backInLeft">
            <img src="../../../assets/images-home/section3/planet1.svg" alt="planet1" />
        </div>
        <div id="S2planet3" data-aos="fade-down-right" class="content-planet3 animate__animated animate__backInLeft">
            <img src="../../../assets/images-home/section3/planet2.svg" alt="planet2" />
        </div>

        <!-- Backgrounds & stars -->
        <div id="S2content-bgStars" class="content-bgStars">
            <div id="S2bgStars"></div>
            <div id="S2bgStars2"></div>
        </div>
    </div>
    <div id="finalSection2"></div>
    <div class="content-animation2">

        <div id="S2astronautC" data-aos="zoom-in-up" class="content-c-astronaut">
            <div id="S2c-astronaut" class="content-astronaut">
                <div id="S2astronaut" class="astronaut"></div>
            </div>
        </div>

        <div id="S2content-c-paragraph" data-aos="zoom-out-down" class="content-c-paragraph">
            <div id="S2c-paragraph" class="content-paragraph">
                <div class="title-content">
                    <p>We design business cloud infrastructure</p>
                    <button>Learn more</button>
                </div>
                <p class="info-paragraph">
                    We modernize infrastructure: We design and deploy workloads in
                    public clouds, data centers, and edge locations based on the
                    specific requirements of your digital business.
                </p>
                <img class="img-moon" src="../../../assets/images-home/section3/cloud-infrastructure.png"
                    alt="image-cloud-infrastructure" />
                <div id="S2startext"></div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundStars from "../../../helpers/section3/starsbackground";
import miscellaneous from "../../../helpers/section3/miscellaneous";
export default {
    mounted() {
        AOS.init({
            delay: 500,
            duration: 400,
        });
        //   Lottie
        miscellaneous(2);
        backgroundStars(2);
    },
    unmounted() {
        const astronaut = document.getElementById("S2astronaut");
        const starText = document.getElementById("S2startext");
        const stars = document.getElementById("S2bgStars");
        const stars2 = document.getElementById("S2bgStars2");
        astronaut.innerHTML = "";
        starText.innerHTML = "";
        stars.innerHTML = "";
        stars2.innerHTML = "";
    }
};
</script>

<style lang="scss" scoped>
.content-animation {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #162b3e;

    .content-planet1 {
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 2;
        top: 0px;

        img {
            width: 24em;
            margin-top: 28em;
            margin-left: 0em;
        }
    }

    .content-planet2 {
        display: none;
    }

    .content-planet3 {
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 4;
        top: -100vh;

        img {
            width: 10em;
            margin-top: 1em;
            margin-left: 1em;
        }
    }

    .content-bgStars {
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 1;
        top: -200vh;

        #S2bgStars {
            width: 50em;
            transform: rotate(90deg);
            margin-left: -20em;
        }

        #S2bgStars2 {
            width: 50em;
            transform: rotate(90deg);
        }
    }
}

.content-animation2 {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin-top: -100vh;

    .content-c-astronaut {
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 5;
        top: 0px;

        .content-astronaut {
            width: 100vw;
            height: 100vh;

            .astronaut {
                width: 14em;
                margin-top: 0em;
                margin-left: 13em;
            }
        }
    }

    .content-c-paragraph {
        height: 100vh;
        width: 100vw;
        position: relative;
        top: -100vh;
        z-index: 6;
        display: flex;
        justify-content: center;
        align-items: center;

        .content-paragraph {
            color: white;
            width: 35em;
            height: 10em;
            margin-top: -20em;
            margin-left: 3em;
            border-radius: 8px;

            .title-content {
                font-size: 2em;
                font-weight: bold;
                margin: 0px;
                margin-left: -0.3em;
                width: 8em;

                p {
                    margin: 0px;
                    width: 7em;
                }

                button {
                    border: none;
                    border-radius: 8px;
                    color: white;
                    font-weight: bold;
                    background-color: #fe9900;
                    width: 100%;
                    padding: 0.5em 0em;
                    width: 17em;
                    cursor: pointer;
                }
            }

            .info-paragraph {
                margin-top: 1em !important;
                width: 95%;
                margin: 0px;
                margin-left: -0.8em;
                line-height: 1.2em;
                font-size: 0.9em;
            }

            .img-moon {
                width: 18em;
                position: relative;
                top: 5em;
                left: 0em;
            }

            #S2startext {
                position: relative;
                top: -30em;
                left: 0em;
            }
        }

    }
}


@media (min-width: 430px) {
    .content-animation {
        width: 100%;

        .content-planet1 {
            width: 100%;

            img {
                width: 35em;
                margin-top: 7em;
                margin-left: 42em;
            }
        }

        .content-planet2 {
            display: block;
            width: 100%;
            height: 100vh;
            position: relative;
            z-index: 3;
            top: -100vh;

            img {
                width: 20em;
                margin-top: 26em;
                margin-left: -3em;
            }
        }

        .content-planet3 {
            top: -200vh;

            img {
                width: 15em;
                margin-top: 2em;
                margin-left: 8em;
            }
        }

        .content-bgStars {
            width: 100%;
            height: 100vh;
            position: relative;
            z-index: 1;
            top: -300vh;

            #S2bgStars {
                width: 96em;
                transform: rotate(0deg);
                margin-left: 0em;
            }

            #S2bgStars2 {
                width: 96em;
                transform: rotate(0deg);
                margin-top: -28em;
            }
        }
    }

    .content-animation2 {
        width: 100%;

        .content-c-astronaut {
            width: 100%;
            top: 0vh !important;

            .content-astronaut {
                width: 100%;
                overflow: hidden;

                .astronaut {
                    width: 18em;
                    margin-top: 13em;
                    margin-left: 2em;
                }
            }
        }

        .content-c-paragraph {
            width: 100%;
            top: -100vh;
            z-index: 6;

            .content-paragraph {
                width: 35em;
                height: 10em;
                margin-top: -6em;
                margin-left: -2em;

                .info-paragraph {
                    margin-top: 1em !important;
                    width: 25em;
                    margin: 0px;
                    margin-left: -0.8em;
                    line-height: 1.4em;
                    font-size: 0.9em;
                }

                .img-moon {
                    width: 26em;
                    top: -20em;
                    left: 27em;
                }

                #S2startext {
                    top: -42em;
                    left: -8em;
                }
            }

        }
    }
}

@media (min-width: 1400px) {
    .content-animation {
        width: 100%;

        .content-planet1 {
            width: 100%;

            img {
                width: 35em;
                margin-top: 7em;
                margin-left: 45em;
            }
        }

        .content-planet2 {
            img {
                width: 18em;
                margin-top: 22em;
            }
        }

        .content-planet3 {
            img {
                margin-left: 5em;
            }
        }

    }

    .content-animation2 {

        .content-c-astronaut {
            .content-astronaut {
                .astronaut {
                    width: 18em;
                    margin-top: 25em;
                    margin-left: 10em;
                }
            }
        }


        .content-c-paragraph {
            .content-paragraph {
                margin-left: -6em;
            }

        }
    }
}

@media (min-width: 1600px) {
    .content-animation {

        .content-planet1 {

            img {
                width: 50em;
                margin-top: 15em;
                margin-left: 60em;
            }
        }

        .content-planet2 {

            img {
                width: 30em;
                margin-top: 37em;
                margin-left: 2em;
            }
        }

        .content-planet3 {

            img {
                width: 20em;
                margin-top: 2em;
                margin-left: 8em;
            }
        }

        .content-bgStars {

            #S1bgStars {
                width: 110em;
            }

            #S1bgStars2 {
                width: 110em;
            }
        }
    }

    .content-animation2 {


        .content-c-astronaut {

            .content-astronaut {

                .astronaut {
                    width: 28em;
                    margin-top: 40em;
                    margin-left: 37em;
                }
            }
        }

        .content-c-paragraph {
            width: 100%;
            top: -100vh;
            z-index: 6;

            .content-paragraph {
                width: 35em;
                height: 10em;
                margin-top: -16em;
                margin-left: -15em;

                .info-paragraph {
                    margin-top: 1em !important;
                    width: 25em;
                    margin: 0px;
                    margin-left: -0.8em;
                    line-height: 1.4em;
                    font-size: 1.2em;
                }

                .img-moon {
                    width: 35em;
                    top: -16em;
                    left: 37em;
                }

                #S2startext {
                    top: -42em;
                    left: -8em;
                }
            }

        }


    }

}
</style>