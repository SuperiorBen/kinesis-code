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
          they haven't laid the right foundation to enable change. We power your
          transformation by doing three things exceptionally well.
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
          We modernize infrastructure: We design and deploy workloads in public
          clouds, data centers, and edge locations based on the specific
          requirements of your digital business.
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
          We help technology organizations run smarter by integrating analytics,
          monitoring, and service management platforms to improve efficiency,
          user experience, and security.
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
  z-index: 1;
  position: relative;

  // Planet 1 ===================================================================================
  .content-planet1 {
    height: 100vh;
    width: 100%;
    margin-top: 0vh;
    img {
      width: 29em;
      margin-left: 43em;
      margin-top: 7em;
      transition: ease-in-out 1s;
    }
  }

  .content-planet1-part2 {
    img {
      margin-left: 44em;
      margin-top: 51em;
      transform: rotateZ(45deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet1-part3 {
    img {
      margin-left: 3em;
      margin-top: 82em;
      transform: rotateZ(80deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet1-part4 {
    img {
      margin-left: 44em;
      margin-top: 126em;
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
      margin-left: 53em;
      margin-top: 101em;
      transform: rotateZ(60deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet2-part4 {
    img {
      margin-left: -2em;
      margin-top: 135em;
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
      margin-top: 43em;
      transform: rotateZ(10deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet3-part3 {
    img {
      margin-left: 44em;
      margin-top: 72em;
      transform: rotateZ(60deg);
      transition: ease-in-out 1s;
    }
  }

  .content-planet3-part4 {
    img {
      margin-left: 14em;
      margin-top: 111em;
      transform: rotateZ(90deg);
      transition: ease-in-out 1s;
    }
  }

  // Stars background ===================================================================================
  #content-bgStars {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    margin-top: -100vh;

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

// Miscellaneous ===================================================================================
.content-animatetion-miscellaneous {
  height: auto;
  width: 100%;
  margin-top: -400vh;
  z-index: 2;
  position: relative;

  // Rocket ===================================================================================
  .content-c-rocket {
    height: 100vh;
    width: 100%;
    transition: ease-in-out 1s;
    .content-rocket {
      height: 100vh;
      width: 100%;
      overflow: hidden;
      transition: ease-in-out 1s;
      .rocket {
        width: 20em;
        transform: rotateZ(140deg);
        margin-left: 40em;
        margin-top: 5em;
        transition: ease-in-out 1s;
      }
    }
  }

  .content-rocket-part2 {
    margin-top: 30em !important;
    transition: ease-in-out 1s !important;
    .rocket {
      transform: rotateZ(220deg) !important;
      margin-left: 28em !important;
      margin-top: 11em !important;
      transition: ease-in-out 1s !important;
    }
  }

  .content-rocket-part3 {
    margin-top: 82em !important;
    transition: ease-in-out 1s !important;
    .rocket {
      transform: rotateZ(217deg) !important;
      margin-left: 19em !important;
      margin-top: 16em !important;
      transition: ease-in-out 1s !important;
    }
  }

  .content-rocket-part4 {
    margin-top: 102em !important;
    transition: ease-in-out 1s !important;
    .rocket {
      transform: rotateZ(244deg) !important;
      margin-left: 27em !important;
      margin-top: 12em !important;
      transition: ease-in-out 1s !important;
    }
  }

  // Satellite ===================================================================================
  .content-c-satellite {
    height: 100vh;
    width: 100%;
    margin-top: -100vh;
    transition: ease-in-out 1s;
    .content-satellite {
      height: 100vh;
      width: 100%;
      overflow: hidden;
      transition: ease-in-out 1s;
      .satellite {
        width: 20em;
        transform: rotateZ(0deg);
        margin-left: 17em;
        margin-top: 25em;
        transition: ease-in-out 1s;
      }
    }
  }

  .content-satellite-part2 {
    margin-top: 0em !important;
    transition: ease-in-out 1s !important;
    .satellite {
      transform: rotateZ(10deg) !important;
      margin-left: 0em !important;
      margin-top: 22em !important;
      transition: ease-in-out 1s !important;
    }
  }

  .content-satellite-part3 {
    margin-top: 0em !important;
    transition: ease-in-out 1s !important;
    .satellite {
      transform: rotateZ(10deg) !important;
      margin-left: 52em !important;
      margin-top: -2em !important;
      transition: ease-in-out 1s !important;
    }
  }

  .content-satellite-part4 {
    margin-top: 15em !important;
    transition: ease-in-out 1s !important;
    .satellite {
      transform: rotateZ(10deg) !important;
      margin-left: 13em !important;
      margin-top: 26em !important;
      transition: ease-in-out 1s !important;
    }
  }

  // paragraph 1 ===================================================================================
  .content-c-paragraph1 {
    height: 100vh;
    width: 100%;
    margin-top: -100vh;
    opacity: 1;
    transition: ease-in-out 0.5s;
    overflow: hidden;

    .content-paragraph1 {
      transition: ease-in-out 0.5s;
      color: white;
      width: 35em;
      height: 10em;
      margin-top: 16em;
      margin-left: 14em;
      border-radius: 8px;

      .title-paragpraph {
        transition: ease-in-out 0.5s;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: flex-start;
        img {
          transition: ease-in-out 0.5s;
          width: 7.5em;
          margin-top: 0.4em;
        }
        p {
          transition: ease-in-out 0.5s;
          font-size: 3em;
          font-weight: bold;
          margin: 0px;
          margin-left: -0.3em;
        }
      }

      p {
        transition: ease-in-out 0.5s;
        margin: 0px;
        width: 29em;
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
        left: 280px;
      }

      .saeta-r4 {
        width: 3em;
        transform: rotateZ(90deg);
        position: relative;
        top: 0px;
        left: 232px;
      }

      #startext1 {
        position: relative;
        top: -245px;
        left: -60px;
      }
    }
  }

  .content-paragraph1-off {
    // visibility: hidden;
    opacity: 0;
    transition: ease-in-out 0.5s;
  }

  // paragraph 2 ===================================================================================
  .content-c-paragraph2 {
    height: 100vh;
    width: 100%;
    margin-top: -75vh;
    transition: ease-in-out 0.5s;
    overflow: hidden;
    z-index: 2 !important;

    .content-paragraph2 {
      opacity: 0;
      transition: ease-in-out 0.5s;
      color: white;
      width: 35em;
      height: 10em;
      margin-top: 22em;
      margin-left: 22em;
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
        width: 22em;
        position: relative;
        top: -22em;
        left: 25.5em;
      }

      #startext2 {
        position: relative;
        top: -38em;
        left: -8em;
      }
    }
  }

  .content-paragraph2-on {
    // visibility: hidden;
    opacity: 1 !important;
    transition: ease-in-out 0.5s;
  }

  .content-c-paragraph2-off {
    margin-top: -100vh;

    .content-paragraph2 {
      opacity: 0 !important;
      transition: ease-in-out 0.5s;
    }
  }

  // paragraph 3 ===================================================================================
  .content-c-paragraph3 {
    height: 100vh;
    width: 100%;
    margin-top: -100vh;
    transition: ease-in-out 0.5s;
    overflow: hidden;
    z-index: 2 !important;

    .content-paragraph3 {
      opacity: 0;
      transition: ease-in-out 0.5s;
      color: white;
      width: 35em;
      height: 10em;
      margin-top: 6em;
      margin-left: 35em;
      border-radius: 8px;

      .title-content {
        transition: ease-in-out 0.5s;
        font-size: 2em;
        font-weight: bold;
        margin: 0px;
        margin-left: -0.3em;
        width: 9em;

        p {
          margin: 0px;
          width: 9em;
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
        width: 17em;
        position: relative;
        top: -17.5em;
        left: -26.5em;
      }

      #startext3 {
        position: relative;
        top: -38em;
        left: -8em;
      }
    }
  }

  .content-paragraph3-on {
    // visibility: hidden;
    opacity: 1 !important;
    transition: ease-in-out 0.5s;
  }

  .content-paragraph3-off {
    // visibility: hidden;
    opacity: 0 !important;
    transition: ease-in-out 0.5s;
  }

  // paragraph 4 ===================================================================================
  .content-c-paragraph4 {
    height: 100vh;
    width: 100%;
    margin-top: -100vh;
    transition: ease-in-out 0.5s;
    overflow: hidden;
    z-index: 2 !important;

    .content-paragraph4 {
      opacity: 0;
      transition: ease-in-out 0.5s;
      color: white;
      width: 35em;
      height: 10em;
      margin-top: 15em;
      margin-left: 22em;
      border-radius: 8px;

      .title-content {
        transition: ease-in-out 0.5s;
        font-size: 2em;
        font-weight: bold;
        margin: 0px;
        margin-left: -0.3em;
        width: 9em;

        p {
          margin: 0px;
          width: 9em;
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
        width: 24em;
        position: relative;
        top: -13.5em;
        left: 24.5em;
      }

      #startext4 {
        position: relative;
        top: -32em;
        left: -8em;
      }
    }
  }

  .content-paragraph4-on {
    // visibility: hidden;
    opacity: 1 !important;
    transition: ease-in-out 0.5s;
  }

}
</style>