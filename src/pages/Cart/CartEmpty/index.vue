<template>
  <div class="cart-empty">
    <div class="cart-empty-content">
      <img class="cart-empty-image" src="../../../assets/images/cart-empty.png" alt="" />
      <h3 class="cart-empty-title">Không có sản phẩm nào trong giỏ hàng của bạn.</h3>
      <router-link to="/" class="cart-empty-link"
        ><AngleLeft color="#336699" /> Tiếp tục mua sắm</router-link
      >
    </div>
  </div>
</template>

<script>
import AngleLeft from '@/components/SvgIcons/angle-left';
export default {
  name: 'CartEmpty',
  components: { AngleLeft },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/variables';

.cart {
  &-empty {
    position: relative;
    height: 60vh;
  }
  &-empty-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &-empty-title {
    color: $bg-second-light;
    font-size: 2.1rem;
    margin-bottom: 1.5rem;
  }
  &-empty-link {
    font-size: 1.8rem;
    color: $bg-primary;
    display: flex;
    align-items: center;

    svg {
      transition: transform 0.2s ease;
      margin-right: 0.6rem;
    }

    &:hover svg {
      transform: translateX(-8px);
    }
  }
  &-empty-image {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    margin-bottom: 3rem;
  }
}
</style>
