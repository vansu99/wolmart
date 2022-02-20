<template>
  <div class="login-admin">
    <div class="login-admin-container">
      <h2 class="login-admin-title">Admin</h2>
      <div class="login-admin-form">
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
                type="password"
                v-model="formData.password"
                :class="{ error: errors[0] }"
                class="form-input input-password"
                placeholder="Nhập mật khẩu của bạn"
              />
              <span class="form-error">{{ errors[0] }}</span>
            </ValidationProvider>
            <button type="submit" class="login-admin-btn">Đăng nhập</button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { userApis } from '@/apis';
import { setToken } from '@/utils/storage';

export default {
  name: 'LoginAdmin',
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
        const response = await userApis.login(this.formData);
        if (response.status === 200) {
          await this.$store.dispatch('auth/login', response.data);
          setToken(response.data.token);
          await this.$router.push({ name: 'AdminDashboard' });
        }
      } catch ({ error }) {
        this.errorMsg = error.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-admin {
  padding: 6rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  &-container {
    margin: 0 auto;
    max-width: 30rem;
  }

  &-form {
    .form-error {
      font-size: 1.2rem;
      font-weight: 600;
      color: #ff5252;
      display: block;
      padding-top: 0.4rem;
    }
  }

  &-title {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  &-btn {
    display: block;
    border: 0;
    color: #fff;
    background-color: #336699;
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 3px;
    outline: none;
  }
}
</style>
