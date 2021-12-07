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
          text: 'Miễn phí vận chuyển',
          subText: 'Cho các đơn trên 3 triệu',
        },
        {
          image: 'briefcase-solid.svg',
          text: 'An toàn mua sắm',
          subText: 'Đảm bảo thông tin',
        },
        {
          image: 'hand-holding-usd-solid.svg',
          text: 'Đảm bảo hoàn tiền',
          subText: 'Trong vòng 30 ngày',
        },
        {
          image: 'comments-solid.svg',
          text: 'Hỗ trợ khách hàng',
          subText: 'Sẵn sàng 24/7',
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
    &:nth-child(1),
    &:nth-child(2) {
      @media #{$info-screen-992} {
        padding-bottom: 1rem;
        border-bottom: 1px solid #eee;
      }
    }
    &:nth-child(3),
    &:nth-child(4) {
      @media #{$info-screen-992} {
        padding-top: 1rem;
      }
    }
    &:nth-child(4),
    &:nth-child(2) {
      @media #{$info-screen-992} {
        border-left: 1px solid #eee;
      }
      @media #{$info-screen-575} {
        border-left: none;
      }
    }
    @media #{$info-screen-575} {
      padding-top: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #eee;
    }
    &:nth-child(4) {
      border-bottom: none;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 3rem 0;
    padding: 2.3rem 0 2.2rem;
    border: 1px solid $text-white-dark;
    @media #{$info-screen-992} {
      grid-template-columns: repeat(2, 1fr);
      padding-left: 2rem;
      padding-right: 2rem;
    }
    @media #{$info-screen-575} {
      grid-template-columns: 1fr;
      padding: 0;
    }
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
