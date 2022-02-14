<template>
  <div class="home">
    <banner />
    <template v-if="isShow">
      <div class="container">
        <category-skeleton :count="6" :category="true" />
      </div>
    </template>
    <category-list v-else />
    <template v-if="isShow">
      <div class="container">
        <product-skeleton />
      </div>
    </template>
    <product-list v-else v-for="item in categories" :key="item.id" :category="item" />
    <brand />
  </div>
</template>

<script>
import { categoryApis } from '@/apis';
import Brand from './components/Brand/Brand';
import Banner from './components/Banner/Banner';
import CategorySkeleton from '@/components/Skeleton';
import CategoryList from './components/TopCategories';
import ProductSkeleton from './components/HomeSkeleton';
import ProductList from './components/CategoryProductList';

export default {
  name: 'HomePage',
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    Brand,
    Banner,
    ProductList,
    CategoryList,
    CategorySkeleton,
    ProductSkeleton,
  },
  computed: {
    categories() {
      return this.$store.getters['category/categories'];
    },
  },
  created() {
    this.getCategories();
  },
  methods: {
    // call API to get category list
    async getCategories() {
      try {
        this.isShow = true;
        const categoryData = await categoryApis.getCategoryList();
        if (categoryData.status === 200) {
          await this.$store.dispatch('category/getCategories', categoryData.data);
        }
      } catch(e) {
        throw new Error("Something went wrong.")
      } finally {
        this.isShow = false;
      }
    },
  },
};
</script>
