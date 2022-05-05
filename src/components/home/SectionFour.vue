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

    <div class="section2">
      <div class="content-form">
        <img
          src="../../assets/images-home/section3/final-part/arrow-gray.svg"
          alt="arrow-gray"
        />

        <div class="content-info">
          <p class="title">Contact <span>Us</span></p>

          <form class="form">
            <div id="i-i1" class="form-group">
              <input name="completename" type="text" placeholder=" " />
              <label class="labelform" for="completename">Complete Name</label>
            </div>

            <div id="i-i2" class="form-group">
              <input name="email" type="text" placeholder=" " />
              <label class="labelform" for="email">Email</label>
            </div>

            <div id="i-i3" class="form-group i3">
              <input name="company" type="text" placeholder=" " />
              <label class="labelform" for="company">Company</label>
            </div>

            <div id="i-i4" class="form-group i4">
              <textarea name="comment" placeholder=" "></textarea>
              <label class="labelform" for="comment">Comment</label>
            </div>

            <input
              class="sent"
              name="submit"
              type="submit"
              value="Send question!"
            />
          </form>
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
        top: -23.5em;
        left: 5.2em;
        margin: 0px;
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

  .section2 {
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;

    .content-form {
      height: 50vh;
      width: 22em;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 10em;
        height: 50vh;
      }

      .content-info {
        height: 50vh;
        width: 22em;
        margin-top: -50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
          margin: 0px;
          font-size: 2em;
          color: #fe9900;
          font-weight: bold;
          margin-top: 0.6em;

          span {
            color: #162b3e;
          }
        }
        .form {
          width: 20em;
          height: 16em;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding-top: 0.4em;

          .form-group {
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: start;
            width: 85%;
            margin-bottom: 0.2em;
            transition: ease-in-out 0.2s;

            label {
              height: 1.5em;
              font-size: 1em;
              font-weight: bold;
              position: relative;
              bottom: 0em;
              z-index: 1;
              transition: ease-in-out 0.2s;
              color: #162b3e8a;
            }
            input,
            textarea {
              outline: none;
              width: 100%;
              height: 1.5em;
              border: none;
              border-bottom: 1px solid #162b3e;
              position: relative;
              bottom: -1.5em;
              resize: none;
              background: none;
              z-index: 2;
              transition: ease-in-out 0.2s;
            }
            textarea {
              bottom: -1.5em;
              height: 2.5em;
            }

            input:focus + .labelform,
            input:not(:placeholder-shown) + .labelform {
              font-size: 0.5em !important;
              color: #fe9900 !important;
              bottom: 3em !important;
              transition: ease-in-out 0.2s;
            }

            input:focus,
            input:not(:placeholder-shown) {
              border-bottom: 1px solid #fe9900;
              transition: ease-in-out 0.2s;
              bottom: -0.5em;
            }

            textarea:focus + .labelform,
            textarea:not(:placeholder-shown) + .labelform {
              font-size: 0.5em !important;
              color: #fe9900 !important;
              bottom: 3.5em !important;
              transition: ease-in-out 0.2s;
            }

            textarea:focus,
            textarea:not(:placeholder-shown) {
              border-bottom: 1px solid #fe9900;
              transition: ease-in-out 0.2s;
              bottom: -0.8em;
            }
          }

          #i-i1,
          #i-i2,
          #i-i3 {
            height: 1.5em;
          }
          #i-i4 {
            height: 2.5em;
          }

          .sent {
            width: 90%;
            height: 2em;
            color: white;
            background-color: #fe9900;
            border: none;
            font-weight: bold;
            border-radius: 8px;
          }
        }
      }
    }
  }
}
</style>