<template>
  <table class="order-table">
    <thead>
      <th>Đơn số</th>
      <th>Thời gian</th>
      <th>Tình trạng</th>
      <th>Tổng</th>
      <th>Thao tác</th>
    </thead>
    <tbody>
      <tr v-for="item in orderList" :key="item.id">
        <td>#{{ item.id }}</td>
        <td>{{ item.date_buy }}</td>
        <td>{{ status[item.status] }}</td>
        <td>
          <strong>{{ item.total_price | formatPrice }}</strong> cho
          <strong>{{ item.products.split(',').length }}</strong> sản phẩm
        </td>
        <td>
          <router-link :to="{ name: 'UserOrderDetail', params: { orderId: item.id } }"
            ><button-navigating class="button--fading">Xem</button-navigating></router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ButtonNavigating from '@/components/Button/ButtonNavigating';
export default {
  name: 'OrderTable',
  components: { ButtonNavigating },
  props: ['orderList'],
  data() {
    return {
      status: ['Chưa giao hàng', 'Đang giao hàng', 'Đã giao hàng'],
    };
  },
};
</script>

<style lang="scss" scoped>
.order-table {
  width: 100%;
  white-space: nowrap;
  thead {
    padding-bottom: 1.8rem;
    th {
      padding: 1.7rem 0 1.3rem;
      font-family: $font-primary;
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: capitalize;
      color: $text-primary;
      text-align: center;
    }
  }
  tbody {
    td {
      padding: 2rem 1rem;
      border-top: 1px solid #eee;
      font-family: $font-primary;
      font-size: 1.4rem;
      text-align: center;
      color: #666;
      &:last-of-type {
        text-transform: uppercase;
      }
      & strong {
        font-weight: 500;
      }
    }
    &:last-of-type {
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
