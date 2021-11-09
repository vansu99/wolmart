<template>
  <div class="login">
    <div class="login-wrapper">
      <h2 class="login-heading">Wolmart</h2>
      <div class="login-error" v-if="errorMsg.length > 0">
        {{ errorMsg }}
      </div>
      <div class="login-form">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)" autocomplete="off">
            <ValidationProvider
              class="form-group"
              name="Email"
              rules="required|email"
              v-slot="{ errors }"
              tag="div"
            >
              <label class="form-label" for="email">Email</label>
              <input
                type="email"
                id="email"
                class="form-input"
                v-model="formData.email"
                placeholder="Nhập địa chỉ email của bạn"
              />
              <span class="form-error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              class="form-group"
              name="password"
              rules="required|max:32|min:6"
              v-slot="{ errors }"
              tag="div"
            >
              <label class="form-label" for="email">Mật khẩu</label>
              <input
                type="password"
                id="password"
                class="form-input"
                v-model="formData.password"
                placeholder="Nhập mật khẩu của bạn"
              />
              <span class="form-error">{{ errors[0] }}</span>
            </ValidationProvider>
            <p class="form-forgot">
              Quên mật khẩu? <a>Nhấn vào <b>đây</b></a>
            </p>
            <button class="form-button" type="submit">đăng nhập</button>
          </form>
        </ValidationObserver>
      </div>
      <div class="line-text">
        <span>hoặc</span>
      </div>
      <div class="login-social">
        <a class="social-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Google
        </a>
        <a class="social-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
            <path
              fill="#3F51B5"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
            ></path>
          </svg>
          Facebook
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { userApis } from '@/apis';
import Nprogress from 'nprogress';

export default {
  name: 'Login',
  data() {
    return {
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
        Nprogress.start();
        const response = await userApis.login(this.formData);
        if (response.status === 200) {
          await this.$store.dispatch('auth/login', response.data);
        }
      } catch ({ error }) {
        this.errorMsg = error.message;
      } finally {
        Nprogress.done();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Login';
</style>
