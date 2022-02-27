<template>
  <span class="rating__stars" :star="`${star}.00`">
    <i class="fas fa-star check" v-for="n in star" :key="n"></i>
    <i class="fas fa-star" v-for="n in 5 - star" :key="n + 5"></i>
  </span>
</template>

<script>
export default {
  props: ['star'],
};
</script>

<style lang="scss" scoped>
.rating {
  &__stars {
    flex-shrink: 0;
    position: relative;
    width: fit-content;
    margin-right: 1rem;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover::after,
    &:hover::before {
      display: block;
      transition: all 0.3s ease-in-out;
      transform: translateY(-90%);
    }
    &:hover::before {
      transform: translateY(-130%);
    }
    &::after {
      content: attr(star);
      position: absolute;
      top: -1.6rem;
      left: 20%;
      z-index: 10;
      white-space: nowrap;
      font-size: 1.3rem;
      font-family: $font-primary;
      color: $text-white-light;
      background: $bg-second;
      padding: 1rem 0.7rem;
      border-radius: 0.3rem;
      display: none;
    }
    &::before {
      content: '';
      position: absolute;
      border-top: 1rem solid $bg-second;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      top: 0;
      left: 35%;
      display: none;
    }
    & i {
      font-size: 1.2rem;
      padding: 0 0.05rem;
      color: $star-uncheck;
      &.check {
        color: $star-checked;
      }
    }
  }
}
</style>