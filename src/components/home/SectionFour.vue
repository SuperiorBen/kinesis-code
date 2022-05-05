<template>
  <div class="content-about">
    <div class="section1">
      <div class="animation-laptop">
        <img
          class="elipse"
          src="../../assets/images-home/section3/final-part/elipsegray.svg"
          alt=""
        />
        <img
          class="about"
          src="../../assets/images-home/section3/final-part/about.svg"
          alt="image-about"
        />
        <div id="kinesis-animated"></div>
        <p>About <span>Us</span></p>
      </div>

      <div class="content-paragraph">
        <p>
          Informacion de ejemplo Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived
          <br /><br />
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div class="img-text">
          <img
            src="../../assets/images-home/section3/final-part/2560px-Amazon_Web_Services_Logo.svg.png"
            alt="amazon"
          />
          <p>
            AWS Storage, DevOps, and EUC Competencies 70+ AWS Specialists and
            AWS Certifications
          </p>
        </div>
      </div>

      <div class="content-logo">
        <div class="animation">
          <div id="code"></div>
          <p>Custom development with specialists in different technologies</p>
        </div>

        <div class="logos">
          <div class="orange"></div>
          <div class="column1">
            <img
              class="img1"
              src="../../assets/images-home/section3/final-part/laravel.png"
              alt=""
            />
            <img
              class="img2"
              src="../../assets/images-home/section3/final-part/lumen.png"
              alt=""
            />
            <img
              class="img3"
              src="../../assets/images-home/section3/final-part/node.png"
              alt=""
            />
            <img
              class="img4"
              src="../../assets/images-home/section3/final-part/python.png"
              alt=""
            />
          </div>
          <div class="column2">
            <img
              class="img1"
              src="../../assets/images-home/section3/final-part/vue.png"
              alt=""
            />
            <img
              class="img2"
              src="../../assets/images-home/section3/final-part/react.png"
              alt=""
            />
            <img
              class="img3"
              src="../../assets/images-home/section3/final-part/kotlin.png"
              alt=""
            />
            <img
              class="img4"
              src="../../assets/images-home/section3/final-part/Swift.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import miscellaneous2 from "../../helpers/section3/miscellaneous2";
export default {
  mounted() {
    //   Lottie
    miscellaneous2();
  },
};
</script>

<style lang="scss" scoped>
.content-about {
  height: 100vh;
  width: 100%;

  .section1 {
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .animation-laptop {
      width: 22em;
      height: 50vh;
      margin-top: 1em;
      overflow: hidden;

      .elipse {
        width: 30em;
        position: relative;
        top: 1em;
        left: -8em;
      }

      #kinesis-animated {
        width: 10em;
        position: relative;
        top: -36em;
        left: 10em;
      }

      .about {
        width: 22em;
        height: 17em;
        position: relative;
        top: -28em;
        left: 2em;
      }
      p {
        position: relative;
        margin: 0px;
        top: -23.5em;
        left: 5.2em;
        font-size: 2em;
        color: #fe9900;
        font-weight: bold;

        span {
          color: #162b3e;
        }
      }
    }

    .content-paragraph {
      width: 30em;
      height: 50vh;
      p {
        font-size: 0.9em;
        color: #162b3e;
        line-height: 1.4em;
        margin: 0px;
        margin-top: 1.5em;
      }
      .img-text {
        width: 25em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        img {
          width: 4em;
        }
        p {
          font-weight: bold;
          color: black;
          width: 22em;
        }
      }
    }

    .content-logo {
      .animation {
        width: 22em;
        height: 8em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        #code {
          width: 8em;
        }
        p {
          width: 12em;
          font-size: 1em;
          font-weight: bold;
          color: #162b3e;
        }
      }

      .logos {
        width: 22em;
        height: calc(50vh - 8em);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .orange {
          height: 100%;
          width: 1em;
          background-color: #fe9900;
        }
        .column1 {
          width: 10em;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .img1 {
            width: 6em;
          }
          .img2 {
            width: 6em;
          }
          .img3 {
            width: 5em;
          }
          .img4 {
            width: 6em;
          }
        }

        .column2 {
          width: 10em;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .img1 {
            width: 6em;
          }
          .img2 {
            width: 6em;
          }
          .img3 {
            width: 6em;
          }
          .img4 {
            width: 6em;
          }
        }
      }
    }
  }
}
</style>