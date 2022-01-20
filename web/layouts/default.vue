<template>
  <div>
    <header>
      <nuxt-link to="/" class="logo">
        <img src="~/assets/jenewel-logo.png" alt="jenewel-logo"/>
      </nuxt-link>
    </header>

    <main>
      <nuxt />
    </main>

    <footer>
      <div class="main-content">
        <div class="footer-col">
          <h2>Contact</h2>
          <ul>
            <li>
              <nuxt-link class="contact-link" target="_blank" to="https://instagram.com/jenewel_">
                <fa
                  class="fa-icon"
                  :icon="['fab', 'instagram']"
                />
                <span class="link-title">Instagram</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="contact-link" to="mailto:contact@jenewel.com">
                <fa
                  class="fa-icon"
                  :icon="['far', 'envelope']"
                />
                <span class="link-title">Email</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ALL_CATEGORIES from '../queries/allCategories';
import ALL_PRODUCTS from '../queries/allProducts';

export default {
  name: "default-layout",
  data() {
    return {
      allCategory: [],
      allProduct: []
    }
  },
  apollo: {
    allCategory: ALL_CATEGORIES,
    allProduct: ALL_PRODUCTS
  },
  created() {
    // this.$store.dispatch('SET_ALL_CATEGORIES', this.allCategory);
    // this.$store.dispatch('SET_ALL_PRODUCTS', this.allProduct);

  }
}
</script>

<style lang="scss">

</style>
