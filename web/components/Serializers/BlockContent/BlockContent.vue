<template>
  <div class="block-content">
    <div class="block" v-for="block in content" :key="block._key">
      <component v-for="element in block.children" :key="element._key" :is="element._type">
        {{element.text}}
      </component>
    </div>
  </div>
</template>

<script>

export default {
  name: "BlockContent",
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
