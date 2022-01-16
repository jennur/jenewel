<template>
  <section>
    <product-card-list>
      <div v-if="$apollo.loading">Loading...</div>
      <product-card v-for="product in allProduct" :key="product._key" v-bind="product" />
    </product-card-list>
  </section>
</template>

<script>
import ProductCardList from '../../components/ProductCard/ProductCardList.vue';
import ProductCard from '../../components/ProductCard/ProductCard.vue';
import allProductsInCategory from '../../queries/allProductsInCategory';
import gql from 'graphql-tag'

export default {
  name: "category-page",
  components: {
    ProductCardList,
    ProductCard
  },
  computed: {
    category() {
      console.log("Category:",this.$route.params.category)
    }
  },
  apollo: {
    allProduct: {
      prefetch: false,
      variables() {
        let categorySlug = this.$route.params.category;
        console.log("CategorySlug:", categorySlug);
        return { categorySlug }
      },
      // query: allProductsInCategory($categorySlug)
      query: gql`
        query {
          allProduct (where: { slug: { current: { eq: $categorySlug}}}) {
            title
            slug {
              current
            }
            body{
              enRaw,
              nbRaw
            }
            defaultProductVariant {
              images {
                _key
                asset {
                  url
                }
              }
              title
              price
            }
          }
        }`
    }
  }
}
</script>
