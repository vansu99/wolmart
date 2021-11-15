<template>
  <section class="product-list">
    <div class="container">
      <div class="product-list-wrapper">
        <div class="product-list-left">
          <category-list />
        </div>
        <div class="product-list-right">
          <product-filter />
          <product-list :products="products" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mixins from '@/mixins';
import Nprogress from 'nprogress';
import { categoryApis } from '@/apis';
import ProductFilter from './components/product-filter';
import CategoryList from '@/pages/Products/components/category-list';
import ProductList from '@/pages/Products/components/product-list';
export default {
  name: 'products',
  components: {
    ProductList,
    CategoryList,
    ProductFilter,
  },
  mixins: [mixins],
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.loadCategoryById();
  },
  watch: {
    '$route.query'() {
      this.loadCategoryById();
    },
  },
  methods: {
    async loadCategoryById() {
      try {
        Nprogress.start();
        const id = this.$route.params.categoryId;
        const query = this.$route.query;
        const response = await categoryApis.getProductListBaseOnCategory(id, query);
        if (response.status === 200) {
          this.products = [...response.data];
          await this.$store.dispatch('category/getCategoryById', id);
        }
      } catch (e) {
        console.log(e);
      } finally {
        Nprogress.done();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './products.scss';
</style>
