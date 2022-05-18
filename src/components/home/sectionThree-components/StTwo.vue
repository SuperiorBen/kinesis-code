<template>
    <div id="beginSection2"></div>
    <div class="content-animation">
        <!--Planets -->
        <div id="S2planet1" class="content-planet1 animate__animated ">
            <img src="../../../assets/images-home/section3/moon.svg" alt="moon" />
        </div>
        <div id="S2planet2" class="content-planet2 animate__animated ">
            <img src="../../../assets/images-home/section3/planet1.svg" alt="planet1" />
        </div>
        <div id="S2planet3" class="content-planet3 animate__animated ">
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

        <div id="S2satelliteC" class="content-c-satellite animate__animated ">
            <div id="S2c-satellite" class="content-satellite">
                <div id="S2satellite" class="satellite"></div>
            </div>
        </div>

        <div id="S2content-c-paragraph" class="content-c-paragraph animate__animated">
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
import scrolls from "../../../helpers/section3/scrollsanimations";
import miscellaneous from "../../../helpers/section3/miscellaneous";
export default {
    mounted() {
        AOS.init();
        //   Lottie
        miscellaneous(2);
        backgroundStars(2);
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
            margin-top: -20em;
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
                width: 18em;
                position: relative;
                top: 5em;
                left: 0em;
            }

            #S2startext {
                position: relative;
                top: -48em;
                left: -8em;
            }
        }

    }
}
</style>