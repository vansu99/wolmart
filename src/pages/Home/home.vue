<template>
  <div class="home">
    <Banner />
    <TopCategories :categories="categories" />
    <Clothing v-for="(item, index) in categories" :key="index" :category="item" />
    <Brand />
  </div>
</template>

<script>
import axios from '@/utils/request';
import TopCategories from './components/TopCategories/TopCategories';
import Brand from './components/Brand/Brand';
import Banner from './components/Banner/Banner';
import Clothing from './components/Clothing/Clothing';
export default {
  name: 'home',
  data() {
    return {
      categories: []
    };
  },
  components: {
    TopCategories,
    Brand,
    Banner,
    Clothing,
  },
  created() {
    this.callAPI();
  },
  methods: {
    async callAPI() {
      this.isLoading = true;
      const data = (await axios.get('/home/categories')).data;
      this.categories = data;
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/index';
</style>
