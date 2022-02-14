<template>
  <div class="skeleton">
    <div class="skeleton__list">
      <div class="skeleton__item" v-for="i in 3" :key="i">
        <div class="skeleton__left">
          <vue-skeleton-loader width="100px" height="120px" rounded />
        </div>
        <div class="skeleton__content">
          <div class="skeleton__name">
            <vue-skeleton-loader width="100%" height="50px" rounded />
          </div>
          <vue-skeleton-loader width="100%" height="15px" rounded />
          <div class="skeleton__price">
            <vue-skeleton-loader width="100%" height="25px" rounded />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSkeleton',
  props: { count: Number, category: Boolean, row3: Boolean },
};
</script>

<style lang="scss" scoped>
.skeleton {
  &__item {
    display: flex;
    padding: 1rem 0;
    gap: 2rem;
  }
  &__left {
  }

  &__content {
    width: 100%;
  }
  &__name {
    margin-bottom: 1.5rem;
  }
  &__price {
    margin-top: 0.8rem;
  }
}
</style>