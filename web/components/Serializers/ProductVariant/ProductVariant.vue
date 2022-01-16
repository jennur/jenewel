<template>
  <div class="product-variant">
    <img v-for="image in content.images" :key="image._key" :src="image.asset._ref"/>
  </div>
</template>

<script>

export default {
  name: "ProductVariant",
  components: {
  },
  props: ['content'],
  computed: {
  }

}
</script>
<style lang="scss" scoped>
  .block {
    padding-bottom: $spacingSm;
  }
</style>
