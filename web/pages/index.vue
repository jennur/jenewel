<template>
  <div>
    <cta-section/>
    <category-cta class="main-content"/>

  </div>
</template>

<script>
import CategoryCta from '../components/CategoryCta/CategoryCta.vue';
import CtaSection from '../components/CtaSection/CtaSection.vue';
import ProductCard from '../components/ProductCard/ProductCard.vue';
import ProductCardList from '../components/ProductCard/ProductCardList.vue';
import SideBar from '../components/SideBar/SideBar.vue';

export default {
  components: {
    CtaSection,
    ProductCardList,
    ProductCard,
    SideBar,
    CategoryCta
  },
  data() {
    return {
      allCategories: this.$store.state.allCategories
    }
  }
}
</script>

<style>


</style>
