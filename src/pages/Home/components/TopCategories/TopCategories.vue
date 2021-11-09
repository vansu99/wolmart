<template>
  <div class="top-categories">
    <div class="container">
      <div class="top-categories__top">
        <h2 class="section-title">Top Categories Of The Month</h2>
      </div>
      <div class="top-categories__content">
        <div
          class="top-categories__card"
          v-for="(item, index) in categories"
          :key="item.id"
        >
          <router-link :to="`/categories/${item.slug}`">
            <img
              :src="require(`@/assets/images/Home/TopCategories/${categories_img[index]}`)"
              :alt="item.name"
            />
            <div>{{ item.name }}</div>
          </router-link>
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
      isLoading: false,
      categories_img: [
        'fashion.jpg',
        'furniture.jpg',
        'shoes.jpg',
        'sports.jpg',
        'games.jpg',
        'computers.jpg',
      ],
    };
  },
  props: { categories: [] }
};
</script>

<style lang="scss" scoped>
@import './TopCategories';
</style>
