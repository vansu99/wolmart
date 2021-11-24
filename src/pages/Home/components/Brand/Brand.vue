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
.brand {
  padding-top: 1.5rem;
  padding-bottom: 3rem;
  &__content {
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.7rem;
    & img {
      margin-top: -0.1rem;
      margin-left: -0.1rem;
      width: calc(100% / 6);
      border: 0.1rem solid $text-white-dark;
      overflow: hidden;
    }
  }
}

</style>
