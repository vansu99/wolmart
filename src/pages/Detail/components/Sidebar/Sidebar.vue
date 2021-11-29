<template>
  <div class="sidebar">
    <div class="sidebar__slogan">
      <div class="slogan" v-for="(item, index) in bannerBoxes" :key="index">
        <img :src="require(`@/assets/images/Home/Banner/icon/${item.image}`)" :alt="item.image" />
        <div class="slogan__description">
          <div class="slogan__text">{{ item.text }}</div>
          <div class="slogan__sub-text">{{ item.subText }}</div>
        </div>
      </div>
    </div>
    <div class="sidebar__banner">
      <div class="banner">
        <div class="banner__img">
          <img src="@/assets/images/ProductDetail/banner-girl-smile.jpg" alt="" />
        </div>
        <div class="banner__content">
          <div class="banner__sales">
            <span class="banner__number">40</span>
            <div class="banner__unit">
              <div class="banner__percent">%</div>
              <div class="banner__state">off</div>
            </div>
          </div>
          <div class="banner__text">Ultimate sale</div>
        </div>
      </div>
    </div>
    <div class="sidebar__widget">
      <div class="widget">
        <div class="widget__top">
          <h2 class="widget__title">More products</h2>
        </div>
        <hr class="hr-divider" />
        <div class="widget__bottom">
          <div class="product-list">
            <ProductSidebar
              v-for="product in productList.slice(-3)"
              :key="`sb-${product.id}`"
              :product="product"
              :star="star"
              :review="review"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSidebar from '@/components/ProductSidebar/ProductSidebar';
export default {
  name: 'sidebar',
  data() {
    return {
      bannerBoxes: [
        {
          image: 'truck-solid.svg',
          text: 'Free shipping & returns',
          subText: 'For all orders over $99',
        },
        {
          image: 'briefcase-solid.svg',
          text: 'Secure Payment',
          subText: 'We ensure secure payment',
        },
        {
          image: 'hand-holding-usd-solid.svg',
          text: 'Money Back Guarantee',
          subText: 'Any back within 30 days',
        },
      ],
    };
  },
  props: { productList: Array, star: Number, review: Number },
  components: { ProductSidebar },
};
</script>

<style lang="scss" scoped>
@import './Sidebar';
</style>
