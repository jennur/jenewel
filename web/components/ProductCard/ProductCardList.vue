<template>
  <div class="card-list">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "ProductCardList"
}
</script>

<style lang="scss" scoped>
  .card-list {
    display: flex;
    flex-direction: row;
    max-width: $tabletWidth;
    margin: 0 auto;
  }
</style>
