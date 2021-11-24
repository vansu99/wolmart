<template>
  <div class="product-filter">
    <span>Ưu tiên xem:</span>
    <div class="product-filter-list">
      <div
        class="product-filter-item"
        :class="{ active: isActive === 'asc' }"
        @click="sortProduct('asc')"
      >
        Giá thấp
      </div>
      <div
        class="product-filter-item"
        :class="{ active: isActive === 'desc' }"
        @click="sortProduct('desc')"
      >
        Giá cao
      </div>
      <div class="product-filter-item" :class="{ active: isActive === 'sale' }">Khuyến mãi</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-filter',
  data() {
    return {
      isActive: '',
    };
  },
  watch: {
    '$route.query': {
      handler(value) {
        this.isActive = value.sort || '';
      },
      immediate: true,
    },
  },
  methods: {
    async sortProduct(type) {
      //const path = this.$route.path.substring(1).split('/')[0];
      // const result =
      //   path.replace(path, this.$route.params.slug) + `/${this.$route.params.categoryId}`;
      switch (type) {
        case 'asc':
          this.isActive = 'asc';
          await this.$router.replace({
            query: {
              page: '1',
              sort: type,
            },
          });
          break;
        case 'desc':
          this.isActive = 'desc';
          await this.$router.replace({
            query: {
              page: '1',
              sort: type,
            },
          });
          break;
        default:
          return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-filter {
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  padding-top: 1.2rem;
  span {
    font-size: 1.4rem;
    margin-right: 1.5rem;
    color: $text-primary;
  }
  &-list {
    display: flex;
  }
  &-item {
    @include flexCenter;
    padding: 0 1.4rem;
    height: 2.8rem;
    font-size: 1.4rem;
    color: $text-primary;
    margin-right: 1.5rem;
    overflow: hidden;
    text-transform: uppercase;
    border-radius: 0.5rem;
    box-shadow: #63636333 0 2px 8px;
    cursor: pointer;
    background-color: #fff;
    transition: all 0.15s ease-in;
    &:hover,
    &.active {
      color: #fff;
      background-color: $bg-primary;
    }
  }
}
</style>
