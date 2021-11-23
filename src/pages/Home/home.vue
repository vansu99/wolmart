<template>
  <div class="home">
    <Banner />
    <TopCategories />
    <Clothing v-for="item in categories" :key="item.id" :category="item" />
    <Pagination></Pagination>
    <Brand />
  </div>
</template>

<script>
import { categoryApis } from '@/apis';
import Nprogress from 'nprogress';
import TopCategories from './components/TopCategories/TopCategories';
import Brand from './components/Brand/Brand';
import Banner from './components/Banner/Banner';
import Clothing from './components/Clothing/Clothing';
import Pagination from '@/components/Pagination/Pagination.vue';
export default {
  name: 'home',
  data() {
    return {};
  },
  components: {
    Pagination,
    TopCategories,
    Brand,
    Banner,
    Clothing,
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
        Nprogress.start();
        const categoryData = await categoryApis.getCategoryList();
        if (categoryData.status === 200) {
          await this.$store.dispatch('category/getCategories', categoryData.data);
        }
      } catch {
        console.log('error!!!');
      } finally {
        Nprogress.done();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
