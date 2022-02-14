<template>
  <div class="home-skeleton">
    <div class="home-skeleton__top">
      <div class="home-skeleton__title">
        <vue-skeleton-loader width="100%" height="50px" rounded />
      </div>
      <div><vue-skeleton-loader width="100px" height="30px" rounded /></div>
    </div>
    <div class="home-skeleton__bottom">
      <div class="home-skeleton__sidebar">
        <vue-skeleton-loader width="100%" height="100%" rounded />
      </div>
      <div class="home-skeleton__content">
        <skeleton :count="8" />
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from '@/components/Skeleton';

export default {
  name: 'HomeSkeleton',
  components: { Skeleton },
};
</script>

<style lang="scss" scoped>
.home-skeleton {
  &__top {
    margin: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  &__title {
    width: 40rem;
  }
  &__bottom {
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-gap: 2rem;
    @media #{$info-screen-1200} {
      grid-template-columns: 1fr 3fr;
    }
    @media #{$info-screen-992} {
      grid-template-columns: 1fr 2fr;
    }
    @media #{$info-screen-575} {
      grid-template-columns: 1fr;
    }
  }
  &__sidebar {
    @media #{$info-screen-575} {
      height: 30rem;
    }
  }
}
</style>
