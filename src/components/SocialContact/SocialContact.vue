<template>
  <div class="social-contact">
    <div class="facebook">
      <a href=""><img src="@/assets/images/Shared/social/facebook.svg" alt="facebook" /></a>
    </div>
    <div class="twitter">
      <a href=""><img src="@/assets/images/Shared/social/twitter.svg" alt="twitter" /></a>
    </div>
    <div class="pinterest">
      <a href=""><img src="@/assets/images/Shared/social/pinterest.svg" alt="pinterest" /></a>
    </div>
    <div class="whatsapp">
      <a href=""><img src="@/assets/images/Shared/social/whatsapp.svg" alt="whatsapp" /></a>
    </div>
    <div class="linkedin">
      <a href=""><img src="@/assets/images/Shared/social/linkedin.svg" alt="linkedin" /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/mixins';
.social-contact {
  display: flex;
  & div {
    margin-right: 0.8rem;
    width: 3.2rem;
    height: 3.2rem;
    border: 1px solid $bg-contrary-semi-dark;
    border-radius: 50%;
    transition: all 0.4s ease-in-out;
    text-align: center;
    &:hover.facebook {
      @include hoverIcon($bg-facebook);
    }
    &:hover.twitter {
      @include hoverIcon($bg-twitter);
    }
    &:hover.pinterest {
      @include hoverIcon($bg-pinterest);
    }
    &:hover.whatsapp {
      @include hoverIcon($bg-whatsapp);
    }
    &:hover.linkedin {
      @include hoverIcon($bg-linkedin);
    }
    &:hover img {
      filter: $filter-icon-hover;
    }
    & a {
      @include flexCenter;
      height: 100%;
      width: 100%;
    }
    & img {
      width: 1.5rem;
      height: 1.5rem;
      filter: $filter-icon-disabled;
    }
  }
}
</style>
