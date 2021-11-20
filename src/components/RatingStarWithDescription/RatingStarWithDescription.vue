<template>
  <div class="rating__container">
    <RatingStar :star="star" />
    <a class="rating__desription">({{ review }} reviews)</a>
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
.rating {
  flex-shrink: 0;
  &__desription {
    font-size: 1.2rem;
    font-family: $font-primary;
    color: $text-light;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: $hover-color;
    }
  }
}
</style>