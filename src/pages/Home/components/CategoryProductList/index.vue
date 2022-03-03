<template>
  <div class="category container">
    <template v-if="isShow">
      <div class="container">
        <skeleton :count="6" :category="true" />
      </div>
    </template>
    <div v-else :class="category.slug">
      <div class="category__top">
        <div class="category__title">
          <h2>{{ category.name }}</h2>
        </div>
        <router-link
          :to="{
            name: 'Products',
            params: { slug: convertSlug(category.name), categoryId: category.id },
          }"
          ><div>Xem thêm</div>
          <i class="fas fa-long-arrow-alt-right"></i>
        </router-link>
      </div>
      <hr class="section__divider" />
      <div class="category__content">
        <div class="sidebar-banner">
          <div class="sidebar-banner__content">
            <div class="sidebar-banner__subtitle">Tuần lễ giảm giá</div>
            <hr class="sidebar-banner__divider" />
            <div class="sidebar-banner__title">Sản phẩm mới</div>
            <div class="sidebar-banner__type">Xu hướng</div>
            <div class="sidebar-banner__link">Mua sắm ngay</div>
          </div>
        </div>
        <div class="product-list">
          <product
            v-for="product in discountProduct"
            :key="`home-${product.id}`"
            :product="product"
            :star="star"
            :review="review"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '@/mixins';
import { categoryApis } from '@/apis/';
import Product from './ProductHome';
import Skeleton from '../HomeSkeleton.vue';
export default {
  name: 'CategoryProductList',
  mixins: [mixins],
  data() {
    return {
      products: [],
      star: 3,
      review: 12,
      isShow: false,
    };
  },
  props: {
    category: {},
  },
  created() {
    this.getProducts();
  },
  computed: {
    discountProduct() {
      return this.products.filter((product) => product.discount >= 20);
    },
  },
  methods: {
    async getProducts() {
      // call API to get product list
      try {
        this.isShow = true;
        const productData = await categoryApis.getProductListBaseOnCategory(
          this.category.id
        );
        if (productData.status === 200) {
          this.products = productData.data;
        }
      } catch {
        console.log('Something went wrong');
      } finally {
        this.isShow = false;
      }
    },
  },
  components: {
    Product,
    Skeleton,
  },
};
</script>

<style lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/mixins';

.category {
  padding-top: 5rem;
  padding-bottom: 3rem;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 1.5rem;

    & a {
      justify-content: flex-end;
      @include flexCenter();
      flex-shrink: 0;
      font-family: $font-primary;
      font-size: 1.5rem;
      font-weight: 600;
      text-decoration: none;
      color: $text-primary;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      & i {
        margin-left: 0.7rem;
        font-size: 1.5rem;
      }

      &:hover {
        color: $bg-facebook;
        &:hover i {
          color: $bg-facebook;
        }
      }
    }
  }
  &__title {
    h2 {
      font-size: 2.4rem;
      color: #333;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-gap: 2rem;
    @media #{$info-screen-1200} {
      grid-template-columns: 1fr 3fr;
    }
    @media #{$info-screen-992} {
      grid-template-columns: 1fr 2fr;
    }

    @media #{$info-screen-575} {
      grid-template-columns: 1fr;
    }
  }
}
.sidebar-banner {
  min-width: 23rem;
  height: auto;
  background: $bg-second
    url('../../../../assets/images/Home/CategoryProductList/banner_1.jpg') no-repeat
    center / cover;
  border-radius: 0.5rem;

  &__content {
    padding: 3.7rem;
  }

  &__subtitle {
    font-family: $font-primary;
    font-size: 1.8rem;
    text-transform: capitalize;
    color: $text-primary;
  }

  &__divider {
    margin: 0.5rem 0;
    width: 3.5rem;
    border-color: $text-primary;
    border-bottom-width: 0.3rem;
    border-right-width: 0;
    border-left-width: 0;
  }

  &__title {
    font-family: $font-primary;
    font-size: 2.4rem;
    font-weight: bold;
    text-transform: uppercase;
    color: $text-primary;
  }

  &__type {
    padding-bottom: 2.4rem;
    font-family: $font-primary;
    font-size: 2rem;
    text-transform: capitalize;
    color: $text-primary;
  }

  &__link {
    padding: 1rem 1.8rem;
    width: fit-content;

    font-family: $font-primary;
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1;

    border: 0.2rem solid $text-primary;
    border-radius: 0.3rem;
    color: $text-primary;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: $text-white-light;
      background-color: $bg-second;
    }
  }
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  width: 100%;
  margin-right: -0.7rem;
  @media #{$info-screen-1200} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media #{$info-screen-992} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media #{$info-screen-375} {
    grid-template-columns: 1fr;
  }
}
</style>
