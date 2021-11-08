<template>
  <div class="brand">
    <div class="container">
      <div class="brand__top">
        <h2 class="section__title">Our clients</h2>
        <hr class="section__divider" />
      </div>
      <div class="brand__content">
        <img
          :src="require(`@/assets/images/Home/Brand/${item}`)"
          v-for="(item, index) in brands"
          :key="index"
          :alt="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  data() {
    return {
      brands: [
        'auto-group.png',
        'galaaxy.png',
        'green-grass.png',
        'kinova.png',
        'node.png',
        'ns8.png',
        'red.png',
        'rightcheck.png',
        'sass.png',
        'skillstar.png',
        'skysuite.png',
        'sterling.png',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './Brand';
</style>
