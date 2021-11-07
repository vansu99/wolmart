<template>
  <div class="home">
    <Banner />
    <TopCategories />
    <Clothing />
    <Clothing />
    <Brand />
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {};
  },
  components: {
    TopCategories: () => import('./components/TopCategories/TopCategories'),
    Brand: () => import('./components/Brand/Brand'),
    Banner: () => import('./components/Banner/Banner'),
    Clothing: () => import('./components/Clothing/Clothing'),
  },
};
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/reset';
@import 'src/assets/styles/mixins';
@import 'src/assets/styles/shared';
@import 'src/assets/styles/variables';
@import 'src/assets/styles/typography';

.text {
  @include flexCenter();
  // background-color:rgb(172, 72, 72);
}
</style>
