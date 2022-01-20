<template>
    <nav>
      <ul class="category-list">
        <li class="category-block"
            v-for="category in allCategory"
            :key="category.title"
            :style="`background-image: url('${category.image.asset.url}')`"
        >
          <nuxt-link class="category-link" :to="`/shop/${category.slug.current}`">
            <h2>{{ category && category.title }}</h2>
          </nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script>
import MAIN_CATEGORIES from '../../queries/mainCategories';

export default {
  name: "ProductVariant",
  components: {
  },
  props: [''],
  data() {
    return {
      allCategory: []
    }
  },
  computed: {
  },
  apollo: {
    allCategory: MAIN_CATEGORIES
  }

}
</script>
<style lang="scss" scoped>
  .category-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style-type: none;

    .category-block {
      flex-basis: 50%;
      max-width: calc(50% - $spacingSm);
      background-color: $secondaryBgColor;
      height: 400px;
      margin-bottom: $spacingSm;
      background-size: cover;
      background-repeat: no-repeat;

      .category-link {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        cursor: pointer;
        backdrop-filter: grayscale(20%);

        &:hover {
          border: none;
          backdrop-filter: grayscale(0%);

          h2 {
            font-size: calc($fontSize2xl - 2px);
            top: 19.95%;
          }
        }

        h2 {
          color: $bgColor;
          font-size: $fontSize2xl;
          font-weight: 200;
          position: absolute;
          top: 20%;
          left: 10%;
          transition: 0.4s;
          text-shadow: 0px 0px 7px rgba(0,0,0,0.3);
        }
      }
    }

    .category-block:nth-child(2n + 1) {
      margin-right: $spacingSm;
    }
  }
</style>
