<template>
  <section>
    <div v-if="loading" class="placeholder-list">
      <div class="placeholder" v-for="num in 2" :key="`placeholder-${num}`">
        <div class="image">
          <div class="text-line"></div>
          <div class="text-line"></div>
        </div>
      </div>
    </div>

    <div class="card-list">
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCardList",
  props: ['loading']
}
</script>

<style lang="scss" scoped>
  .card-list, .placeholder-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;

    .placeholder:nth-child(2n + 1) {
      margin-right: $spacingMd;
    }

    .placeholder {
      display: block;
      flex-basis: 100%;
      width: 100%;
      min-height: 300px;
      max-width: 100%;
      margin-bottom: $spacingMd;
      color: $bgColor;
      position: relative;
      overflow: hidden;

      @media screen and (min-width: $mobileWidth) {
        flex-basis: 50%;
        max-width: calc(50% - 2*$spacingSm);
      }

      .image {
        display: block;
        width: 100%;
        height: 300px;
        background-color: rgba($secondaryBgColor, 0.7);
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        left: -150px;
        top: 0;
        height: 100%;
        width: 150px;
        background: linear-gradient(to right, transparent 0%, $bgColor 50%, transparent 100%);
        animation: loading 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
      }
    }
  }

  @keyframes loading {
    from {
      left: -150px;
    }

    to {
      left: 100%;
    }
  }
</style>
