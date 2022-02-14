<template>
  <div class="sidebar">
    <div class="sidebar__slogan">
      <div class="slogan" v-for="(item, index) in bannerBoxes" :key="index">
        <i :class="item.image"></i>
        <div class="slogan__description">
          <div class="slogan__text">{{ item.text }}</div>
          <div class="slogan__sub-text">{{ item.subText }}</div>
        </div>
      </div>
    </div>
    <div class="sidebar__banner">
      <div class="banner">
        <div class="banner__img">
          <img src="@/assets/images/ProductDetail/banner-girl-smile.jpg" alt="" />
        </div>
        <div class="banner__content">
          <div class="banner__sales">
            <span class="banner__number">40</span>
            <div class="banner__unit">
              <div class="banner__percent">%</div>
              <div class="banner__state">Giảm</div>
            </div>
          </div>
          <div class="banner__text">Sale siêu khủng</div>
        </div>
      </div>
    </div>
    <div class="sidebar__widget">
      <div class="widget">
        <div class="widget__top">
          <h2 class="widget__title">Sản phẩm khác</h2>
        </div>
        <hr class="hr-divider" />
        <div class="widget__bottom">
          <template v-if="isLoading"><sidebar-product-skeleton /></template>
          <template v-else>
            <div class="product-list">
              <ProductSidebar
                v-for="product in productList.slice(-3)"
                :key="`sb-${product.id}`"
                :product="product"
                :star="star"
                :review="review"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSidebar from '@/components/ProductSidebar/ProductSidebar';
import SidebarProductSkeleton from '@/components/Skeleton/SidebarProductSkeleton.vue';
export default {
  name: 'sidebar',
  data() {
    return {
      bannerBoxes: [
        {
          image: 'fas fa-truck',
          text: 'Miễn Phí Vận Chuyển',
          subText: 'Cho các đơn trên 3 triệu',
        },
        {
          image: 'fas fa-briefcase',
          text: 'An Toàn Mua Sắm',
          subText: 'An Toàn Mua Sắm',
        },
        {
          image: 'fas fa-hand-holding-usd',
          text: 'Đảm Bảo Hoàn Tiền',
          subText: 'Trong vòng 30 ngày',
        },
      ],
    };
  },
  props: { productList: Array, star: Number, review: Number, isLoading: Boolean },
  components: { ProductSidebar, SidebarProductSkeleton },
};
</script>

<style lang="scss" scoped>
@import './Sidebar';
</style>
