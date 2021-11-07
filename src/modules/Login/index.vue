<template>
  <div class="login">
    <div class="login-wrapper">
      <h2 class="login-heading">Admin</h2>
      <div class="login-error" v-if="errorMsg.length > 0">
        {{ errorMsg }}
      </div>
      <div class="login-form">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
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
            <button class="form-button" type="submit">đăng nhập</button>
          </form>
        </ValidationObserver>
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
          await this.$router.push({ name: 'Home' });
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
