<template>
  <section class="product-list">
    <div class="container">
      <div class="product-list-wrapper">
        <div class="product-list-left">
          <category-list />
        </div>
        <div class="product-list-right">
          <product-filter />
          <template v-if="isShow">
            <custom-skeleton :count="20" />
          </template>
          <template v-else>
            <product-list :products="products" />
          </template>
        </div>
      </div>
    </div>
    <Pagination
      :pagination="pagination"
      v-on:onChangePaginate="loadCategoryById"
    ></Pagination>
  </section>
</template>

<script>
import mixins from '@/mixins';
import { categoryApis } from '@/apis';
import CustomSkeleton from '@/components/Skeleton';
import ProductFilter from './components/product-filter';
import CategoryList from '@/pages/Products/components/category-list';
import ProductList from '@/pages/Products/components/product-list';
import Pagination from '@/components/Pagination/Pagination.vue';

export default {
  name: 'products',
  components: {
    Pagination,
    CustomSkeleton,
    ProductList,
    CategoryList,
    ProductFilter,
  },
  mixins: [mixins],
  data() {
    return {
      products: [],
      showListProduct: [],
      pagination: {},
      isShow: false,
    };
  },
  async created() {
    await this.loadCategoryById();
  },
  watch: {
    '$route.query'() {
      this.loadCategoryById();
    },
  },
  methods: {
    async loadCategoryById(currentPage) {
      try {
        this.isShow = true;
        const id = this.$route.params.categoryId;
        const query = { ...this.$route.query, page: currentPage || this.$route.query.page };
        const response = await categoryApis.getProductListBaseOnCategory(id, query);

        if (response.status === 200) {
          this.products = [...response.data];
          this.pagination = response.pagination;
          await this.$store.dispatch('category/getCategoryById', id);
        }
      } catch (e) {
        throw new Error('Something went wrong');
      } finally {
        this.isShow = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './products.scss';
</style>
