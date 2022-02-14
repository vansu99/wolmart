<template>
  <div class="rating__container">
    <RatingStar :star="star" />
    <a class="rating__description">({{ review }} Bình luận)</a>
  </div>
</template>

<script>
import RatingStar from '@/components/RatingStar/RatingStar';
export default {
  components: { RatingStar },
  props: {
    star: Number,
    review: Number,
  },
};
</script>

<style lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/mixins';
.rating {
  &__container {
    @include textClamp();
  }
  &__description {
    font-size: 1.2rem;
    font-family: $font-primary;
    text-transform: capitalize;
    color: $text-light;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: $hover-color;
    }
  }
}
</style>