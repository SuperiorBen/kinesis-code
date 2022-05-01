<template>
  <div class="main">
    <div class="header">
      <img src="../../assets/images-home/section2/transform.png" alt="" />
      <p class="title-head">Take control of your <span>Transformation</span></p>
    </div>

    <div class="cards">
      <div>
        <p class="title-card"><span>Platforms for</span> Digital Business</p>
      </div>

      <p class="paragraph">
        Digital transformation requires much more than new technologies. It
        requires fundamental changes in culture, communications, and the way
        work gets done. Without the proper foundation to enable change, your
        digital efforts will stall. There are three "must haves" that make up
        that base.
      </p>

      <div class="buttons">
        <button id="btn1" class="btn btn1">MODERN APPLICATION</button>
        <button id="btn2" class="btn btn2">INTELLIGENT OPERATIONS</button>
        <button id="btn3" class="btn btn3">
          ENTERPRISE CLOUD INFRASTRUCTURE
        </button>
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
</style>