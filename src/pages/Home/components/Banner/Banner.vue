<template>
  <div class="banner">
    <div class="container">
      <div class="banner-list">
        <div class="banner-item">
          <img :src="require('@/assets/images/banner1.jpg')" alt="" />
        </div>
      </div>
      <BoxList />
      <Advertisement />
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
    padding: 0 0 3rem;
  }
  &-item {
    height: 28.3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
