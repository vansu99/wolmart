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
    <product-list
      v-else
      v-for="item in categories"
      :key="item.id"
      :category="item"
      @showCartPreview="showCartPreview"
    />
    <brand />
    <modal-cart><cart-product :product="cart_product" /></modal-cart>
  </div>
</template>

<script>
import { categoryApis } from '@/apis';
import { CART_INFO } from '@/constants';
import { setStorage } from '@/utils/storageWeb';
import { mapGetters } from 'vuex';
import Brand from './components/Brand/Brand';
import Banner from './components/Banner/Banner';
import CategorySkeleton from '@/components/Skeleton';
import CategoryList from './components/TopCategories';
import ProductSkeleton from './components/HomeSkeleton';
import ProductList from './components/CategoryProductList';
import ModalCart from '@/components/Modal/ModalCart';
import CartProduct from '@/components/Product/ProductCart';

export default {
  name: 'HomePage',
  data() {
    return {
      isShow: false,
      cart_product: {},
    };
  },
  components: {
    Brand,
    Banner,
    ProductList,
    CategoryList,
    CategorySkeleton,
    ProductSkeleton,
    ModalCart,
    CartProduct,
  },
  computed: mapGetters({
    categories: 'category/categories',
    cart: 'auth/cart'
  }),
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
      } catch (e) {
        throw new Error('Something went wrong.');
      } finally {
        this.isShow = false;
      }
    },
    showCartPreview(product) {
      this.$store.dispatch('auth/addProductToCart', product);
      setStorage(CART_INFO, this.cart);
      this.cart_product = product;
      this.$modal.show('cart');
    },
  },
};
</script>
