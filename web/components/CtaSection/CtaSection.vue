<template>
  <section class="cta-section">
    <img :src="displayImage && displayImage.image.asset.url" />
    <div class="content">
      <h1>{{displayImage && displayImage.text}}</h1>
      <nuxt-link to="/shop" class="button">Shop now</nuxt-link>
    </div>
  </section>
</template>

<script>
import ALL_DISPLAY_IMAGES from '../../queries/allDisplayImages';

export default {
  name: "CtaSection",
  components: {
  },
  props: [],
  data() {
    return {
      allDisplayImage: []
    }
  },
  computed: {
    displayImage: function() {
      return this.allDisplayImage[0];
    }
  },
  apollo: {
    allDisplayImage: ALL_DISPLAY_IMAGES
  }
}
</script>

<style lang="scss" scoped>
  .cta-section {
    width: 100%;
    margin-bottom: $spacingXl;
    position: relative;
    width: 100%;
    height: 700px;
    overflow: hidden;
    background-color: $secondaryBgColor;

    img {
      width: 100%;
      height: inherit;
      position: absolute;
      top: 0;
      left: 0;
      filter: grayscale(100%);
      object-fit: cover;
      object-position: 50% 50%;
    }

    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      h1 {
        color: $bgColor;
        font-size: $fontSize2xl;
        font-weight: 100;
        text-shadow: 0px 0px 7px rgba(0,0,0,0.3);
      }

      .button {
        font-weight: 300;
      }
    }
  }
</style>
