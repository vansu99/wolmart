<template>
  <div class="login">
    <div class="login-container">
      <div class="login-image">
        <img src="../../assets/images/Authentication/login.jpg" alt="bg-login" />
      </div>
      <div class="login-wrapper">
        <div class="login-heading"><img src="@/assets/images/Header/logo.png" alt="Wolmart" /></div>
        <div class="login-error" v-if="errorMsg.length > 0">
          {{ errorMsg }}
        </div>
        <div class="login-description">Người bạn của mọi nhà</div>
        <div class="login-form">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)" autocomplete="off">
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
                  type="text"
                  id="email"
                  class="form-input"
                  :class="{ error: errors[0] }"
                  v-model="formData.email"
                  placeholder="Nhập địa chỉ email của bạn"
                />
                <icon name="email" class="form-icon" />
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
                  id="password"
                  class="form-input input-password"
                  :class="{ error: errors[0] }"
                  v-model="formData.password"
                  placeholder="Nhập mật khẩu của bạn"
                  :type="hide ? 'text' : 'password'"
                />
                <icon name="pwd" class="form-icon" />
                <i class="fas fa-eye password-icon" v-if="hide" @click="hide = false"></i>
                <i class="fas fa-eye-slash password-icon" v-else @click="hide = true"></i>
                <span class="form-error">{{ errors[0] }}</span>
              </ValidationProvider>
              <p class="form-forgot">
                Quên mật khẩu? <a>Nhấn vào <b>đây</b></a>
              </p>
              <Button content="đăng nhập" />
            </form>
          </ValidationObserver>
        </div>
        <div class="line-text">
          <span>hoặc</span>
        </div>
        <div class="login-social">
          <a class="social-item">
            <icon name="google" />
          </a>
          <a class="social-item">
            <icon name="facebook" />
          </a>
        </div>
        <div class="login-register">
          <router-link to="/register">Chưa có tài khoản? <b>Đăng ký</b></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userApis } from '@/apis';
import Icon from '@/components/SvgIcons';
import { setToken } from "@/utils/storage";
import Button from '@/components/Button/ButtonPrimary';

export default {
  name: 'Login',
  data() {
    return {
      hide: false,
      formData: {
        email: '',
        password: '',
      },
      errorMsg: '',
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await userApis.login(this.formData);
        if (response.status === 200) {
          await this.$store.dispatch('auth/login', response.data);
          setToken(response.data.token);
          await this.$router.push({ name: 'Home' });
        }
      } catch ({ error }) {
        this.errorMsg = error.message;
      }
    },
  },
  components: { Icon, Button },
};
</script>

<style lang="scss" scoped>
@import './Login';
</style>
