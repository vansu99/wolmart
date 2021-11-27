<template>
  <table class="order-table">
    <thead>
      <th>Đơn mua</th>
      <th>Thời gian</th>
      <th>Tình trạng</th>
      <th>Tổng</th>
      <th>Thao tác</th>
    </thead>
    <tbody>
      <tr v-for="item in arr" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.time }}</td>
        <td>{{ item.state }}</td>
        <td>{{ item.total | formatPrice }} cho {{ item.productAmount }} sản phẩm</td>
        <td>
          <router-link :to="{ name: 'UserOrderDetail', params: { orderId: 'orderId' } }"
            ><button-fading content="Xem"
          /></router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ButtonFading from '@/components/Button/ButtonFading';
export default {
  name: 'OrderTable',
  components: { ButtonFading },
  data() {
    return {
      arr: [
        { id: 1, time: '17/12/1998', state: 'Đang giao', total: 133000, productAmount: 10 },
        { id: 2, time: '27/5/1998', state: 'Đang giao', total: 133000, productAmount: 10 },
        { id: 3, time: '13/3/1998', state: 'Đang giao', total: 133000, productAmount: 10 },
        { id: 4, time: '20/9/1998', state: 'Đang giao', total: 133000, productAmount: 10 },
        { id: 5, time: '31/4/1998', state: 'Đang giao', total: 133000, productAmount: 10 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.order-table {
  width: 100%;
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
      color: #666;
      &:last-of-type {
        text-align: center;
        text-transform: uppercase;
      }
    }
    &:last-of-type {
      border-bottom: 1px solid #eee;
    }
  }
}
</style>