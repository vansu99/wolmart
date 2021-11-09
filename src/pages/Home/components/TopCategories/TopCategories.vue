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
          @click="handleClick(item.id)"
          :key="item.id"
        >
          <img
            :src="require(`@/assets/images/Home/TopCategories/${categories_img[index]}`)"
            :alt="item.name"
          />
          <div>{{ item.name }}</div>
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
  props: { categories: [] },
  methods: {
    handleClick(id) {
      this.$router.push(`/categories/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './TopCategories';
</style>
