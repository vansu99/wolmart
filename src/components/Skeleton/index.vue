<template>
  <div class="skeleton">
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
  props: ['count'],
};
</script>

<style lang="scss" scoped>
.skeleton {
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
  }
}
</style>
