<template>
  <div class="product-detail">
    <div class="container">
      <div class="product-detail__container">
        <div class="product-detail__left">
          <Product :product="product" />
          <DescriptionTabs :product="product" :star="star" :review="review" />
          <RelatedProducts :productList="productList" :star="star" :review="review" />
        </div>
        <div class="product-detail__right">
          <Sidebar :productList="productList" :star="star" :review="review" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categoryApis, productApis } from '@/apis';
import Product from './components/Product/Product';
import DescriptionTabs from './components/DescriptionTabs/DescriptionTabs';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import Sidebar from './components/Sidebar/Sidebar';
export default {
  name: 'Detail',
  data() {
    return {
      star: 3,
      review: 13,
      product: {},
      productList: [],
    };
  },
  components: {
    Product,
    DescriptionTabs,
    RelatedProducts,
    Sidebar,
  },
  created() {
    this.getProductByID();
  },
  methods: {
    async getProductByID() {
      // call API to get product by product ID
      try {
        const productID = Number(this.$route.params.productId);
        const productData = await productApis.getProductDetail(productID);
        if (productData.status === 200) {
          this.product = productData.data;
          // call API to get product by category ID
          await this.getProductList(this.product.category_id, this.product.id);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getProductList(categoryID, productID) {
      // call API to get products that belong to same category but have different ID from the original productID
      try {
        const productListData = await categoryApis.getProductListBaseOnCategory(categoryID);
        if (productListData.status === 200) {
          this.productList = productListData.data.filter((item) => item.id !== productID);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  padding-top: 4rem;
  padding-bottom: 4rem;
  &__container {
    display: grid;
    grid-template-columns: 9fr 3fr;
    gap: 3rem;
  }
}
</style>
