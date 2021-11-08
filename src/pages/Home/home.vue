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
.text {
  @include flexCenter();
}
</style>
