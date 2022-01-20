<template>
  <div class="side-bar-layout">
    <side-bar></side-bar>
    <div class="main-content">
      <!-- <h1>{{ this.$route.params.category }}</h1> -->
      <product-card-list :loading="loading">
        <product-card v-for="product in products" :key="product._key" v-bind="product" />
      </product-card-list>
    </div>
  </div>
</template>

<script>
import ProductCardList from '../../../components/ProductCard/ProductCardList.vue';
import ProductCard from '../../../components/ProductCard/ProductCard.vue';
import ALL_PRODUCTS from '../../../queries/allProducts';
import gql from 'graphql-tag'
import SideBar from '../../../components/SideBar/SideBar.vue';

export default {
  name: "shop-category",
  components: {
    ProductCardList,
    ProductCard,
    SideBar
  },
  data() {
    return {
      allCategory: [],
      allProduct: [],
      loading: true
    }
  },
  computed: {
    path: function() {
      return this.$route.fullPath;
    },
    category: function() {
      return this.allCategory[0];
    },
    categoryTitle: function() {
      return this.allCategory[0]?.title;
    },
    subCategories: function() {
      console.log("Path:", this.$route);
      return this.allCategory[0]?.children;
    },
    products: function() {
      return this.allProduct.filter(product => {
        for(let category of product.categories){
           if(category.title === this.categoryTitle) {
            this.loading = false;
            return true;
          }
        }
        return false;
      })
    }
  },
  apollo: {
    allCategory: {
      prefetch: false,
      variables() {
        let categorySlug = this.$route.params.category;
        // console.log("CategorySlug:", categorySlug);
        return { categorySlug }
      },
      query: gql`
        query allCategory($categorySlug: String){
          allCategory (where:{ slug:{current:{eq: $categorySlug}}}){
            title
            children {
              title
              slug {
                current
              }
            }
          }
        }`
    },
    allProduct: {
      query: ALL_PRODUCTS
    }
  }
}
</script>


<style lang="scss" scoped>

h1 {
  text-transform: capitalize;
}
</style>
