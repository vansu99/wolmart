<template>
  <div class="category-list">
    <div class="category-list-title">
      <h4>Danh mục sản phẩm</h4>
    </div>
    <div class="category-list-wrap">
      <router-link
        :to="{ name: 'Products', params: { slug: convertSlug(item.name), categoryId: item.id } }"
        class="category-list-link"
        v-for="item in categories"
        :key="item.id"
        >{{ item.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
import mixins from '@/mixins';
import { categoryApis } from '@/apis';
export default {
  name: 'category-list',
  mixins: [mixins],
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const categoryData = await categoryApis.getCategoryList();
        if (categoryData.status === 200) {
          this.categories = [...categoryData.data];
        }
      } catch(e) {
        throw new Error("Something went wrong")
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.category-list {
  width: 100%;
  background-color: #fff;
  margin-bottom: 1.7rem;
  &-title {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    font-weight: 500;
    border-bottom: 1px solid #e5e5e4;
    h4 {
      font-size: 1.5rem;
      color: $text-primary;
      text-transform: capitalize;
    }
  }
  &-wrap {
    padding: 2.5rem 0.8rem 1.7rem 1.5rem;
  }
  &-link {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 1.8rem;
    color: $text-primary;
    transition: color 0.2s ease-in;
    cursor: pointer;
    &:hover {
      color: $bg-primary;
    }
    &.router-link-exact-active {
      color: $bg-primary;
      font-weight: 500;
    }
  }
}
</style>
