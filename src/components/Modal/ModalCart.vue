<template>
  <modal name="cart" :width="600" height="auto" :resizable="false">
    <div class="cart-title">{{ message }}</div>
    <div class="cart-content">
      <slot />
    </div>
    <div class="cart-action" v-show="show">
      <router-link :to="{ name: 'Cart' }"
        ><Button content="Xem giỏ hàng"></Button
      ></router-link>
    </div>
  </modal>
</template>

<script>
import Button from '@/components/Button/ButtonPrimary';

export default {
  name: 'ModalCart',
  components: {
    Button,
  },
  props: {
    message: {
      type: String,
      default: 'Sản phẩm đã được thêm vào giỏ!',
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.cart {
  &-title {
    padding: 3rem 0 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
  }
  &-content,
  &-action {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0 3rem;
  }
  &-action {
    padding-top: 1rem;
    padding-bottom: 3rem;
  }
}
</style>