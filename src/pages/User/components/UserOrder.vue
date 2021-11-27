<template>
  <div class="order">
    <div class="order__wrapper">
      <div class="order__title">
        <i class="fas fa-clipboard-list"></i>
        <h3 class="order__title-text">Đơn mua</h3>
      </div>
      <div class="order__table">
        <order-table />
      </div>
      <div class="order__btn">
        <router-link :to="{ name: 'Home' }">
          <button-navigating content="mua sắm ngay" :left="false" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import OrderTable from '@/components/OrderTable/OrderTable';
import ButtonNavigating from '@/components/Button/ButtonNavigating';
export default {
  name: 'UserOrder',
  components: { OrderTable, ButtonNavigating },
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  background: #fff;
  &__wrapper {
    padding: 0 1.5rem;
  }
  &__title {
    display: flex;
    align-items: center;
    & i {
      color: #666;
      font-size: 2.5rem;
    }
    &-text {
      padding: 1rem;
      font-family: $font-primary;
      font-size: 2rem;
      font-weight: 700;
      color: $text-primary;
      text-transform: capitalize;
    }
  }
  &__table {
    margin-bottom: 3rem;
  }
  &__btn {
    float: right;
    padding: 0 0 4rem;
    margin-left: auto;
  }
}
</style>