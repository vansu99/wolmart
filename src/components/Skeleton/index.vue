<template>
  <div class="skeleton" :class="{ category: category }">
    <div class="skeleton-title">
      <vue-skeleton-loader width="100%" height="60px" rounded />
    </div>
    <div class="skeleton-list">
      <div class="skeleton-item" v-for="(item, index) in count" :key="index">
        <vue-skeleton-loader width="100%" height="160px" style="margin-bottom: 15px" rounded />
        <vue-skeleton-loader width="100%" height="15px" style="margin-bottom: 15px" rounded />
        <vue-skeleton-loader width="100%" height="15px" rounded />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSkeleton',
  props: { count: Number, category: Boolean },
};
</script>

<style lang="scss" scoped>
.skeleton {
  &-title {
    width: 40rem;
    margin: 3rem auto;
    display: none;
    @media #{$info-screen-575} {
      width: 30rem;
    }
    @media #{$info-screen-375} {
      width: 100%;
    }
  }
  &.category {
    & > div:nth-child(1) {
      display: block;
    }
    .skeleton-item {
      width: calc(100% / 6 - 1.5rem);
      & div:nth-child(2),
      div:nth-child(3) {
        display: none;
      }
      @media #{$info-screen-1200} {
        width: calc(100% / 5 - 1.5rem);
      }
      @media #{$info-screen-992} {
        width: calc(100% / 4 - 1.5rem);
      }
      @media #{$info-screen-768} {
        width: calc(100% / 3 - 1.5rem);
      }
      @media #{$info-screen-575} {
        width: calc(100% / 2 - 1.5rem);
      }
      @media #{$info-screen-375} {
        width: calc(100% / 1 - 1.5rem);
      }
    }
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    margin-right: -1.5rem;
  }
  &-item {
    background-color: #fff;
    width: calc(25% - 1.5rem);
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    &.category {
      width: calc(100% / 6 - 1.5rem);
      & div:nth-child(3) {
        display: none;
      }
    }
    @media #{$info-screen-1200} {
      width: calc(100% / 3 - 1.5rem);
    }
    @media #{$info-screen-992} {
      width: calc(100% / 2 - 1.5rem);
    }
    @media #{$info-screen-375} {
      width: calc(100% / 1 - 1.5rem);
    }
  }
}
</style>
