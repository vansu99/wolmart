<template>
  <div class="product">
    <div class="product__left">
      <router-link :to="`/products/${product.id}`" class="product__link"
        ><img :src="product.img_path" :alt="product.name"
      /></router-link>
    </div>
    <div class="product__content">
      <div class="product__name">
        <a>{{ product.name }}</a>
      </div>
      <ProductRating :star="star" :review="review" />
      <div class="product__price">
        <span class="product__price--new">{{
          product.original_price | calDiscountPrice(product.discount) | formatPrice
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProductRating from '@/components/RatingStarWithDescription/RatingStarWithDescription';
export default {
  components: { ProductRating },
  props: { product: Object, star: Number, review: Number },
};
</script>

<style lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/mixins';
.product {
  overflow: hidden;
  display: flex;
  padding: 1rem 0;
  gap: 2rem;
  &__left {
    display: flex;
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
    font-size: 1rem;
    & > a {
      display: flex;
      width: 100%;
      height: 100%;
      color: $text-primary;
    }
    & img {
      margin: auto 0;
      width: 10rem;
      height: 11.3rem;
      object-fit: contain;
      cursor: pointer;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: $font-primary;
  }
  &__name {
    @include textClamp(2);
    margin-bottom: 0.6rem;
    font-family: $font-primary;
    font-weight: 500;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: $text-primary;
    transition: all 0.2s ease-in;
    transition: all 0.5s ease-out;
    cursor: pointer;
    &:hover a {
      color: $bg-facebook;
    }
    & > a {
      color: $text-primary;
    }
  }
  &__price {
    margin-top: 0.3rem;
    font-family: $font-primary;
    font-weight: 600;
    font-size: 1.6rem;
    color: $text-primary;
    flex-shrink: 0;
  }
}
</style>
