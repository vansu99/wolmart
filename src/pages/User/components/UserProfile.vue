<template>
  <div class="user-content">
    <form class="form user-content-form" @submit.prevent="onSubmit">
      <div class="form-left">
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
        <button type="submit" class="form-button user-button">Cập nhật</button>
      </div>
      <div class="form-right">
        <div class="form-group">
          <div class="form-checkbox">
            <input
              type="checkbox"
              id="changePwd"
              name="changePwd"
              class="form-checkbox-input"
              v-model="isChangePwd"
              :value="isChangePwd"
            />
            <label for="changePwd" class="form-checkbox-label">Đổi mật khẩu</label>
          </div>
        </div>
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
      </div>
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
      userPwd: {
        old_password: '',
        new_password: '',
        new_password_confirmation: '',
      },
      isChangePwd: false,
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
        if(this.isChangePwd) {
          const newInfo = {
            ...this.userInfo,
            ...this.userPwd
          };
          delete newInfo.token;
          const response = await userApis.updateUserInfo(newInfo);
          if (response.status === 200) {
            this.$store.commit('auth/setUser', response.data);
            this.$toasted.success('Cập nhật thành công', {
              duration: 500,
            });
          }
        } else {
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
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .form-left,
  .form-right {
    width: calc(50% - 4rem);
  }

  .form-right {
    padding-top: 4.5rem;
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

  .form-checkbox {
    @include flexVerticalCenter;
    &-input {
      display: none;
      &:checked + .form-checkbox-label:after {
        opacity: 1;
        visibility: visible;
      }
    }

    &-label {
      padding-left: 3rem;
      position: relative;
      cursor: pointer;
      font-size: 1.4rem;
      font-weight: 500;
      color: $text-primary;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translatey(-50%);
        width: 2.2rem;
        height: 2.2rem;
        border: 1px solid $text-primary;
        border-radius: 4px;
      }
      &::after {
        content: '';
        position: absolute;
        left: 5px;
        top: 6px;
        width: 14px;
        height: 5px;
        transform: rotate(-45deg);
        border-left: 3px solid $bg-primary;
        border-bottom: 3px solid $bg-primary;
        opacity: 0;
        visibility: hidden;
        transition: 0.25s linear;
      }
    }
  }

  .user-button {
    width: 12rem;
    display: inline-block;
  }
}
</style>
