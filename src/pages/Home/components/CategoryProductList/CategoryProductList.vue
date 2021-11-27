<template>
  <div :class="category.slug">
    <div class="category">
      <div class="container">
        <div class="category__top">
          <h2 class="section__title">{{ category.name }}</h2>
          <router-link
            :to="{
              name: 'Products',
              params: { slug: convertSlug(category.name), categoryId: category.id },
            }"
            ><div>More Products</div>
            <i class="fas fa-long-arrow-alt-right"></i>
          </router-link>
        </div>
        <hr class="section__divider" />
        <div class="category__content">
          <div class="sidebar-banner">
            <div class="sidebar-banner__content">
              <div class="sidebar-banner__subtitle">weekend sale</div>
              <hr class="sidebar-banner__divider" />
              <div class="sidebar-banner__title">new arrivals</div>
              <div class="sidebar-banner__type">collection</div>
              <div class="sidebar-banner__link">shop now</div>
            </div>
          </div>
          <div class="product-list">
            <Product
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
  </div>
</template>

<script>
import mixins from '@/mixins';
import { categoryApis } from '@/apis/';
import Product from '@/components/Product/ProductHome';

export default {
  name: 'CategoryProductList',
  mixins: [mixins],
  data() {
    return {
      products: [],
      star: 3,
      review: 12,
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
        const productData = await categoryApis.getProductListBaseOnCategory(this.category.id);
        if (productData.status === 200) {
          this.products = productData.data;
        }
      } catch {
        console.log('getProducts error!!!');
      }
    },
  },
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped>
.category {
  padding-top: 1.5rem;
  padding-bottom: 3rem;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & a {
      justify-content: flex-end;
      @include flexCenter();
      font-family: $font-primary;
      font-size: 1.4rem;
      font-weight: 600;
      text-decoration: none;
      color: $text-primary;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      & i {
        margin: 0.5rem;
        font-size: 1.4rem;
      }
      &:hover {
        color: $bg-facebook;
        &:hover i {
          color: $bg-facebook;
        }
      }
    }
  }
  &__content {
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-gap: 2rem;
  }
}
.sidebar-banner {
  height: 100%;
  background: url('../../../../assets/images/Home/CategoryProductList/banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $bg-second;
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
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: $text-primary;
  }
  &__type {
    padding-bottom: 1.9rem;
    font-family: $font-primary;
    font-size: 3rem;
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
}
</style>
