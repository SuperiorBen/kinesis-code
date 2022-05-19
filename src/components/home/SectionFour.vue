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
        <p class="paragraph">
          Informacion de ejemplo Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived
          <br /><br />
          not only five centuries, but also the leap into electronic
          typesetting.
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

      <div class="content-info">
        <div class="animation">
          <div class="orange"></div>
          <div class="content-side">
            <div class="info">
              <p class="title">Central office</p>
              <div class="icon-location">
                <img
                  src="../../assets/images-home/section3/final-part/globo-location-icon.svg"
                  alt=""
                />
                <p>
                  <span>San Salvador, El Salvador</span><br />
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been
                </p>
              </div>

              <div class="icon-mail">
                <img
                  src="../../assets/images-home/section3/final-part/mail-icon.svg"
                  alt=""
                />
                <p>bussines.info@kinesis.com</p>
              </div>
            </div>

            <div class="content-animation">
              <div id="phone"></div>
              <img
                class="planet"
                src="../../assets/images-home/section3/final-part/bg-phone.svg"
                alt="bg-phone"
              />

              <div class="button-what">
                <img
                  class="icon-wha"
                  src="../../assets/images-home/section3/final-part/whatsapp-icon.svg"
                  alt="whatsapp"
                />
                <p>Contact us</p>
              </div>
            </div>
          </div>
          <div class="content-drawing">
            <img
              class="world"
              src="../../assets/images-home/section3/final-part/world.svg"
              alt="world"
            />
            <img
              class="elipse"
              src="../../assets/images-home/section3/final-part/elipsegray.svg"
              alt="elipsegray"
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
@import "../../assets/scss/home/section4/home-section4-fullhd.scss";
@import "../../assets/scss/home/section4/home-section4.scss";
@import "../../assets/scss/home/section4/home-section4-mobile.scss";
</style>