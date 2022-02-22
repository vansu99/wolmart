<template>
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <div class="cart__left">
          <div class="cart__card">
            <div class="card__label">
              <div class="card__label-text">Giỏ hàng</div>
              <div class="card__label-description">(3 sản phẩm)</div>
            </div>
            <div class="card__table">
              <table>
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in 3" :key="i">
                    <th>
                      <div class="product">
                        <div class="product__left">
                          <router-link
                            :to="{
                              name: 'ProductDetail',
                              params: {
                                slug: 'thuc-pham-chuc-nang',
                                categoryId: 1,
                                productId: 23,
                              },
                            }"
                            class="product__link"
                          >
                            <img
                              src="..\..\assets\images\ProductDetail\laptop.jpg"
                              alt="product"
                            />
                          </router-link>
                        </div>
                        <div class="product__content">
                          <router-link
                            :to="{
                              name: 'ProductDetail',
                              params: {
                                slug: 'thuc-pham-chuc-nang',
                                categoryId: 1,
                                productId: 23,
                              },
                            }"
                            class="product__name"
                          >
                            <span>Viên ngậm sủi Vitamin C Vỉ 10 viên</span>
                          </router-link>
                          <div class="product__delete"><i class="fas fa-trash"></i></div>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div class="price__wrapper">
                        <span class="product__price--new">{{ 30000 | formatPrice }}</span>
                        <div>
                          <span class="product__discount">-30%</span>
                          <span class="product__price--old">{{
                            30000 | formatPrice
                          }}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="quantity__wrapper">
                        <div class="product__quantity">
                          <button
                            class="product__quantity-btn--minus"
                            @click="decreaseQuantity"
                          >
                            -
                          </button>
                          <input type="number" min="1" max="10000" v-model="value" />
                          <button
                            class="product__quantity-btn--plus"
                            @click="increaseQuantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="cart__right">
          <div class="cart__card">
            <div class="card">
              <div class="card__title">Mã giảm giá</div>
              <hr class="section__divider" />
              <div class="card__discount">
                <div class="card__input">
                  <input type="text" placeholder="Nhập mã giảm giá" />
                </div>
                <div class="card__btn">
                  <Button content="Áp dụng" radiusNone />
                </div>
              </div>
            </div>
          </div>
          <div class="cart__card">
            <div class="card">
              <table>
                <tbody>
                  <tr>
                    <th>Tạm tính</th>
                    <td>{{ 30000 | formatPrice }}</td>
                  </tr>
                  <tr>
                    <th>Giảm giá</th>
                    <td>{{ 30000 | formatPrice }}</td>
                  </tr>
                  <tr class="total">
                    <th><strong>Thanh toán</strong></th>
                    <td>{{ 30000 | formatPrice }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Button
            @click="onClick"
            content="Tiến hành đặt hàng"
            radiusNone
            wFull
            size="large"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/ButtonPrimary';
export default {
  name: 'Cart',
  data: () => ({
    value: 1,
  }),
  methods: {
    increaseQuantity: function () {
      if (this.value >= 10000) {
        return this.value;
      }
      return (this.value = Number(this.value) + 1);
    },
    decreaseQuantity: function () {
      if (this.value <= 1) {
        return this.value;
      }
      return (this.value = Number(this.value) - 1);
    },
    onClick: function () {
      var success = true;
      if (success) {
        this.$router.push({
          name: 'CheckOut',
          params: {
            state: 'success',
          },
        });
      } else {
        this.$router.push({
          name: 'CheckOut',
          params: {
            state: 'fail',
          },
        });
      }
    },
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import './src/plugins/vuetify/preset/styles/mixins';
@import './Cart';
</style>
