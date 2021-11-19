<template>
  <div class="user-sidebar">
    <div class="user-sidebar-title">
      <h4>Danh mục sản phẩm</h4>
    </div>
    <div class="user-sidebar-wrap">
      <router-link to="/user/account/profile" class="user-sidebar-link"
        >Thông tin tài khoản
      </router-link>
      <router-link to="/user/account/settings" class="user-sidebar-link"
      >Đổi mật khẩu
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSidebar',
};
</script>

<style lang="scss" scoped>
.user-sidebar {
  width: 22.7rem;
  margin-right: 1.5rem;
  background-color: #fff;
  margin-bottom: 1.7rem;
  &-title {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    font-weight: 500;
    border-bottom: 1px solid #e5e5e4;
    h4 {
      font-size: 1.5rem;
      color: $text-primary;
      text-transform: capitalize;
    }
  }
  &-wrap {
    padding: 2.5rem 0.8rem 1.7rem 1.5rem;
  }
  &-link {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 1.8rem;
    color: $text-primary;
    transition: color 0.2s ease-in;
    cursor: pointer;
    &:hover {
      color: $bg-primary;
    }
    &.router-link-exact-active {
      color: $bg-primary;
      font-weight: 500;
    }
  }
}
</style>
