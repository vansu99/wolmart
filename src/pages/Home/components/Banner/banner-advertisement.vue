<template>
  <div class="advertisement-list">
    <div class="advertisement-item">
      <div class="advertisement__content">
        <div class="advertisement__sub-title">Get up to <span>20% off</span></div>
        <div class="advertisement__title">sports oufits</div>
        <div class="advertisement__type">collection</div>
        <div class="advertisement__description">Starting at <span>$170.00</span></div>
      </div>
      <img src="@/assets/images/Home/Banner/banner-1.jpg" alt="banner" />
    </div>
    <div class="advertisement-item">
      <div class="advertisement__content white">
        <div class="advertisement__sub-title--white capitalize">new arrivals</div>
        <div class="advertisement__title--white">ACCESSORIES</div>
        <div class="advertisement__type--white">collection</div>
        <div class="advertisement__description--white capitalize">
          only from <span>$90.00</span>
        </div>
      </div>
      <img src="@/assets/images/Home/Banner/banner-2.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.advertisement {
  &-item {
    position: relative;
    overflow: hidden;
    background-color: $bg-contrary-dark;
    border-radius: 0.3rem;
    & span {
      font-weight: 700;
      color: $secondary-color;
      text-transform: uppercase;
    }
  }

  &-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    justify-content: space-between;
    overflow: hidden;
    padding: 3rem 0;
  }
  & img {
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
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
  &__title,
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