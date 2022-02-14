<template>
  <div class="cart">
    <CartEmpty />
  </div>
</template>

<script>
import CartEmpty from './CartEmpty';
export default {
  name: 'Cart',
  components: { CartEmpty },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
