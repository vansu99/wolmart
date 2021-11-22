<template>
  <div :class="category.slug">
    <div class="clothing">
      <div class="container">
        <div class="clothing__top">
          <h2 class="section__title">{{ category.name }}</h2>
          <router-link :to="`/categories/${category.slug}`"
            ><div>More Products</div>
            <img src="@/assets/images/Shared/arrow-right-solid.svg" alt="arrow" />
          </router-link>
        </div>
        <hr class="section__divider" />
        <div class="clothing__content">
          <div class="sidebar-banner">
            <div class="sidebar-banner__content">
              <div class="sidebar-banner__subtitle">weekend sale</div>
              <hr class="sidebar-banner__divider" />
              <div class="sidebar-banner__title">new arrivals</div>
              <div class="sidebar-banner__type">collection</div>
              <div class="sidebar-banner__link">shop now</div>
            </div>
          </div>
          <div class="products">
            <div
              class="product"
              v-for="(item, index) in discountProduct"
              :key="`${category.slug}-${index}`"
            >
              <div class="product__top">
                <router-link
                  :to="{
                    name: 'ProductDetail',
                    params: { slug: item.name, categoryId: item.category_id, productId: item.id },
                  }"
                  class="product__link"
                  ><img :src="item.img_path" :alt="item.name" />
                </router-link>
                <div class="product__btns">
                  <router-link to="/cart" class="product__btn" title="Add to cart"
                    ><img
                      src="@/assets/images/Home/Clothing/icon/shopping-bag-solid.svg"
                      alt="add-to-cart"
                  /></router-link>
                  <router-link to="wishlist" class="product__btn" title="Add to wishlist"
                    ><img
                      src="@/assets/images/Home/Clothing/icon/heart-solid.svg"
                      alt="add-to-wishlist"
                  /></router-link>
                </div>
                <span class="product__sale" v-show="item.discount">{{ item.discount }}% off</span>
              </div>
              <div class="product__content">
                <div class="product__name">
                  <router-link
                    :to="{
                      name: 'ProductDetail',
                      params: { slug: item.name, categoryId: item.category_id, productId: item.id },
                    }"
                    >{{ item.name }}</router-link
                  >
                </div>
                <div class="product__rating">
                  <span class="product__stars" :star="`${star}.00`">
                    <img
                      class="check"
                      src="@/assets/images/Shared/star-solid.svg"
                      alt=""
                      v-for="n in star"
                      :key="n"
                    />
                    <img
                      src="@/assets/images/Shared/star-solid.svg"
                      alt="star"
                      v-for="n in 5 - star"
                      :key="n + 5"
                    />
                  </span>
                  <router-link
                    :to="{
                      name: 'ProductDetail',
                      params: { slug: item.name, categoryId: item.category_id, productId: item.id },
                    }"
                    class="product__desription"
                    >({{ review }} reviews)</router-link
                  >
                </div>
                <div class="product__price">
                  <span class="product__price--new">{{
                    item.original_price | calDiscountPrice(item.discount) | formatPrice
                  }}</span>
                  <span class="product__price--old">{{ item.original_price | formatPrice }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categoryApis } from '@/apis/';
import Nprogress from 'nprogress';

export default {
  name: 'Clothing',
  data() {
    return {
      products: [],
      star: 3,
      review: 12,
    };
  },
  props: {
    category: {},
  },
  created() {
    this.getProducts();
  },
  computed: {
    discountProduct() {
      return this.products.filter((product) => product.discount >= 20);
    },
  },
  methods: {
    async getProducts() {
      // call API to get product list
      try {
        Nprogress.start();
        const productData = await categoryApis.getProductListBaseOnCategory(this.category.id);
        if (productData.status === 200) {
          this.products = productData.data;
        }
      } catch {
        console.log('error!!!');
      } finally {
        Nprogress.done();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Clothing';
</style>
