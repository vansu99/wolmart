<template>
  <div class="user-password">
    <form class="form" @submit.p.prevent="onSubmit">
      <div class="form-group">
        <label for="old_password" class="form-label">Mật khẩu cũ</label>
        <input
          type="password"
          id="old_password"
          class="form-input"
          placeholder="Nhập mật khẩu cũ"
          v-model="userPwd.old_password"
        />
      </div>
      <div class="form-group">
        <label for="new_password" class="form-label">Mật khẩu mới</label>
        <input
          type="password"
          id="new_password"
          class="form-input"
          placeholder="Nhập mật khẩu mới"
          v-model="userPwd.new_password"
        />
      </div>
      <div class="form-group">
        <label for="new_password_confirmation" class="form-label">Nhập lại mật khẩu mới</label>
        <input
          type="password"
          id="new_password_confirmation"
          class="form-input"
          placeholder="Nhập lại mật khẩu mới"
          v-model="userPwd.new_password_confirmation"
        />
      </div>
      <button type="submit" class="form-button">Cập nhật</button>
    </form>
  </div>
</template>

<script>
import { userApis } from '@/apis';

export default {
  name: 'UserPassword',
  data() {
    return {
      userPwd: {
        old_password: '',
        new_password: '',
        new_password_confirmation: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await userApis.changePassword(this.userPwd);
        if (response.status === 200) {
          this.$toasted.success('Cập nhật thành công', {
            duration: 500,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user-password {
  flex: 1 0 0;
  background-color: #fff;
  padding: 4rem;

  .form {
    width: 100%;
    max-width: 40rem;
  }
}
</style>
