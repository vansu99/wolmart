<template>
  <div class="banner">
    <div class="container">
      <div class="banner-list">
        <div class="banner-item">
          <img :src="require('@/assets/images/banner1.jpg')" alt="">
        </div>
      </div>
      <div class="boxs">
        <div class="box" v-for="(item, index) in bannerBoxes" :key="index">
          <img :src="require(`@/assets/images/Home/Banner/icon/${item.image}`)" :alt="item.image" />
          <div class="box__description">
            <div class="box__text">{{ item.text }}</div>
            <div class="box__sub-text">{{ item.subText }}</div>
          </div>
        </div>
      </div>
      <!-- ---------------------------ADVERTISES----------------------------- -->
      <div class="advs">
        <div class="adv">
          <div class="adv__content">
            <div class="adv__sub-title">Get up to <span>20% off</span></div>
            <div class="adv__title">sports oufits</div>
            <div class="adv__type">collection</div>
            <div class="adv__description">Starting at <span>$170.00</span></div>
          </div>
          <img src="@/assets/images/Home/Banner/banner-1.jpg" alt="banner" />
        </div>
        <div class="adv">
          <div class="adv__content white">
            <div class="adv__sub-title white capitalize">new arrivals</div>
            <div class="adv__title white">ACCESSORIES</div>
            <div class="adv__type white">collection</div>
            <div class="adv__description white capitalize">only from <span>$90.00</span></div>
          </div>
          <img src="@/assets/images/Home/Banner/banner-2.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      bannerBoxes: [
        {
          image: 'truck-solid.svg',
          text: 'Free Shipping & Returns',
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
        {
          image: 'comments-solid.svg',
          text: 'Customer Support',
          subText: 'Call or email us 24/7',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './Banner';
</style>
