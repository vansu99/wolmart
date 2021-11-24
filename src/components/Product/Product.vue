<template>
  <div class="product__item">
    <router-link
      :to="{
        name: 'ProductDetail',
        params: {
          slug: convertSlug(product.name),
          categoryId: product.category_id,
          productId: product.id,
        },
      }"
    >
      <div class="product__top">
        <a class="product__link"><img :src="product.img_path" :alt="product.name" /></a>
        <div class="product__action--vertical">
          <router-link to="/cart" class="product__btn" title="Add to cart"
            ><i class="fas fa-shopping-bag"></i
          ></router-link>
          <router-link to="/wishlist" class="product__btn" title="Add to wishlist"
            ><i class="fas fa-heart"></i
          ></router-link>
        </div>
        <span class="product__sale" v-show="product.discount">{{ product.discount }}% off</span>
        <div class="product__action--horizontal"><a href="">Quick view</a></div>
      </div>
      <div class="product__content">
        <div class="product__name">
          <a>{{ product.name }}</a>
        </div>
        <RatingStar :star="star" :review="review" />
        <div class="product__price">
          <span class="product__price--new">{{
            product.original_price | calDiscountPrice(product.discount) | formatPrice
          }}</span>
          <span class="product__price--old">{{ product.original_price | formatPrice }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import RatingStar from '@/components/RatingStarWithDescription/RatingStarWithDescription';
import mixins from '@/mixins';
export default {
  mixins: [mixins],
  components: { RatingStar },
  props: { product: Object, star: Number, review: Number },
};
</script>

<style lang="scss" scoped>
.product {
  &__item {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    & > a {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &:hover .product__action {
      &--vertical,
      &--horizontal {
        display: block;
      }
    }
  }
  &__top {
    display: flex;
    flex-shrink: 0;
    position: relative;
    width: 100%;
    height: 30rem;
    overflow: hidden;
    font-size: 1rem;
    & > a {
      display: flex;
      width: 100%;
      height: 100%;
      color: $text-primary;
      :hover img {
        color: $hover-dark;
      }
    }
    & img {
      margin: auto 0;
      width: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
  &__action {
    &--vertical {
      display: none;
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
    }
    &--horizontal {
      display: none;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 1.14em 0;
      background-color: $hover-color;
      text-align: center;
      transition: all 3s;
      & a {
        color: $text-white-light;
        font-size: 1.4em;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }
  &__btn {
    @include flexCenter();
    width: 3.6rem;
    height: 3.6rem;
    margin-bottom: 0.2rem;
    background: $bg-contrary;
    border: 1px solid $bg-contrary-light;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover i {
      color: #fff;
    }
    &:hover {
      border: 1px solid $hover-color;
      background-color: $hover-color;
    }
    & i {
      font-size: 1.5rem;
      object-fit: cover;
      color: #666;
    }
  }
  &__sale {
    position: absolute;
    top: 2rem;
    left: 2rem;
    padding: 0.6rem 1rem;
    font-family: $font-primary;
    font-size: 1.2rem;
    text-transform: uppercase;
    background: $secondary-color;
    color: $text-white-light;
    border-radius: 0.3rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: auto;
    font-family: $font-primary;
  }
  &__name {
    flex: 1;
    @include textClamp(2);
    margin-top: 1.4rem;
    margin-bottom: 0.6rem;
    font-family: $font-primary;
    font-weight: 500;
    font-size: 1.3rem;
    text-transform: capitalize;
    color: $text-primary;
    transition: all 0.2s ease-in-out;
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
    &--old {
      padding-left: 1rem;
      font-weight: 400;
      text-decoration: line-through;
      color: $text-light;
    }
  }
}
</style>