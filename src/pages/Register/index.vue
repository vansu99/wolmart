<template>
  <div class="register">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="register-wrapper">
      <div class="register-heading">
        <img src="@/assets/images/Header/logo.png" alt="Wolmart" />
      </div>
      <div class="register-description">Người bạn của mọi nhà</div>
      <div class="register-success" v-if="isSuccess">
        Bạn đã đăng ký thành công với tài khoản <b>{{ accountName }}</b
        >, bạn hãy nhấn vào <b @click="openModalLogin">đăng nhập</b>.
      </div>
      <div class="register-form" v-else>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)" autocomplete="off">
            <ValidationProvider
              class="form-group"
              name="name"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              mode="passive"
            >
              <label class="form-label" for="name">Họ và tên</label>
              <input
                :class="{ error: errors[0] }"
                type="text"
                id="name"
                class="form-input"
                v-model="formData.name"
                placeholder="Nhập họ tên của bạn"
              />
              <i class="fas fa-user form-icon"></i>
              <span class="form-error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              class="form-group"
              name="Email"
              rules="required|email"
              v-slot="{ errors }"
              tag="div"
              mode="passive"
            >
              <label class="form-label" for="email">Email</label>
              <input
                :class="{ error: errors[0] }"
                type="email"
                id="email"
                class="form-input"
                v-model="formData.email"
                placeholder="Nhập địa chỉ email của bạn"
              />
              <i class="fas fa-envelope form-icon"></i>
              <span class="form-error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              class="form-group"
              name="password"
              rules="required|max:32|min:6"
              v-slot="{ errors }"
              tag="div"
              mode="passive"
            >
              <label class="form-label" for="email">Mật khẩu</label>
              <input
                :class="{ error: errors[0] }"
                id="password"
                class="form-input input-password"
                v-model="formData.password"
                placeholder="Nhập mật khẩu của bạn"
                :type="hide ? 'text' : 'password'"
              />
              <i class="fas fa-lock form-icon"></i>
              <i class="fas fa-eye password-icon" v-if="hide" @click="hide = false"></i>
              <i class="fas fa-eye-slash password-icon" v-else @click="hide = true"></i>
              <span class="form-error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              class="form-group"
              name="phone"
              rules="required"
              v-slot="{ errors }"
              tag="div"
              mode="passive"
            >
              <label class="form-label" for="phone">Số điện thoại</label>
              <input
                :class="{ error: errors[0] }"
                type="text"
                id="phone"
                class="form-input"
                v-model="formData.phone"
                placeholder="Nhập số điện thoại của bạn"
              />
              <i class="fas fa-phone form-icon"></i>
              <span class="form-error">{{ errors[0] }}</span>
            </ValidationProvider>
            <Button content="đăng ký" />
          </form>
        </ValidationObserver>
        <p class="form-forgot">
          Khi bạn nhấn Đăng ký, bạn đã đồng ý thực hiện mọi giao dịch mua bán theo điều kiện sử dụng
          và chính sách của <b>Wolmart</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { userApis } from '@/apis';
import Button from '@/components/ButtonPrimary/ButtonPrimary';

export default {
  name: 'Register',
  data() {
    return {
      hide: false,
      formData: {
        name: '',
        email: '',
        password: '',
        phone: '',
      },
      accountName: '',
      isSuccess: false,
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await userApis.register(this.formData);
        if (response.status === 200) {
          this.isSuccess = true;
          this.accountName = response.data.email;
        }
      } catch (error) {
        console.log(error);
      }
    },
    openModalLogin() {
      this.$modal.hide('register');
      this.$modal.show('login');
    },
  },
  components: { Button },
};
</script>

<style lang="scss" scoped>
@import './register';
</style>
