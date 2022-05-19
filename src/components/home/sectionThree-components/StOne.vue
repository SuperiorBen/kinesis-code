<template>
    <div class="content-animation">
        <!--Planets -->
        <div id="S1planet1" data-aos="zoom-out-right" class="content-planet1">
            <img src="../../../assets/images-home/section3/moon.svg" alt="moon" />
        </div>
        <div id="S1planet2" data-aos="zoom-out-right" class="content-planet2 animate__animated animate__backInLeft">
            <img src="../../../assets/images-home/section3/planet1.svg" alt="planet1" />
        </div>
        <div id="S1planet3" data-aos="zoom-out-right" class="content-planet3 animate__animated animate__backInLeft">
            <img src="../../../assets/images-home/section3/planet2.svg" alt="planet2" />
        </div>

        <!-- Backgrounds & stars -->
        <div id="S1content-bgStars" class="content-bgStars">
            <div id="S1bgStars"></div>
            <div id="S1bgStars2"></div>
        </div>
    </div>
    <div id="finalSection1"></div>
    <div class="content-animation2">

        <div id="S1satelliteC" data-aos="zoom-out-left" class="content-c-satellite">
            <div id="S1c-satellite" class="content-satellite">
                <div id="S1satellite" class="satellite"></div>
            </div>
        </div>

        <div id="S1c-paragraph" data-aos="zoom-out-left" class="content-c-paragraph">
            <div class="content-paragraph">
                <div class="title-paragraph">
                    <img src="../../../assets/images-home/section3/logoWhite.svg" alt="" />
                    <p>What we do?</p>
                </div>
                <p class="paragraph-text">
                    Many organizations are stuck when it comes to transformation because
                    they haven't laid the right foundation to enable change. We power
                    your transformation by doing three things exceptionally well.
                </p>

                <img class="saeta-r1" src="../../../assets/images-home/section3/saeta.svg" alt="" />
                <img class="saeta-r2" src="../../../assets/images-home/section3/saeta.svg" alt="" />

                <img class="saeta-r3" src="../../../assets/images-home/section3/saeta.svg" alt="" />

                <img class="saeta-r4" src="../../../assets/images-home/section3/saeta.svg" alt="" />

                <div id="S1startext"></div>
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
        AOS.init({delay: 100});
        //   Lottie
        miscellaneous(1);
        backgroundStars(1);
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
            margin-top: 32em;
            margin-left: 1em;
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
            margin-top: 2em;
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

        #S1bgStars {
            width: 50em;
            transform: rotate(90deg);
            margin-left: -20em;
        }

        #S1bgStars2 {
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
                width: 15em;
                margin-top: 0em;
                margin-left: 8em;
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
            width: 22em;
            height: 10em;
            margin-top: -3em;
            margin-left: 0em;
            border-radius: 8px;

            .title-paragraph {
                transition: ease-in-out 0.5s;
                width: 20em;
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: flex-start;

                img {
                    transition: ease-in-out 0.5s;
                    width: 5em;
                    margin-top: 0.4em;
                }

                p {
                    transition: ease-in-out 0.5s;
                    font-size: 2em;
                    font-weight: bold;
                    margin: 0px;
                    margin-left: -0.3em;
                }
            }

            p {
                transition: ease-in-out 0.5s;
                margin: 0px;
                width: 22em;
                font-size: 0.8em;
                margin-left: 2em;
                margin-top: 1em;
                line-height: 1.4em;
            }

            .saeta-r1 {
                width: 3em;
                transform: rotateZ(270deg);
                position: relative;
                top: -180px;
            }

            .saeta-r2 {
                width: 3em;
                transform: rotateZ(180deg);
                position: relative;
                top: 0px;
                left: -48px;
            }

            .saeta-r3 {
                width: 3em;
                transform: rotateZ(0deg);
                position: relative;
                top: -180px;
                left: 200px;
            }

            .saeta-r4 {
                width: 3em;
                transform: rotateZ(90deg);
                position: relative;
                top: 0px;
                left: 150px;
            }

            #S1startext {
                position: relative;
                top: -240px;
                left: -35px;
            }
        }

    }
}

@media (min-width: 430px) {
    .content-animation {

        .content-planet1 {

            img {
                width: 40em;
                margin-top: 6em;
                margin-left: 44em;
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
            width: 100%;
            height: 100vh;
            transition: ease-in-out 1s;
            position: relative;
            z-index: 4;
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
            top: -300vh;

            #S1bgStars {
                width: 78em;
                transform: rotate(0deg);
                margin-left: 0em;
            }

            #S1bgStars2 {
                width: 78em;
                transform: rotate(0deg);
                margin-top: -20em;
            }
        }
    }

    .content-animation2 {
        width: 100%;


        .content-c-satellite {
            width: 100%;
            overflow: hidden;

            .content-satellite {
                width: 100%;

                .satellite {
                    width: 15em;
                    margin-top: 32em;
                    margin-left: 37em;
                }
            }
        }

        .content-c-paragraph {
            width: 100%;


            .content-paragraph {
                width: 25em;
                height: 10em;
                margin-top: -3em;
                margin-left: -20em;

                .title-paragraph {
                    width: 25em;


                    img {
                        width: 7em;
                        margin-top: 0.8em;
                    }

                    p {
                        font-size: 3em;
                        margin: 0px;
                        margin-left: -0.3em;
                    }
                }

                p {
                    margin: 0px;
                    width: 23em;
                    font-size: 1em;
                    margin-left: 2em;
                    margin-top: 1em;
                }

                .saeta-r1 {
                    width: 3em;
                    top: -220px;
                }

                .saeta-r2 {
                    width: 3em;
                    top: -15px;
                    left: -48px;
                }

                .saeta-r3 {
                    width: 3em;
                    top: -220px;
                    left: 285px;
                }

                .saeta-r4 {
                    width: 3em;
                    top: -15px;
                    left: 235px;
                }

                #S1startext {
                    top: -240px;
                    left: -35px;
                }
            }

        }
    }

}

@media (min-width: 1400px) {
    .content-animation {

        .content-planet1 {

            img {
                margin-left: 50em;
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
                margin-left: 65em;
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


        .content-c-satellite {

            .content-satellite {

                .satellite {
                    width: 25em;
                    margin-top: 45em;
                    margin-left: 37em;
                }
            }
        }

      
    }

}
</style>