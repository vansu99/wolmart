<template>
  <div class="banner">
    <div class="container">
      <div class="banner-list">
        <div class="banner-item">
          <img :src="require('@/assets/images/banner2.jpg')" alt="" />
        </div>
      </div>
      <box-list />
      <advertisement />
    </div>
  </div>
</template>

<script>
import BoxList from './banner-box-list';
import Advertisement from './banner-advertisement.vue';
export default {
  name: 'Banner',
  data() {
    return {};
  },
  components: { BoxList, Advertisement },
};
</script>

<style lang="scss" scoped>
.banner {
  &-list {
    padding: 3rem 0 3rem;
  }
  &-item {
    height: 45rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
