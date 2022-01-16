<template>
  <div>
    <cta-section/>
    <nav>
      <ul>
        <li v-for="category in allCategory" :key="category._key">
          <a :href="category.slug.current">
            {{ category.title }}
          </a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
import CtaSection from '../components/CtaSection/CtaSection.vue';
import ProductCard from '../components/ProductCard/ProductCard.vue';
import ProductCardList from '../components/ProductCard/ProductCardList.vue';

import mainCategories from '../queries/mainCategories';

export default {
  components: {
    CtaSection,
    ProductCardList,
    ProductCard
  },
  data() {
    return {
      allCategory: []
    }
  },
  apollo: {allCategory: mainCategories }
}
</script>

<style>


</style>
