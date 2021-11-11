<template>
  <div class="home">
    <Banner />
    <TopCategories :categories="categories" />
    <Clothing v-for="(item, index) in categories" :key="index" :category="item" />
    <Brand />
  </div>
</template>

<script>
import { categoryApis } from '@/apis/';
import Nprogress from 'nprogress';
import TopCategories from './components/TopCategories/TopCategories';
import Brand from './components/Brand/Brand';
import Banner from './components/Banner/Banner';
import Clothing from './components/Clothing/Clothing';
export default {
  name: 'home',
  data() {
    return {
      categories: [],
    };
  },
  components: {
    TopCategories,
    Brand,
    Banner,
    Clothing,
  },
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      // call API to get category list
      try {
        Nprogress.start();
        const categoryData = await categoryApis.getCategoryList();
        if (categoryData.status === 200) {
          this.categories = categoryData.data;
        }
      } catch {
        console.log('getCategories error!!!');
      } finally {
        Nprogress.done();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
