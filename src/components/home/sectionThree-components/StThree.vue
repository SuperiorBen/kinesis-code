<template>
    <div class="content-animation">
        <!--Planets -->
        <div id="planet1" class="content-planet1">
            <img src="../../assets/images-home/section3/moon.svg" alt="moon" />
        </div>
        <div id="planet2" class="content-planet2">
            <img src="../../assets/images-home/section3/planet1.svg" alt="planet1" />
        </div>
        <div id="planet3" class="content-planet3">
            <img src="../../assets/images-home/section3/planet2.svg" alt="planet2" />
        </div>

        <!-- Backgrounds & stars -->
        <div id="content-bgStars" class="content-bgStars">
            <div id="bgStars"></div>
            <div id="bgStars2"></div>
        </div>
    </div>

    <div class="content-animation2">
        <div class="content-c-rocket">
            <div id="c-rocket" class="content-rocket">
                <div id="rocket" class="rocket"></div>
            </div>
        </div>

        <div class="content-c-satellite">
            <div id="c-satellite" class="content-satellite">
                <div id="satellite" class="satellite"></div>
            </div>
        </div>

       <div id="content-c-paragraph" class="content-c-paragraph">
        <div id="c-paragraph" class="content-paragraph">
          <div class="title-content">
            <p>We offer modern applications and analysis</p>
            <button>Learn more</button>
          </div>
          <p class="info-paragraph">
            We build cloud-native applications and provide modern data-driven
            solutions, delivering better software faster while reducing the
            complexity of your development process.
          </p>
          <img
            class="img-moon"
            src="../../assets/images-home/section3/modern.png"
            alt="image-modern"
          />
          <div id="startext"></div>
        </div>
      </div>
    </div>
</template>

<script>
import backgroundStars from "../../helpers/section3/starsbackground";
import scrolls from "../../helpers/section3/scrollsanimations";
import miscellaneous from "../../helpers/section3/miscellaneous";
export default {
    mounted() {
        //   Lottie
        miscellaneous();
        backgroundStars();
        // Scroll magic
        scrolls();
        // Background star animation ===========================================================================
    },
};
</script>

<style lang="scss" scoped>
</style>