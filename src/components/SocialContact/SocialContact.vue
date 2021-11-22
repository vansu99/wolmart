<template>
  <div class="social-contact">
    <div class="facebook">
      <a href=""><i class="fab fa-facebook-f"></i></a>
    </div>
    <div class="twitter">
      <i class="fab fa-twitter"></i>
    </div>
    <div class="pinterest">
      <i class="fab fa-pinterest-p"></i>
    </div>
    <div class="whatsapp">
      <i class="fab fa-whatsapp"></i>
    </div>
    <div class="linkedin">
      <i class="fab fa-linkedin-in"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.social-contact {
  display: flex;
  & div {
    @include flexCenter;
    margin-right: 0.8rem;
    width: 3.2rem;
    height: 3.2rem;
    border: 1px solid $bg-contrary-semi-dark;
    border-radius: 50%;
    transition: all 0.2s ease-in;
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
    &:hover i {
      color: $bg-contrary;
    }
    & a {
    }
    & i {
      font-size: 1.5rem;
      color: $bg-second-light;
    }
  }
}
</style>