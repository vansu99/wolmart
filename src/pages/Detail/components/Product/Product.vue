<template>
  <div class="product">
    <div class="product__container">
      <div class="product__left">
        <vueper-slides
          class="no-shadow vueperslides--1"
          ref="vueperslides1"
          :autoplay="false"
          :bullets="false"
          @slide="$refs.vueperslides2 &amp;&amp; $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
          fixed-height="500px"
        >
          <vueper-slide v-for="i in 8" :key="i" :image="product.img_path">
          </vueper-slide> </vueper-slides
        ><br />
        <vueper-slides
          class="no-shadow vueperslides--2"
          ref="vueperslides2"
          :dragging-distance="50"
          @slide="$refs.vueperslides1 &amp;&amp; $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
          :visible-slides="4"
          fixed-height="120px"
          :bullets="false"
          :gap="2.5"
          :arrows="false"
        >
          <vueper-slide
            v-for="i in 8"
            :key="i"
            :image="product.img_path"
            @click.native="$refs.vueperslides2 &amp;&amp; $refs.vueperslides2.goToSlide(i)"
          ></vueper-slide>
        </vueper-slides>
      </div>
      <div class="product__right">
        <h2 class="product__name">{{ product.name }}</h2>
        <hr class="hr-divider" />
        <div class="product__price">
          <span class="product__price--new">{{
            Number(product.original_price) | calDiscountPrice(product.discount) | formatPrice
          }}</span>
          <span class="product__price--old">{{
            Number(product.original_price) | formatPrice
          }}</span>
        </div>
        <hr class="hr-divider" />
        <div class="product__actions">
          <div class="product__quantity">
            <input type="number" min="1" max="10000" v-model="value" />
            <button class="product__quantity-btn--minus" @click="decreaseQuantity">-</button>
            <button class="product__quantity-btn--plus" @click="increaseQuantity">+</button>
          </div>
          <div class="product__btn" :class="{ disabled: value === 0 }">
            <i class="fas fa-shopping-bag product__btn-icon"></i>
            <div class="product__btn-text">Add to Cart</div>
          </div>
        </div>
        <div class="product__links">
          <Social />
          <span></span>
          <div class="product__icon">
            <router-link to="/wishlist" href=""
              ><i class="far fa-heart"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

import Social from '@/components/SocialContact/SocialContact';

export default {
  name: 'Product',
  data: () => ({
    value: 1,
  }),
  props: { product: {} },
  components: {
    VueperSlides,
    VueperSlide,
    Social,
  },
  methods: {
    increaseQuantity: function () {
      if (this.value >= 10000) {
        return this.value;
      }
      return (this.value = Number(this.value) + 1);
    },
    decreaseQuantity: function () {
      if (this.value <= 0) {
        return this.value;
      }
      return (this.value = Number(this.value) - 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Product';
</style>
