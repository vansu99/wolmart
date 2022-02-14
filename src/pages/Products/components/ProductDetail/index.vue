<template>
  <transition name="fadeIn">
    <div class="product-detail">
      <div class="container">
        <div class="product-detail__container">
          <div class="product-detail__left">
            <ProductInfo :product="product" />
            <DescriptionTabs :product="product" :star="star" :review="review" />
            <RelatedProducts :productList="productList" :star="star" :review="review" />
            <button class="sidebar__open-btn" @click="hide = !hide" v-show="hide">
              <i class="fas fa-angle-left"></i>
            </button>
          </div>

          <div class="product-detail__right" :class="hide ? 'hide' : 'show'">
            <Sidebar :productList="productList" :star="star" :review="review" />
            <button class="sidebar__close-btn" @click="hide = !hide">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar';
import { categoryApis, productApis } from '@/apis';
import ProductInfo from './components/ProductInfo';
import DescriptionTabs from './components/DescriptionTabs';
import RelatedProducts from './components/RelatedProducts';

export default {
  name: 'ProductDetail',
  data() {
    return {
      star: 3,
      review: 13,
      product: {},
      productList: [],
      hide: false,
    };
  },
  components: {
    ProductInfo,
    DescriptionTabs,
    RelatedProducts,
    Sidebar,
  },
  created() {
    this.getProductByID();
  },
  methods: {
    // call API to get product by product ID
    async getProductByID() {
      try {
        const productID = Number(this.$route.params.productId);
        const productData = await productApis.getProductDetail(productID);
        if (productData.status === 200) {
          this.product = productData.data;
          // call API to get product by category ID
          await this.getProductList(this.product.category_id, this.product.id);
        }
      } catch (e) {
        throw new Error('Something went wrong.');
      }
    },
    // call API to get products that belong to same category but have different ID from the original productID
    async getProductList(categoryID, productID) {
      try {
        const productListData = await categoryApis.getProductListBaseOnCategory(
          categoryID
        );
        if (productListData.status === 200) {
          this.productList = productListData.data.filter((item) => item.id !== productID);
        }
      } catch (e) {
        throw new Error('Something went wrong.');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  padding: 4rem 0;

  &__container {
    display: flex;
    gap: 3rem;
  }
  &__left {
    @media #{$info-screen-768} {
      width: 100%;
    }
  }
  &__right {
    flex-shrink: 0;
    overflow: auto;
    transition: all 0.5s ease-in-out;
    @media #{$info-screen-992} {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      background-color: rgba(0, 0, 0, 0.4);
      &.hide {
        display: none;
      }
      &.show {
        display: flex;
      }
    }

    .sidebar__close-btn {
      display: none;
      position: fixed;
      top: 3rem;
      left: 3rem;
      font-size: 3rem;
      color: #ccc;
      transition: transform 0.2s ease-in-out;
      @media #{$info-screen-992} {
        display: block;
      }
      &:hover {
        transform: rotate(85deg);
      }
    }
  }
  .sidebar__open-btn {
    @media #{$info-screen-992} {
      display: block;
      position: fixed;
      top: 30%;
      right: 0;
      padding: 0.7rem 1.7rem;
      border-top-left-radius: 0.3rem;
      border-bottom-left-radius: 0.3rem;
      background-color: #222;
      color: #fff;
      font-size: 2rem;
      opacity: 0.6;
      z-index: 3;
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
