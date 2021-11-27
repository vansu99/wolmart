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
.top-categories {
  background-color: $bg-top-categories;
  padding: calc(5rem - 1.2rem) 0 5rem;

  &__top {
    text-align: center;
    padding-bottom: calc(2.5rem - 1.1rem);
  }
  &__content {
    display: flex;
    flex-shrink: 0;
    gap: 1rem;
    margin-right: -1rem;
  }
  &__card {
    position: relative;
    width: calc(100% / 6 - 1rem);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in;
    flex-shrink: 1;
    background-color: $bg-contrary;
    & img {
      width: 100%;
      height: 100%;
      transition: all 0.2s ease-in;
    }
    & div {
      position: absolute;
      bottom: 1.8rem;
      width: 100%;
      text-align: center;
      font-family: $font-primary;
      font-size: 1.4rem;
      font-weight: 600;
      text-transform: capitalize;
      color: $text-primary;
      transition: all 0.2s ease-in;
    }
    &:hover div {
      color: $hover-color;
    }
    &:hover {
      box-shadow: $box-shadow;
      & img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
