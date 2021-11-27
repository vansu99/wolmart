<template>
  <span
    ><i v-show="left" class="fas fa-chevron-left left"></i
    ><i v-show="left" class="fas fa-chevron-left left"></i>
    <slot />
    <i v-show="right" class="fas fa-chevron-right right"></i
    ><i v-show="right" class="fas fa-chevron-right right"></i>
  </span>
</template>

<script>
export default {
  props: { left: Boolean, right: Boolean },
};
</script>

<style lang="scss" scoped>
.button--opacity {
  display: inline-block;
  padding: 1.3rem 2.8rem;
  border: 2px solid $bg-second;
  border-radius: 0.3rem;
  background-color: $bg-second;
  font-family: $font-primary;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
  & i {
    font-size: 1.2rem;
    transition: transform 0.3s ease-in-out;
    &:nth-child(3) {
      margin-left: 0.5rem;
    }
    &:nth-child(2) {
      margin-right: 0.5rem;
    }
  }
  &:hover .right {
    transform: translateX(1rem);
  }
  &:hover .left {
    transform: translateX(-1rem);
  }
}
.button--fading {
  display: inline-block;
  padding: 1rem 1.8rem;
  width: 100%;
  border: 0.2rem solid #ccc;
  border-radius: 0.3rem;
  background: transparent;
  font-family: $font-primary;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  color: $text-primary;
  line-height: 1;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: $text-white-light;
    border: 0.2rem solid $bg-second;
    background-color: $bg-second;
  }
}
</style>