<template>
  <div class="box__list">
    <div class="box__item" v-for="(item, index) in bannerBoxes" :key="index">
      <img :src="require(`@/assets/images/Home/Banner/icon/${item.image}`)" :alt="item.image" />
      <div class="box__description">
        <div class="box__text">{{ item.text }}</div>
        <div class="box__sub-text">{{ item.subText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxList',
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
<style  lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/mixins';
.box {
  &__item {
    @include flexCenter();
    & img {
      width: 3.9rem;
      height: 3.9rem;
      margin-right: 1.3rem;
      filter: $filter-banner-icon;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 3rem 0;
    padding: 2.3rem 0 2.2rem;
    border: 1px solid $text-white-dark;
  }
  &__description {
    font-family: $font-primary;
  }
  &__text {
    font-family: $font-primary;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: capitalize;
    color: $text-primary;
  }
  &__sub-text {
    font-family: $font-primary;
    font-size: 1.3rem;
    color: $text-semi-light;
  }
}
</style>
