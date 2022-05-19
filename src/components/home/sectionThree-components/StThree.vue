<template>
    <div id="beginSection3"></div>
    <div class="content-animation">
        <!--Planets -->
        <div id="S3planet1" class="content-planet1">
            <img src="../../../assets/images-home/section3/moon.svg" alt="moon" />
        </div>
        <div id="S3planet2" class="content-planet2">
            <img src="../../../assets/images-home/section3/planet1.svg" alt="planet1" />
        </div>
        <div id="S3planet3" class="content-planet3">
            <img src="../../../assets/images-home/section3/planet2.svg" alt="planet2" />
        </div>

        <!-- Backgrounds & stars -->
        <div id="S3content-bgStars" class="content-bgStars">
            <div id="S3bgStars"></div>
            <div id="S3bgStars2"></div>
        </div>
    </div>
    <div id="finalSection3"></div>
    <div class="content-animation2">

        <div id="S3satelliteC" class="content-c-satellite">
            <div id="S3c-satellite" class="content-satellite">
                <div id="S3satellite" class="satellite"></div>
            </div>
        </div>

        <div id="S3content-c-paragraph" class="content-c-paragraph">
            <div id="S3c-paragraph" class="content-paragraph">
                <div class="title-content">
                    <p>We offer modern applications and analysis</p>
                    <button>Learn more</button>
                </div>
                <p class="info-paragraph">
                    We build cloud-native applications and provide modern data-driven
                    solutions, delivering better software faster while reducing the
                    complexity of your development process.
                </p>
                <img class="img-moon" src="../../../assets/images-home/section3/modern.png" alt="image-modern" />
                <div id="S3startext"></div>
            </div>
        </div>
    </div>







</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundStars from "../../../helpers/section3/starsbackground";
import scrolls from "../../../helpers/section3/scrollsanimations";
import miscellaneous from "../../../helpers/section3/miscellaneous";
export default {
    mounted() {
        AOS.init();
        //   Lottie
        miscellaneous(3);
        backgroundStars(3);
        // Scroll magic
        // scrolls(2);
        // Background star animation ===========================================================================
    },
};
</script>

<style lang="scss" scoped>
.content-animation {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    transition: ease-in-out 1s;

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

        #S3bgStars {
            width: 50em;
            transform: rotate(90deg);
            margin-left: -20em;
        }

        #S3bgStars2 {
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
                margin-top: 0em;
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
            margin-top: -25em;
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
                width: 15em;
                position: relative;
                top: 5em;
                left: 2em;
            }

            #S3startext {
                position: relative;
                top: -35em;
                left: -1em;
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
                margin-left: 2em;
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
                margin-left: 58em;
                transition: ease-in-out 1s;
            }
        }

        .content-planet3 {
            top: -200vh;

            img {
                width: 15em;
                margin-top: 2em;
                margin-left: 60em;
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

            #S3bgStars {
                width: 96em;
                transform: rotate(0deg);
                margin-left: 0em;
            }

            #S3bgStars2 {
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
                    width: 17em;
                    margin-top: 34em;
                    margin-left: 35em;
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
                margin-top: -12em;
                margin-left: 42em;

                .info-paragraph {
                    margin-top: 1em !important;
                    width: 25em;
                    margin: 0px;
                    margin-left: -0.8em;
                    line-height: 1.4em;
                    font-size: 0.9em;
                }

                .img-moon {
                    width: 20em;
                    top: -19em;
                    left: -33em;
                }

                #S3startext {
                    top: -42em;
                    left: -8em;
                }
            }

        }
    }
}

@media (min-width: 1400px) {
    .content-animation2 {
        .content-c-paragraph {
            .content-paragraph {
                margin-left: 34em;
            }

        }
    }
}
</style>