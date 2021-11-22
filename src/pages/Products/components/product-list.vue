<template>
  <div class="product-content">
    <div class="product-content-item" v-for="product in products" :key="product.id">
      <router-link
        :to="{
          name: 'ProductDetail',
          params: { slug: convertSlug(product.name), productId: product.id },
        }"
        class="product-content-link"
      >
        <div class="product-content-badge" v-if="product.discount > 0">
          {{ product.discount }}% off
        </div>
        <div class="product-content-thumbnail">
          <div class="thumbnail-inner">
            <img :src="product.img_path" :alt="product.name" />
          </div>
        </div>
        <div class="product-content-information">
          <h4 class="product-name">{{ product.name }}</h4>
          <div class="product-price">
            <div class="product-price-current">
              {{ product.original_price | calDiscountPrice(product.discount) | formatPrice }}
            </div>
            <div class="product-price-original" v-if="product.discount > 0">
              {{ product.original_price | formatPrice }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import mixins from '@/mixins';
export default {
  name: 'product-list',
  props: ['products'],
  mixins: [mixins],
};
</script>

<style lang="scss" scoped>
.product-content {
  display: flex;
  flex-wrap: wrap;
  margin-right: -1.5rem;
  &-item {
    width: calc(25% - 1.5rem);
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    background-color: #fff;
  }
  &-link {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-bottom: 2rem;
    overflow: hidden;
    cursor: pointer;
  }
  &-badge {
    position: absolute;
    left: 2rem;
    top: 2rem;
    background-color: $secondary-color;
    @include flexCenter;
    width: 6rem;
    height: 2.5rem;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 0.3rem;
    text-transform: uppercase;
    z-index: 1;
  }
  &-thumbnail {
    margin-bottom: 2.5rem;
    padding-top: 4rem;
    .thumbnail-inner {
      flex-shrink: 0;
      text-align: center;
      position: relative;
      width: 100%;
      padding-bottom: 56.65%;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #fff;
        vertical-align: bottom;
        object-fit: contain;
      }
    }
  }
  &-information {
    padding: 0 2rem;
    .product-name {
      margin-bottom: 0.7rem;
      font-size: 1.6rem;
      @include textClamp(2);
      color: $text-primary;
    }
    .product-price {
      display: flex;
      flex-direction: column;
      &-current {
        color: #e32e43;
        font-size: 1.6rem;
        font-weight: bold;
      }
      &-original {
        font-size: 1.3rem;
        color: $text-primary;
        text-decoration: line-through;
      }
    }
  }
}
</style>
