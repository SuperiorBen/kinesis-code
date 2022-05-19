<template>
    <div id="beginSection4"></div>
    <div class="content-animation">
        <!--Planets -->
        <div id="S4planet1" class="content-planet1">
            <img src="../../../assets/images-home/section3/moon.svg" alt="moon" />
        </div>
        <div id="S4planet2" class="content-planet2">
            <img src="../../../assets/images-home/section3/planet1.svg" alt="planet1" />
        </div>
        <div id="S4planet3" class="content-planet3">
            <img src="../../../assets/images-home/section3/planet2.svg" alt="planet2" />
        </div>

        <!-- Backgrounds & stars -->
        <div id="S4content-bgStars" class="content-bgStars">
            <div id="S4bgStars"></div>
            <div id="S4bgStars2"></div>
        </div>
    </div>
    <div id="finalSection4"></div>
    <div class="content-animation2">

        <div id="S4satelliteC" class="content-c-satellite">
            <div id="S4c-satellite" class="content-satellite">
                <div id="S4satellite" class="satellite"></div>
            </div>
        </div>

        <div id="S4content-c-paragraph" class="content-c-paragraph">
            <div id="S4c-paragraph" class="content-paragraph">
                <div class="title-content">
                    <p>We create Smart Operations</p>
                    <button>Learn more</button>
                </div>
                <p class="info-paragraph">
                    We help technology organizations run smarter by integrating
                    analytics, monitoring, and service management platforms to improve
                    efficiency, user experience, and security.
                </p>
                <img class="img-moon" src="../../../assets/images-home/section3/smart-operation.png"
                    alt="image-smart-operation" />
                <div id="S4startext"></div>
            </div>
        </div>
    </div>





</template>

<script>
import backgroundStars from "../../../helpers/section3/starsbackground";
import scrolls from "../../../helpers/section3/scrollsanimations";
import miscellaneous from "../../../helpers/section3/miscellaneous";
export default {
    mounted() {
        //   Lottie
        miscellaneous(4);
        backgroundStars(4);
    },
};
</script>

<style lang="scss" scoped>
.content-animation {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    transition: ease-in-out 1s;
    background: #162b3e;

    .content-planet1 {
        width: 100vw;
        height: 100vh;
        transition: ease-in-out 1s;
        position: relative;
        z-index: 2;
        top: 0px;

        img {
            width: 25em;
            margin-top: 28em;
            margin-left: 0em;
            transition: ease-in-out 1s;
        }
    }

    .content-planet2 {
        display: none;
    }

    .content-planet3 {
        width: 100vw;
        height: 100vh;
        transition: ease-in-out 1s;
        position: relative;
        z-index: 4;
        top: -100vh;

        img {
            width: 15em;
            margin-top: -8em;
            margin-left: 1em;
            transition: ease-in-out 1s;
        }
    }

    .content-bgStars {
        width: 100vw;
        height: 100vh;
        transition: ease-in-out 1s;
        position: relative;
        z-index: 1;
        top: -200vh;

        #S4bgStars {
            width: 50em;
            transform: rotate(90deg);
            margin-left: -20em;
        }

        #S4bgStars2 {
            width: 50em;
            transform: rotate(90deg);
        }
    }
}

.content-animation2 {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    transition: ease-in-out 1s;
    margin-top: -100vh;

    .content-c-satellite {
        width: 100vw;
        height: 100vh;
        transition: ease-in-out 1s;
        position: relative;
        z-index: 5;
        top: 0px;

        .content-satellite {
            width: 100vw;
            height: 100vh;

            .satellite {
                width: 12em;
                margin-top: 1em;
                margin-left: 13em;
            }
        }
    }

    .content-c-paragraph {
        height: 100vh;
        width: 100vw;
        transition: ease-in-out 0.5s;
        position: relative;
        top: -100vh;
        z-index: 6;
        display: flex;
        justify-content: center;
        align-items: center;

        .content-paragraph {
            transition: ease-in-out 0.5s;
            color: white;
            width: 35em;
            height: 10em;
            margin-top: -22em;
            margin-left: 3em;
            border-radius: 8px;

            .title-content {
                transition: ease-in-out 0.5s;
                font-size: 2em;
                font-weight: bold;
                margin: 0px;
                margin-left: -0.3em;
                width: 8em;

                p {
                    margin: 0px;
                    width: 7em;
                    transition: ease-in-out 0.5s;
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
                    transition: ease-in-out 0.5s;
                    cursor: pointer;
                }
            }

            .info-paragraph {
                margin-top: 1em !important;
                width: 25em;
                margin: 0px;
                margin-left: -0.8em;
                line-height: 1.2em;
                font-size: 0.9em;
                transition: ease-in-out 0.5s;
            }

            .img-moon {
                width: 20em;
                position: relative;
                top: 6em;
                left: -1em;
            }

            #S4startext {
                position: relative;
                top: -48em;
                left: -8em;
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
            transition: ease-in-out 1s;
            position: relative;
            z-index: 3;
            top: -100vh;

            img {
                width: 25em;
                margin-top: 30em;
                margin-left: -3em;
                transition: ease-in-out 1s;
            }
        }

        .content-planet3 {
            top: -200vh;

            img {
                width: 15em;
                margin-top: 2em;
                margin-left: 1em;
                transition: ease-in-out 1s;
            }
        }

        .content-bgStars {
            width: 100%;
            height: 100vh;
            transition: ease-in-out 1s;
            position: relative;
            z-index: 1;
            top: -300vh;

            #S4bgStars {
                width: 96em;
                transform: rotate(0deg);
                margin-left: 0em;
            }

            #S4bgStars2 {
                width: 96em;
                transform: rotate(0deg);
                margin-top: -28em;
            }
        }
    }

    .content-animation2 {
        width: 100%;

        .content-c-satellite {
            width: 100%;
            top: 0vh !important;

            .content-satellite {
                width: 100%;
                overflow: hidden;

                .satellite {
                    width: 15em;
                    margin-top: 19em;
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
                    top: -17em;
                    left: 27em;
                }

                #S4startext {
                    top: -32em;
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

        .content-planet3 {
            img {
                margin-left: 1em;
            }
        }

    }

    .content-animation2 {
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

            #S4bgStars {
                width: 110em;
            }

            #S4bgStars2 {
                width: 110em;
            }
        }
    }

    .content-animation2 {


        .content-c-satellite {

            .content-satellite {

                .satellite {
                    width: 25em;
                    margin-top: 45em;
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
                    top: -11em;
                    left: 37em;
                }

                #S4startext {
                    top: -42em;
                    left: -8em;
                }
            }

        }


    }

}

</style>