<template>
  <div class="user-content">
    <form class="form user-content-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name" class="form-label">Họ và tên</label>
        <input
          type="text"
          id="name"
          class="form-input"
          placeholder="Họ tên của bạn"
          v-model="userInfo.name"
        />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="text" id="email" class="form-input" disabled v-model="userInfo.email" />
      </div>
      <div class="form-group">
        <label for="address" class="form-label">Địa chỉ</label>
        <input
          type="text"
          id="address"
          class="form-input"
          placeholder="Địa chỉ giao hàng của bạn"
          v-model="userInfo.address"
        />
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Số điện thoại</label>
        <input
          type="text"
          id="phone"
          class="form-input"
          placeholder="Số điện thoại của bạn"
          v-model="userInfo.phone"
        />
      </div>
      <div class="form-group">
        <label class="form-label">Giới tính</label>
        <div class="form-gender">
          <input
            type="radio"
            id="male"
            name="gender"
            class="form-radio"
            value="male"
            v-model="userInfo.gender"
          />
          <label for="male">Nam</label>
          <input
            type="radio"
            id="female"
            name="gender"
            class="form-radio"
            value="female"
            v-model="userInfo.gender"
          />
          <label for="female">Nữ</label>
        </div>
      </div>
      <div class="form-group">
        <label for="birthday" class="form-label">Ngày sinh</label>
        <datepicker
          format="dd/MM/yyyy"
          v-model="userInfo.birthday"
          id="birthday"
          input-class="form-input"
          wrapper-class="form-birthday"
          placeholder="Nhập ngày sinh của bạn"
        />
      </div>
      <button type="submit" class="form-button">Cập nhật</button>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { userApis } from '@/apis';

export default {
  name: 'UserProfile',
  components: {
    Datepicker,
  },
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this.loadUserInfo();
  },
  methods: {
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
    async onSubmit() {
      try {
        const newInfo = {
          ...this.userInfo,
        };
        delete newInfo.token;
        const response = await userApis.updateUserInfo(newInfo);
        if (response.status === 200) {
          this.$store.commit('auth/setUser', response.data);
          this.$toasted.success('Cập nhật thành công', {
            duration: 500,
          });
        }
      } catch (e) {
        console.log({ e });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user-content {
  flex: 1 0 0;
  background-color: #fff;
  padding: 4rem;

  &-form {
    max-width: 40rem;
    width: 100%;
  }

  .form-gender {
    width: 100%;
    display: flex;

    input[type='radio'] {
      -webkit-appearance: none;
    }
    label {
      position: relative;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      font-size: 1.4rem;
      font-weight: 400;
      color: $text-primary;
      margin-right: 1.5rem;
      white-space: nowrap;
      cursor: pointer;
      &:before {
        content: '';
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 1px solid $bg-primary;
      }
      &:after {
        content: '';
        position: absolute;
        transform: scale(0);
        background-color: $bg-primary;
        width: 1.1rem;
        height: 1.1rem;
        top: 0.5rem;
        left: 0.5rem;
        border-radius: 1rem;
        transition: transform 0.2s ease;
      }
    }

    input[type='radio']:checked + label:after {
      transform: scale(1);
    }
  }
}
</style>
