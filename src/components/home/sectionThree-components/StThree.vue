<template>
    <div id="beginSection3"></div>
    <div class="content-animation">
        <!--Planets -->
        <div id="S3planet1" data-aos="fade-up-right" class="content-planet1">
            <img src="../../../assets/images-home/section3/moon.svg" alt="moon" />
        </div>
        <div id="S3planet2" data-aos="fade-up-left" class="content-planet2 animate__animated animate__backInLeft">
            <img src="../../../assets/images-home/section3/planet1.svg" alt="planet1" />
        </div>
        <div id="S3planet3" data-aos="fade-down-left" class="content-planet3 animate__animated animate__backInLeft">
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

        <div id="S3satelliteC" data-aos="zoom-in-up" class="content-c-satellite">
            <div id="S3c-satellite" class="content-satellite">
                <div id="S3satellite" class="satellite"></div>
            </div>
        </div>

        <div id="S3content-c-paragraph" data-aos="zoom-out-down" class="content-c-paragraph">
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
import miscellaneous from "../../../helpers/section3/miscellaneous";
export default {
    mounted() {
        AOS.init({
            delay: 500,
            duration: 400,
        });
        //   Lottie
        miscellaneous(3);
        backgroundStars(3);
    },
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
            margin-top: 0em;
            margin-left: 12em;

        }
    }

    .content-bgStars {
        width: 100vw;
        height: 100vh;
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
    margin-top: -100vh;

    .content-c-satellite {
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: 5;
        top: 0px;

        .content-satellite {
            width: 100vw;
            height: 100vh;

            .satellite {
                width: 12em;
                margin-top: 23em;
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
            margin-top: -74em;
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
            position: relative;
            z-index: 3;
            top: -100vh;

            img {
                width: 20em;
                margin-top: 1em;
                margin-left: 58em;
            }
        }

        .content-planet3 {
            top: -200vh;

            img {
                width: 15em;
                margin-top: 32em;
                margin-left: 60em;
            }
        }

        .content-bgStars {
            width: 100%;
            height: 100vh;
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
    .content-animation {
        width: 100%;

        .content-planet3 {
            img {
                margin-top: 30em;
            }
        }

    }

    .content-animation2 {
        .content-c-paragraph {
            .content-paragraph {
                margin-left: 34em;
            }

        }
    }
}

@media (min-width: 1600px) {
    .content-animation {


        .content-planet1 {

            img {
                width: 50em;
                margin-top: 7em;
                margin-left: 0em;
            }
        }

        .content-planet2 {

            img {
                width: 30em;
                margin-top: 36em;
                margin-left: 86em;
            }
        }

        .content-planet3 {

            img {
                width: 20em;
                margin-top: 0em;
                margin-left: 78em;
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
        width: 100%;

        .content-c-satellite {
            width: 100%;
            top: 0vh !important;

            .content-satellite {
                width: 100%;
                overflow: hidden;

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
                margin-top: -12em;
                margin-left: 42em;

                .info-paragraph {
                    margin-top: 1em !important;
                    width: 25em;
                    margin: 0px;
                    margin-left: -0.8em;
                    line-height: 1.4em;
                    font-size: 1.2em;
                }

                .img-moon {
                    width: 28em;
                    top: -30em;
                    left: -48em;
                }

                #S3startext {
                    top: -55em;
                    left: -8em;
                }
            }

        }
    }

}
</style>