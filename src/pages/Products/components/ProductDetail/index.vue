<template>
  <transition name="fadeIn">
    <div class="product-detail container">
      <div class="product-detail__container">
        <div class="product-detail__left">
          <template v-if="isProductShow">
            <product-skeleton style="width: 100%" />
          </template>
          <template v-else>
            <ProductInfo :product="product" />
            <DescriptionTabs :product="product" :star="star" :review="review" />
          </template>
          <RelatedProducts
            :isLoading="isProductListShow"
            :productList="productList"
            :star="star"
            :review="review"
          />
          <button class="sidebar__open-btn" @click="hide = !hide" v-show="hide">
            <i class="fas fa-angle-left"></i>
          </button>
        </div>
        <div class="product-detail__right" :class="hide ? 'hide' : 'show'">
          <Sidebar
            :isLoading="isProductListShow"
            :productList="productList"
            :star="star"
            :review="review"
          />
          <button class="sidebar__close-btn" @click="hide = !hide">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar';
import { categoryApis, productApis } from '@/apis';
import ProductInfo from './components/ProductInfo';
import ProductSkeleton from './components/ProductInfo/ProductSkeleton';
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
      isProductShow: false,
      isProductListShow: true,
    };
  },
  components: {
    ProductInfo,
    DescriptionTabs,
    RelatedProducts,
    Sidebar,
    ProductSkeleton,
  },
  created() {
    this.getProductByID();
  },
  methods: {
    // call API to get product by product ID
    async getProductByID() {
      try {
        this.isProductShow = true;
        const productID = Number(this.$route.params.productId);
        const productData = await productApis.getProductDetail(productID);
        if (productData.status === 200) {
          this.product = productData.data;
          // call API to get product by category ID
          await this.getProductList(this.product.category_id, this.product.id);
        }
      } catch (e) {
        throw new Error('Something went wrong.');
      } finally {
        this.isProductShow = false;
      }
    },
    // call API to get products that belong to same category but have different ID from the original productID
    async getProductList(categoryID, productID) {
      try {
        this.isProductListShow = true;
        const productListData = await categoryApis.getProductListBaseOnCategory(
          categoryID
        );
        if (productListData.status === 200) {
          this.productList = productListData.data.filter((item) => item.id !== productID);
        }
      } catch (e) {
        throw new Error('Something went wrong.');
      } finally {
        this.isProductListShow = false;
      }
    },
  },
  watch: {
    '$route.query'() {
      this.getProductByID();
      this.getProductList();
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
    width: 100%;
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
