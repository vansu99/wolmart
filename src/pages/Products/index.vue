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
  </section>
</template>

<script>
import mixins from '@/mixins';
import Nprogress from 'nprogress';
import { categoryApis } from '@/apis';
import CustomSkeleton from '@/components/Skeleton';
import ProductFilter from './components/product-filter';
import CategoryList from '@/pages/Products/components/category-list';
import ProductList from '@/pages/Products/components/product-list';
export default {
  name: 'products',
  components: {
    CustomSkeleton,
    ProductList,
    CategoryList,
    ProductFilter,
  },
  mixins: [mixins],
  data() {
    return {
      products: [],
      isShow: false,
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
        this.isShow = true;
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
        this.isShow = false;
        Nprogress.done();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './products.scss';
</style>
