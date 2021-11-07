<template>
  <div class="top-categories">
    <div class="container">
      <div class="top-categories__top">
        <h2 class="section-title">Top Categories Of The Month</h2>
      </div>
      <div class="top-categories__content">
        <div class="top-categories__card" v-for="(item, index) in categories" :key="index">
          <img
            :src="require(`@/assets/images/Home/TopCategories/${item.image}`)"
            :alt="item.category"
          />
          <div>{{ item.category }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCategories',
  data() {
    return {
      categories: [
        { image: 'fashion.jpg', category: 'fashion' },
        { image: 'furniture.jpg', category: 'furniture' },
        { image: 'shoes.jpg', category: 'shoes' },
        { image: 'sports.jpg', category: 'sports' },
        { image: 'games.jpg', category: 'games' },
        { image: 'computers.jpg', category: 'computers' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './TopCategories';
</style>
