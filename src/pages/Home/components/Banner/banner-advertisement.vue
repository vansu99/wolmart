<template>
  <div class="advertisement__list">
    <div class="advertisement__item advertisement__item--first">
      <!-- <img src="@/assets/images/Home/Banner/banner-1.jpg" alt="banner" /> -->
      <div class="advertisement__content">
        <div class="advertisement__sub-title">Khuyến mãi lên tới <span>20%</span></div>
        <div class="advertisement__title--black">Chăm sóc da</div>
        <div class="advertisement__type">cao cấp</div>
        <div class="advertisement__description">Giá cơ bản <span>{{170000 | formatPrice}}</span></div>
      </div>
    </div>
    <div class="advertisement__item advertisement__item--second">
      <!-- <img src="@/assets/images/Home/Banner/banner-2.jpg" alt="" /> -->
      <div class="advertisement__content">
        <div class="advertisement__sub-title--white">Mặt hàng mới</div>
        <div class="advertisement__title--white">Dược phẩm</div>
        <div class="advertisement__type--white">Tuyển chọn</div>
        <div class="advertisement__description--white">Chỉ từ <span>{{90000 | formatPrice}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.advertisement {
  &__item {
    position: relative;
    min-height: 22rem;
    overflow: hidden;
    object-fit: cover;
    background-color: $bg-contrary-dark;
    border-radius: 0.3rem;
    @media #{$info-screen-768} {
      margin-bottom: 3rem;
    }
    &--first{
background: $bg-second url('../../../../assets/images/Home/Banner/banner-1.jpg') no-repeat center / cover;
    }
    &--second{
background: $bg-second url('../../../../assets/images/Home/Banner/banner-2.jpg') no-repeat center / cover;
    }
    & span {
      font-weight: 700;
      color: $secondary-color;
      text-transform: uppercase;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    justify-content: space-between;
    overflow: hidden;
    padding: 3rem 0;
    @media #{$info-screen-768} {
      display: block;
    }
  }

  &__content {
    position: absolute;
    top: 3rem;
    left: 3.5rem;
  }

  &__sub-title,
  &__sub-title--white {
    padding-bottom: 0.7rem;
    font-family: $font-primary;
    font-size: 1.8rem;
    color: $text-primary;
  }
  &__sub-title--white {
    color: $text-extra-dark;
    text-transform: capitalize;
  }
  &__title--black,
  &__title--white {
    font-family: $font-primary;
    font-size: 2.6rem;
    font-weight: bold;
    text-transform: uppercase;
    color: $text-primary;
  }
  &__title--white {
    color: $text-white-light;
  }
  &__type,
  &__type--white {
    padding-bottom: 2rem;
    font-family: $font-primary;
    font-size: 2.6rem;
    text-transform: capitalize;
    color: $text-primary;
  }
  &__type--white {
    color: $text-white-light;
  }
  &__description,
  &__description--white {
    font-family: $font-primary;
    font-size: 1.4rem;
    color: $text-semi-light;
  }
  &__description--white {
    color: $text-white-light;
    text-transform: capitalize;
  }
}
</style>