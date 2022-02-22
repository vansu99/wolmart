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
                  Đơn hàng số <strong>#13</strong> của bạn đã được đặt thành công!
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
                      <div class="card__title">Đơn hàng (1 sản phẩm)</div>
                    </th>
                    <td>
                      <router-link :to="{ name: 'Cart' }"
                        ><i class="fas fa-pen"></i
                      ></router-link>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 3" :key="i">
                    <th>
                      <div class="product__info">
                        <div class="product__quantity">1x</div>
                        <div class="product__name">Thuốc chữa dạ dày tá tràng</div>
                      </div>
                    </th>
                    <td>{{ 30000 | formatPrice }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Tạm tính</th>
                    <td>{{ 30000 | formatPrice }}</td>
                  </tr>
                  <tr>
                    <th>Phí vận chuyển</th>
                    <td>{{ 30000 | formatPrice }}</td>
                  </tr>
                  <tr class="total">
                    <th>Thanh toán</th>
                    <td>{{ 30000 | formatPrice }}</td>
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
export default {
  name: 'Checkout',
  data() {
    return {
      success: true,
    };
  },
  methods: {
    init() {
      if (this.$route.params.state === 'fail') {
        this.success = false;
      }
    },
  },
  created() {
    this.init();
  },
  components: { AngleLeft },
};
</script>

<style lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/mixins';
@import './CheckOut';
</style>
