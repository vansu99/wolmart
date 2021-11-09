<template>
  <div :class="category.slut">
    <div class="clothing">
      <div class="container">
        <div class="clothing__top">
          <h2 class="section__title">{{ category.name }}</h2>
          <a @click="handleClick(category.id)"
            ><div>More Products</div>
            <img src="@/assets/images/Shared/arrow-right-solid.svg" alt="arrow" />
          </a>
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
            <div class="product" v-for="item in products" :key="item.id">
              <div class="product__top">
                <a href="" class="product__link"><img :src="item.img_path" :alt="item.name" /></a>
                <div class="product__btns">
                  <a class="product__btn" title="Add to cart"
                    ><img
                      src="@/assets/images/Home/Clothing/icon/shopping-bag-solid.svg"
                      alt="add-to-cart"
                  /></a>
                  <a class="product__btn" title="Add to wishlist"
                    ><img
                      src="@/assets/images/Home/Clothing/icon/heart-solid.svg"
                      alt="add-to-wishlist"
                  /></a>
                </div>
                <span class="product__sale" v-show="item.discount">{{ item.discount }}% off</span>
              </div>
              <div class="product__content">
                <div class="product__name">
                  <a>{{ item.name }}</a>
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
                      :key="n"
                    />
                  </span>
                  <a class="product__desription">({{ review }} reviews)</a>
                </div>
                <div class="product__price">
                  <span class="product__price--new">{{
                    formatPrice((item.original_price / 100) * (100 - item.discount))
                  }}</span>
                  <span class="product__price--old">{{ formatPrice(item.original_price) }}</span>
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
import axios from '@/utils/request';

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
    this.callAPI();
  },
  methods: {
    async callAPI() {
      const data = (await axios.get(`/categories/${this.category.id}`)).data;
      this.products = data;
      console.log(this.products);
    },
    handleClick(id) {
      this.$router.push(`/categories/${id}`);
    },
    formatPrice(value) {
      
      return value.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    },
  },
  computed: {
    currentPrice: () => {
      return (this.item.original_price / 100) * (100 - this.item.discount);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Clothing';
</style>
