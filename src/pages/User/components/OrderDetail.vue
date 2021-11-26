<template>
  <div class="order-detail">
    <div class="order-detail__wrapper">
      <h3 class="order-detail__title">Chi tiết đơn</h3>
      <div class="order-detail__main-table">
        <table>
          <thead>
            <th>Sản phẩm</th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for="(product, index) in orderProducts" :key="index">
              <th>
                <div class="table__td-content">
                  <a>{{ product }}</a
                  ><strong>&nbsp;x&nbsp;1</strong><br />
                </div>
              </th>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Tạm tính</th>
              <td>{{ Number(order.total_price) | formatPrice }}</td>
            </tr>
            <tr>
              <th>Phí vận chuyển</th>
              <td>Vận chuyển nhanh</td>
            </tr>
            <tr>
              <th>Phương thức thanh toán</th>
              <td>Thanh toán trực tuyến</td>
            </tr>
            <tr class="total">
              <th>Tổng tiền</th>
              <td>{{ Number(order.total_price) | formatPrice }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <h4 class="order-detail__sub-title">Đơn phụ</h4>

      <div class="order-detail__note">
        <p>
          <i class="fas fa-exclamation-triangle"></i>
          <strong>Ghi chú:</strong> Đơn hàng này có những sản phẩm từ nhiều nhà cung cấp khác nhau.
          Nên chúng tôi đã phân chia đơn hàng này thành những đơn riêng theo từng nhà cung cấp. Mỗi
          đơn sẽ được xử lý độc lập bởi từng nhà cung cấp riêng.
        </p>
      </div>
      <div class="order-detail__sub-table"><order-table :orderList="orderList" /></div>
      <div class="order-detail__address">
        <div class="address__wrapper">
          <div class="address__item">
            <h5 class="address__title">Địa chỉ đơn</h5>
            <ul class="address__info-list">
              <li class="address__info-item">{{ userInfo.name }}</li>
              <li class="address__info-item">{{ userInfo.email }}</li>
              <li class="address__info-item">{{ userInfo.address }}</li>
              <li class="address__info-item">{{ userInfo.phone }}</li>
            </ul>
          </div>
          <div class="address__item">
            <h5 class="address__title">Địa chỉ giao hàng</h5>
            <ul class="address__info-list">
              <li class="address__info-item">{{ userInfo.name }}</li>
              <li class="address__info-item">{{ userInfo.email }}</li>
              <li class="address__info-item">{{ userInfo.address }}</li>
              <li class="address__info-item">{{ userInfo.phone }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="order-detail__btn">
        <router-link :to="{ name: 'UserOrder' }">
          <button-navigating class="button--opacity" :left="true"
            >Trở lại trang trước</button-navigating
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import OrderTable from '@/components/OrderTable/OrderTable.vue';
import ButtonNavigating from '@/components/Button/ButtonNavigating';
import { userApis, orderApis } from '@/apis';
export default {
  components: { OrderTable, ButtonNavigating },
  name: 'OrderDetail',
  data() {
    return {
      orderList: [],
      order: {},
      orderProducts: [],
      userInfo: {},
    };
  },
  created() {
    this.loadOrder();
    this.loadUserInfo();
  },
  methods: {
    async loadOrder() {
      try {
        const response = await orderApis.getOrder();
        if (response.status === 200) {
          this.orderList = [...response.data];
          let orderId = this.$route.params.orderId;
          this.order = this.orderList.find((el) => el.id == orderId);
          this.orderProducts = this.order.products.split(',');
        }
      } catch (e) {
        console.log(e);
      }
    },
    async loadUserInfo() {
      try {
        const response = await userApis.getUserInfo();
        if (response.status === 200) {
          this.userInfo = { ...response.data };
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-detail {
  width: 100%;
  background: #fff;
  &__wrapper {
    padding: 4rem 1.5rem 5rem;
  }
  &__title,
  &__sub-title {
    padding-bottom: 2.5rem;
    font-family: $font-primary;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: $text-primary;
  }
  &__sub-title {
    font-weight: 600;
    text-transform: capitalize;
  }
  &__note {
    margin-bottom: 2.5rem;
    padding: 1.4rem 2rem;
    border: 1px dashed #e5e5e5;
    border-radius: 0.3rem;
    font-family: $font-primary;
    font-size: 1.4rem;
    color: #666;
    & i {
      padding-right: 0.5rem;
      font-size: 1.8rem;
      color: #799b5a;
    }
    & strong {
      font-weight: bold;
    }
  }
  &__main-table {
    margin-bottom: 2.5rem;
    padding: 0 3rem 1rem;
    border: 1px solid #e5e5e5;
    & table {
      width: 100%;
      & th {
        width: 70%;
        text-align: justify;
        color: #333;
      }
      & td {
        text-align: right;
        color: #666;
      }
      & thead {
        border-bottom: 1px solid #e5e5e5;
        & th {
          padding: 2rem 0;
          font-family: $font-primary;
          font-size: 1.8rem;
          font-weight: bold;
        }
      }
      & tbody {
        & th,
        td {
          padding: 3rem 0 1.5rem;
          font-family: $font-primary;
          font-size: 1.3rem;
          font-weight: 400;
          color: #666;
          & strong {
            font-weight: bold;
          }
        }
      }
      & tfoot {
        & tr {
          border-bottom: 1px solid #e5e5e5;
        }
        .total {
          border: none;
          & td {
            font-weight: 700;
            font-size: 2rem;
            color: #333;
          }
        }
        & th,
        td {
          padding: 1.5rem 0 1.8rem;
          font-family: $font-primary;
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
  &__btn {
    margin-top: 3rem;
  }
}
.address {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    border-bottom: 0.1rem solid #eee;
    padding-top: 4rem;
  }
  &__item {
    padding-bottom: 4rem;
  }
  &__title {
    padding-bottom: 1.6rem;
    font-family: $font-primary;
    font-weight: 600;
    font-size: 2rem;
    color: #333;
    border-bottom: 0.1rem solid #eee;
  }
  &__info-list {
    padding-top: 1.7rem;
  }
  &__info-item {
    font-family: $font-primary;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.7;
    color: #666;
    font-style: italic;
  }
}
</style>