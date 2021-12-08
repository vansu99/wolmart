<template>
  <div class="order">
    <div class="order__wrapper">
      <div class="order__title">
        <i class="fas fa-clipboard-list"></i>
        <h3 class="order__title-text">Đơn mua</h3>
      </div>
      <div class="order__table">
        <order-table :orderList="this.orderList" />
      </div>
      <div class="order__btn">
        <router-link :to="{ name: 'Home' }">
          <button-navigating class="button--opacity" :right="true">mua sắm ngay</button-navigating>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import OrderTable from '@/components/OrderTable/OrderTable';
import ButtonNavigating from '@/components/Button/ButtonNavigating';
import { orderApis } from '@/apis';
export default {
  name: 'UserOrder',
  data() {
    return {
      orderList: [],
    };
  },
  components: { OrderTable, ButtonNavigating },
  created() {
    this.loadOrder();
  },
  methods: {
    async loadOrder() {
      try {
        const response = await orderApis.getOrder();
        if (response.status === 200) {
          this.orderList = { ...response.data };
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  background: #fff;
  &__wrapper {
    padding: 3rem 1.5rem;
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
    overflow-x: auto;
  }
  &__btn {
    display: flex;
    justify-content: flex-end;
    padding: 0 0 4rem;
    margin-left: auto;
    @media #{$info-screen-575}{
      justify-content: center;
    }
  }
}
</style>