<template>
  <div class="content-space-animation">
    <div class="content-animation">
      <!--Planets -->
      <div id="planet1" class="content-planet1">
        <img src="../../assets/images-home/section3/moon.svg" alt="moon" />
      </div>
      <div id="planet2" class="content-planet2">
        <img
          src="../../assets/images-home/section3/planet1.svg"
          alt="planet1"
        />
      </div>
      <div id="planet3" class="content-planet3">
        <img
          src="../../assets/images-home/section3/planet2.svg"
          alt="planet2"
        />
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

    <div class="content-animatetion-miscellaneous">
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

      <div class="content-c-paragraph1">
        <div id="c-paragraph1" class="content-paragraph1">
          <div class="title-paragpraph">
            <img src="../../assets/images-home/section3/logoWhite.svg" alt="" />
            <p>What we do?</p>
          </div>
          <p class="paragraph-text">
            Many organizations are stuck when it comes to transformation because
            they haven't laid the right foundation to enable change. We power
            your transformation by doing three things exceptionally well.
          </p>

          <img
            class="saeta-r1"
            src="../../assets/images-home/section3/saeta.svg"
            alt=""
          />
          <img
            class="saeta-r2"
            src="../../assets/images-home/section3/saeta.svg"
            alt=""
          />

          <img
            class="saeta-r3"
            src="../../assets/images-home/section3/saeta.svg"
            alt=""
          />

          <img
            class="saeta-r4"
            src="../../assets/images-home/section3/saeta.svg"
            alt=""
          />

          <div id="startext1"></div>
        </div>
      </div>

      <div id="content-c-paragraph2" class="content-c-paragraph2">
        <div id="c-paragraph2" class="content-paragraph2">
          <div class="title-content">
            <p>We design business cloud infrastructure</p>
            <button>Learn more</button>
          </div>
          <p class="info-paragraph">
            We modernize infrastructure: We design and deploy workloads in
            public clouds, data centers, and edge locations based on the
            specific requirements of your digital business.
          </p>
          <img
            class="img-moon"
            src="../../assets/images-home/section3/cloud-infrastructure.png"
            alt="image-cloud-infrastructure"
          />
          <div id="startext2"></div>
        </div>
      </div>

      <div id="content-c-paragraph3" class="content-c-paragraph3">
        <div id="c-paragraph3" class="content-paragraph3">
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
          <div id="startext3"></div>
        </div>
      </div>

      <div id="content-c-paragraph4" class="content-c-paragraph4">
        <div id="c-paragraph4" class="content-paragraph4">
          <div class="title-content">
            <p>We create Smart Operations</p>
            <button>Learn more</button>
          </div>
          <p class="info-paragraph">
            We help technology organizations run smarter by integrating
            analytics, monitoring, and service management platforms to improve
            efficiency, user experience, and security.
          </p>
          <img
            class="img-moon"
            src="../../assets/images-home/section3/smart-operation.png"
            alt="image-smart-operation"
          />
          <div id="startext4"></div>
        </div>
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
@import "../../assets/scss/home/section3/home-section3.scss";
</style>