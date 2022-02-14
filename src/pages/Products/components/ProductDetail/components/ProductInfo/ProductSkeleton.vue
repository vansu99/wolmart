<template>
  <div class="product">
    <div class="product__container">
      <div class="product__left">
        <vue-skeleton-loader width="100%" height="500px" rounded />
        <div class="product__other-img">
          <vue-skeleton-loader
            v-for="i in 4"
            :key="i"
            width="100%"
            height="120px"
            rounded
          />
        </div>
        <br />
      </div>
      <div class="product__right">
        <div class="product__name">
          <vue-skeleton-loader width="100%" height="70px" rounded />
        </div>
        <div class="product__desc">
          <vue-skeleton-loader width="100%" height="40px" rounded />
        </div>
        <hr class="hr-divider" />
        <div class="product__price">
          <vue-skeleton-loader width="100%" height="40px" rounded />
        </div>
        <hr class="hr-divider" />
        <div class="product__actions">
          <vue-skeleton-loader width="100%" height="40px" rounded />
        </div>
        <div class="product__links">
          <vue-skeleton-loader width="100%" height="30px" rounded />
        </div>
      </div>
    </div>
    <div class="skeleton__tabs">
      <ul class="skeleton__tab-list">
        <vue-skeleton-loader width="200px" height="50px" rounded />
        <vue-skeleton-loader width="200px" height="50px" rounded />
        <vue-skeleton-loader width="200px" height="50px" rounded />
      </ul>
      <vue-skeleton-loader width="100%" height="300px" rounded />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSkeleton',
};
</script>

<style lang="scss" scoped>
@import 'Product';
.product__other-img {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.skeleton {
  &__tab-list {
    display: flex;
    margin: 5rem 0 3rem;
    & div {
      margin-right: 4rem;
    }
  }
  &__product-list {
    margin: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  &__title {
    width: 40rem;
  }
}
</style>
