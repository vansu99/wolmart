<template>
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <div class="cart__left">
          <div class="cart__card">
            <div class="card__label" :class="success ? '' : 'fail'">
              <div v-if="success" class="card__label-text">Thanh toán thành công</div>
              <div v-else class="card__label-text">Thanh toán thất bại</div>
            </div>
            <div class="card__content">
              <div v-if="success" class="card__anounce">
                <div>Xin cảm ơn quý khách đã mua hàng tại <span>Wolmart</span></div>
                <div>
                  Đơn hàng số <strong>#{{ this.order.id }}</strong> của bạn đã được đặt
                  thành công!
                </div>
              </div>
              <div v-else class="card__anounce">
                <div>Đã phát sinh lỗi trong quá trình xử lý.</div>
                <div>
                  Xin quý khách liên hệ bộ phận chăm sóc khách hàng để được hỗ trợ nhanh
                  nhất.
                </div>
              </div>
              <router-link class="card__navigating" :to="{ name: 'Home' }"
                ><AngleLeft color="#336699" />Quay lại trang chủ</router-link
              >
              <div v-if="success" class="card__discription">
                <div>
                  Để việc xử lý đơn hàng nhanh và thuận tiện, Wolmart sẽ xác nhận đơn hàng
                  thông quan tin nhắn SMS và EMAIL.
                </div>
                <div>
                  Xin Quý khách vui lòng thường xuyên kiểm tra email và điện thoại.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__right">
          <div class="cart__card">
            <div class="card">
              <table>
                <thead>
                  <tr>
                    <th>
                      <div class="card__title">
                        Đơn hàng ({{ this.order.products.length }}
                        sản phẩm)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in this.order.products" :key="index">
                    <th colspan="2">
                      <div class="product__info">
                        <div class="product__index">{{ index + 1 }}:</div>
                        <div class="product__name">{{ item }}</div>
                      </div>
                    </th>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="total">
                    <th>Thanh toán</th>
                    <td>{{ Number(this.order.total_price) | formatPrice }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AngleLeft from '@/components/SvgIcons/angle-left';
import { mapGetters } from 'vuex';
export default {
  name: 'Checkout',
  props: ['orderData'],
  computed: {
    success: function () {
      if (this.$route.params.state === 'fail') {
        return false;
      } else return true;
    },
    order: function () {
      if (this.$route.params.state === 'fail') {
        return {
          total_price: this.totalPrice + this.transferFee,
          products: this.cart.map((item) => item.name),
        };
      } else {
        return {
          ...this.orderData,
          products: this.orderData.products.split(','),
        };
      }
    },
    ...mapGetters({
      cart: 'auth/cart',
    }),
    totalPrice() {
      return this.cart.reduce(
        (previousValue, currentValue) =>
          previousValue +
          Math.ceil(
            currentValue.original_price -
              (currentValue.original_price * currentValue.discount) / 100
          ) *
            currentValue.cart_quantity,
        0
      );
    },
    transferFee() {
      return this.cart.some((currentValue) => currentValue.is_free_shipping == 0)
        ? 15000
        : 0;
    },
  },
  components: { AngleLeft },
};
</script>

<style lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/mixins';
@import './CheckOut';
</style>
