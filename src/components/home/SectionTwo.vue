<template>
  <div class="main">
    <div class="header" id="cardsanimate">
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
          <div id="line-back" class="yellow-line"></div>
          <div id="line" class="cards-row-begin">
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

            <div class="card">
              <div class="images">
                <img
                  class="img1"
                  src="../../assets/images-home/section2/arrow.png"
                  alt="arrow-logo"
                />
                <img
                  class="img2"
                  src="../../assets/images-home/section2/internet-things.png"
                  alt=""
                />
              </div>
              <p>Internet of Things</p>
            </div>

            <div class="card">
              <div class="images">
                <img
                  class="img1"
                  src="../../assets/images-home/section2/arrow.png"
                  alt="arrow-logo"
                />
                <img
                  class="img2"
                  src="../../assets/images-home/section2/customers.png"
                  alt=""
                />
              </div>
              <p>Customer Experience</p>
            </div>

            <div class="card">
              <div class="images">
                <img
                  class="img1"
                  src="../../assets/images-home/section2/arrow.png"
                  alt="arrow-logo"
                />
                <img
                  class="img2"
                  src="../../assets/images-home/section2/ai.png"
                  alt=""
                />
              </div>
              <p>AI &#38; Machine Learning</p>
            </div>

            <div class="card">
              <div class="images">
                <img
                  class="img1"
                  src="../../assets/images-home/section2/arrow.png"
                  alt="arrow-logo"
                />
                <img
                  class="img2"
                  src="../../assets/images-home/section2/analitics-predictive.png"
                  alt=""
                />
              </div>
              <p>Predictive Analytics</p>
            </div>

            <div class="card">
              <div class="images">
                <img
                  class="img1"
                  src="../../assets/images-home/section2/arrow.png"
                  alt="arrow-logo"
                />
                <img
                  class="img2"
                  src="../../assets/images-home/section2/app-movil.png"
                  alt=""
                />
              </div>
              <p>Mobile Applications</p>
            </div>
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
  mounted() {
    let controller = new ScrollMagic.Controller();
    let scene1 = new ScrollMagic.Scene({ triggerElement: "#cardsanimate" })
      .setClassToggle("#line", "cards-row-end")
      .addTo(controller);

    let scene2 = new ScrollMagic.Scene({ triggerElement: "#cardsanimate" })
      .setClassToggle("#line-back", "long-complete")
      .addTo(controller);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/home/section2/home-section2-fullhd.scss";
@import "../../assets/scss/home/section2/home-section2.scss";
@import "../../assets/scss/home/section2/home-section2-mobile.scss";
</style>