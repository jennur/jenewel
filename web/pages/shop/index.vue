<template>
  <div>
    <div class="side-bar-layout">
      <side-bar></side-bar>
    <div class="main-content">
      <product-card-list :loading="$apollo.queries.allProduct.loading">
        <product-card v-for="product in allProduct" :key="product._key" v-bind="product" />
      </product-card-list>
    </div>
  </div>

  </div>
</template>

<script>
import ProductCard from '../../components/ProductCard/ProductCard.vue';
import ProductCardList from '../../components/ProductCard/ProductCardList.vue';
import SideBar from '../../components/SideBar/SideBar.vue';

import MAIN_CATEGORIES from '../../queries/mainCategories';
import SUB_CATEGORIES from '../../queries/subCategories';
import ALL_CATEGORIES from '../../queries/allCategories';
import ALL_PRODUCT from '../../queries/allProducts';


export default {
  name: "shop",
  components: {
    ProductCardList,
    ProductCard,
    SideBar
  },
  data() {
    return {
      allCategory: [],
      allProduct: []
    }
  },
  apollo: {
    allCategory: ALL_CATEGORIES,
    allProduct: ALL_PRODUCT
  }
}
</script>

<style lang="scss" scoped>


</style>
