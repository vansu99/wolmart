<template>
  <div class="top-categories">
    <div class="container">
      <div class="top-categories__top">
        <h2 class="section__title">Mặt hàng nổi bật trong tháng</h2>
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
        'thuc-pham-chuc-nang.jpg',
        'duoc-pham.jpg',
        'cham-soc-suc-khoe.jpg',
        'cham-soc-da-cho-nam.jpg',
        'cham-soc-da-cho-nu.jpg',
        'me-va-be.jpg',
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
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    @media #{$info-screen-1200} {
      grid-template-columns: repeat(5, 1fr);
    }
    @media #{$info-screen-992} {
      grid-template-columns: repeat(4, 1fr);
    }
    @media #{$info-screen-768} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media #{$info-screen-575} {
      grid-template-columns: repeat(2, 1fr);
    }
    @media #{$info-screen-375} {
      grid-template-columns: 1fr;
    }
  }
  &__card {
    position: relative;
    min-width: 15rem;
    
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in;
    background-color: $bg-contrary;
    @media #{$info-screen-1200} {
      height: 22rem;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
