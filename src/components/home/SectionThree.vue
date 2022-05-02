<template>
  <div class="content-animation">
    <div class="content-rocket">
      <div id="rocket" class="rocket"></div>
    </div>
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

    <div id="part2-animation">
      <div id="bgStars-part2" class="bgStars"></div>
      <div id="bgStars2-part2" class="bgStars2"></div>
    </div>
    <div id="part3-animation">
      <div id="bgStars-part3" class="bgStars"></div>
      <div id="bgStars2-part3" class="bgStars2"></div>
    </div>
    <div id="part4-animation">
      <div id="bgStars-part4" class="bgStars"></div>
      <div id="bgStars2-part4" class="bgStars2"></div>
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
.content-animation {
  height: 400vh;
  width: 100%;
  background: #162b3e;
  overflow: hidden;

  // Planet 1 ===================================================================================
  .content-planet1 {
    height: 100vh;
    width: 100%;
    margin-top: -100vh;
    img {
      width: 29em;
      margin-left: 40em;
      margin-top: 5em;
      transition: ease-in-out 1s;
    }
  }

  .content-planet1-part2 {
    img {
      margin-left: 39em;
      margin-top: 45em;
      transform: rotateZ(45deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet1-part3 {
    img {
      margin-left: 5em;
      margin-top: 85em;
      transform: rotateZ(80deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet1-part4 {
    img {
      margin-left: 39em;
      margin-top: 123em;
      transform: rotateZ(0deg);
      transition: ease-in-out 1s;
    }
  }

  // Planet 2 ===================================================================================

  .content-planet2 {
    height: 100vh;
    width: 100%;
    margin-top: -100vh;
    img {
      width: 22em;
      margin-left: -5em;
      margin-top: 20em;
      transition: ease-in-out 1s;
    }
  }

  .content-planet2-part2 {
    img {
      margin-left: -4em;
      margin-top: 60em;
      transform: rotateZ(30deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet2-part3 {
    img {
      margin-left: 60em;
      margin-top: 100em;
      transform: rotateZ(60deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet2-part4 {
    img {
      margin-left: -4em;
      margin-top: 140em;
      transform: rotateZ(90deg);
      transition: ease-in-out 1s;
    }
  }

  // Planet 2 ===================================================================================

  .content-planet3 {
    height: 100vh;
    width: 100%;
    margin-top: -100vh;
    img {
      width: 13em;
      margin-left: 17em;
      margin-top: 1em;
      transition: ease-in-out 1s;
    }
  }

  .content-planet3-part2 {
    img {
      margin-left: 18em;
      margin-top: 40em;
      transform: rotateZ(10deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet3-part3 {
    img {
      margin-left: 50em;
      margin-top: 80em;
      transform: rotateZ(60deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet3-part4 {
    img {
      margin-left: 10em;
      margin-top: 120em;
      transform: rotateZ(90deg);
      transition: ease-in-out 1s;
    }
  }

  // Stars background ===================================================================================
  #content-bgStars {
    height: 100vh;
    width: 100%;
    margin-top: -100vh;
    overflow: hidden;

    #bgStars {
      height: 100vh;
      width: 100%;
    }
    #bgStars2 {
      max-height: 60vh;
      width: 100%;
      margin-top: -60vh;
      overflow: hidden;
    }
  }

  // Rocket ===================================================================================
  .content-rocket {
    height: 100vh;
    width: 100%;
    .rocket {
      width: 25em;
      transform: rotateZ(130deg);
      margin-left: 20em;
      margin-top: 5em;
    }
  }

  //   Background font

  #part2-animation,
  #part3-animation,
  #part4-animation {
    height: 100vh;
    width: 100%;

    .bgStars {
      height: 100vh;
      width: 100%;
    }
    .bgStars2 {
      max-height: 60vh;
      width: 100%;
      margin-top: -60vh;
      overflow: hidden;
    }
  }
}
</style>