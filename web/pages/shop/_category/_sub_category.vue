<template>
  <div class="side-bar-layout">
    <side-bar></side-bar>
    <div class="main-content">
      <product-card-list :loading="loading">
        <product-card v-for="product in products" :key="product._key" v-bind="product" />
      </product-card-list>
    </div>
  </div>
</template>

<script>
import SideBar from '../../../components/SideBar/SideBar.vue';
import ProductCardList from '../../../components/ProductCard/ProductCardList.vue';
import ProductCard from '../../../components/ProductCard/ProductCard.vue';

import ALL_PRODUCTS from '../../../queries/allProducts';

export default {
  name: "shop-category-sub_category",
  components: {
    SideBar,
    ProductCardList,
    ProductCard
  },
  data() {
    return {
      allProduct: [],
      loading: true
    }
  },
  computed: {
    categorySlug: function() {
      return this.$route.params.category;
    },
    subCategorySlug: function() {
      return this.$route.params.sub_category;
    },
    products: function() {
      let products = [];

      for(let product of this.allProduct) {
        let isCategory = false;
        let isSubCategory = false;

        for(let category of product.categories){
          if(this.categorySlug === category?.slug?.current) isCategory = true;
          if(this.subCategorySlug === category?.slug?.current) isSubCategory = true;
        }

        if(isCategory && isSubCategory) products.push(product);
      }
      this.loading = false;
      return products;
    }
  },
  apollo: {
    allProduct: ALL_PRODUCTS
  }
}
</script>


<style lang="scss" scoped>

h1 {
  text-transform: capitalize;
}
</style>
