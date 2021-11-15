<template>
  <div class="top-categories">
    <div class="container">
      <div class="top-categories__top">
        <h2 class="section__title">Top Categories Of The Month</h2>
      </div>
      <div class="top-categories__content">
        <div class="top-categories__card" v-for="(item, index) in categories" :key="item.id">
          <router-link
            :to="{
              name: 'Products',
              params: { slug: convertSlug(item.name), categoryId: item.id },
            }"
          >
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
import mixins from '@/mixins';
export default {
  name: 'TopCategories',
  mixins: [mixins],
  data() {
    return {
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
  computed: {
    categories() {
      return this.$store.getters['category/categories'];
    },
  },
};
</script>

<style lang="scss" scoped>
@import './TopCategories';
</style>
