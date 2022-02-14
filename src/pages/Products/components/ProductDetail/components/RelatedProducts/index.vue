<template>
  <div class="related-product">
    <div class="related-product__top">
      <h2 class="related-product__title">Sản phẩm tương tự</h2>
      <router-link :to="`/category/${productList[0].category_id}`" v-if="!isLoading">
        <span>Xem thêm</span>
        <img src="@/assets/images/Shared/arrow-right-solid.svg" alt="arrow" />
      </router-link>
    </div>
    <hr class="hr-divider" />
    <template v-if="isLoading"><skeleton :count="6" :row3="true" /></template>
    <template v-else>
      <div class="product__list">
        <Product
          v-for="product in productList.slice(0, 6)"
          :key="`rl-p-${product.id}`"
          :product="product"
          :star="star"
          :review="review"
        />
      </div>
    </template>
  </div>
</template>

<script>
import Product from '@/components/Product/Product';
import Skeleton from '@/components/Skeleton';
export default {
  name: 'RelatedProducts',
  props: { isLoading: Boolean, productList: Array, star: Number, review: Number },
  components: { Product, Skeleton },
};
</script>

<style lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/mixins';

.related-product {
  &__top {
    @include flexSpaceBetween;
    & a {
      justify-content: flex-end;
      @include flexCenter;
      font-family: $font-primary;
      font-size: 1.4rem;
      font-weight: 600;
      text-decoration: none;
      color: $text-primary;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      & img {
        margin: 0.5rem;
        height: 1.4rem;
        transition: all 0.15s ease-in-out;
      }
      &:hover {
        & img {
          transform: translateX(0.5rem);
        }
      }
    }
  }
  &__title {
    padding: 1.1rem 0;
    font-size: 2rem;
    font-family: $font-primary;
    font-weight: 700;
    color: $text-primary;
  }
}

.hr-divider {
  margin-bottom: 2rem;
  border-top-width: 0;
  border-color: $text-white-dark;
}
.product__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 100%;
  margin-right: -0.7rem;
  @media #{$info-screen-575} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media #{$info-screen-375} {
    display: block;
  }
}
</style>
