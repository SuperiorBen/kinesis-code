<template>
  <div class="main">
    <div class="header">
      <img src="../../assets/images-home/section2/transform.png" alt="" />
      <p class="title-head">Take control of your <span>Transformation</span></p>
    </div>

    <div class="cards">
      <div class="texts">
        <p class="title-card">
          <span>Platforms for <br /></span> Digital Business
        </p>
        <p class="paragraph">
          Digital transformation requires much more than new technologies. It
          requires fundamental changes in culture, communications, and the way
          work gets done. Without the proper foundation to enable change, your
          digital efforts will stall.
          <br />
          <br />
          There are three "must haves" that make up that base.
        </p>
      </div>

      <div class="content-animate">
        <div class="animate-cards">
          <div class="card">
            <div class="images">
              <img
                class="img1"
                src="../../assets/images-home/section2/arrow.png"
                alt="arrow-logo"
              />
              <img
                class="img2"
                src="../../assets/images-home/section2/product.png"
                alt=""
              />
            </div>
            <p>Digital Products</p>
          </div>
        </div>

        <div class="buttons">
          <button id="btn1" class="btn btn1">MODERN APPLICATION</button>
          <button id="btn2" class="btn btn2">INTELLIGENT OPERATIONS</button>
          <button id="btn3" class="btn btn3">
            ENTERPRISE CLOUD INFRASTRUCTURE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100%;

  .header {
    width: 100%;
    height: 22vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      width: 10em;
      margin-right: 1em;
    }
    .title-head {
      font-weight: bold;
      font-size: 2.5em;
      width: 11em;
      color: #162b3e;
      span {
        color: #fe9900;
      }
    }
  }

  .cards {
    background: #162b3e;
    color: white;
    padding-top: 3em;
    height: calc(78vh - 3em);

    .texts {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      .title-card {
        font-weight: bold;
        font-size: 3em;
        width: 11em;
        color: white;
        line-height: 0.7em;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin-top: 0px;
        span {
          color: #fe9900;
          font-size: 0.4em;
          width: 11em;
        }
      }

      .paragraph {
        color: white;
        width: 36em;
        text-align: end;
      }
    }

    .content-animate {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 100%;

      .animate-cards {
        width: calc(90vw - 25em);

        .card {
          width: 13em;
          transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
          .images {
            padding: 3em 0.5em;
            border: solid rgba(255, 255, 255, 0.411) 0.3em;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .img1,
            .img2 {
              width: 10em;
              height: 10em;
            }

            .img2 {
              margin-top: -10em;
            }
          }
          p {
            font-weight: bold;
            width: 5em;
            margin: 0px;
            margin-top: 3px;
          }
        }
      }

      .buttons {
        width: 25em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .btn {
          width: 25em;
          border: 2px solid white;
          border-radius: 50px;
          background: none;
          padding: 10px 20px;
          font-size: 0.8em;
          font-weight: bold;
          font-family: "Ubuntu", sans-serif;
          cursor: pointer;
          margin: 10px;
          transition: 0.8s;
          position: relative;
          overflow: hidden;
          color: white;
        }
        .btn1::before {
          content: "INNOVATE";
        }

        .btn2::before {
          content: "RUN";
        }

        .btn3::before {
          content: "BUILD";
        }
        .btn::before {
          top: -10px;
          border-radius: 0 0 50% 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 0;
          width: 100%;
          height: 0%;
          background: #fe9900;
          z-index: 1;
          transition: 0.5s;
        }

        .btn:hover::before {
          height: 150%;
          transition: 0.5s;
          border-radius: 0 0 25% 25%;
        }
      }
    }
  }
}
</style>