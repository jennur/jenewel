<template>
  <nuxt-link :to="{
      name: 'shop-product',
      params: {
        product: slug.current
      }
    }"
    class="product"
  >
    <div class="bg-image" :style="`background-image: url(${image.url})`"></div>
    <div class="content-container">
      <div class="content">
        <h2 class="title">{{ title }}</h2>
        <span class="price">{{ price }}€</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import BlockContent from '../Serializers/BlockContent/BlockContent.vue';
import ProductVariant from '../Serializers/ProductVariant/ProductVariant.vue';

export default {
  name: "Product",
  components: {
    BlockContent,
    ProductVariant
  },
  props: ['title', 'slug', 'defaultProductVariant','body', 'tags'],
  computed: {
    image: function() {
      let images = this.defaultProductVariant.images;
      return {
        url: images[0]?.asset?.url
      }
    },
    price: function() {
      return this.defaultProductVariant?.price;
    }
  }

}
</script>
<style lang="scss" scoped>
  .product:nth-child(2n + 1) {
    margin-right: $spacingMd;
  }

  .product {
    display: block;
    margin-bottom: $spacingSm;
    flex-basis: 100%;
    width: 100%;
    height: 350px;
    max-width: 100%;
    transition: 0.4s;
    color: $bgColor;
    position: relative;
    cursor: pointer;

    @media screen and (min-width: $mobileWidth) {
      flex-basis: 50%;
      max-width: calc(50% - $spacingSm/2);
    }

    &:nth-child(2n + 1) {
      margin-right: $spacingSm;
    }

    &:hover {
      border-bottom: none;

      .bg-image {
        filter: grayscale(0%);
      }

      .content-container {
        opacity: 0;
      }
    }

    .bg-image {
      display: block;
      width: 100%;
      min-height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      transition: 0.3s;
      background-size: cover;
      background-position: 50%;
      filter: grayscale(20%);
    }

    .image {
      width: 100%;
    }

    .content-container {
      display: block;
      z-index: 1;
      position: absolute;
      bottom: 0;
      left: 0;
      box-sizing: border-box;
      padding: $spacingMd;
      transition: 0.3s;


      .content {
        box-sizing: border-box;
        color: $textColor;

        .title {
          font-size: $fontSizeMd;
          font-weight: 200;
          // text-shadow: 0px 0px 5px rgba(0,0,0,0.2);
          background-color: rgba($bgColor,0.7);
          padding: $spacingXs;
        }

        .price {
          // text-shadow: 0px 0px 5px rgba(0,0,0,0.2);
          font-weight: 200;
          background-color: rgba($bgColor,0.7);
          padding: $spacingXs;
        }
      }
    }
  }
</style>
