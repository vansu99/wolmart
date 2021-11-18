<template>
  <div class="user">
    <div class="container">
      <div class="user-wrapper">
        <user-sidebar />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import UserSidebar from "@/pages/User/components/UserSidebar";
export default {
  name: 'User',
  components: {
    UserSidebar
  }
};
</script>

<style lang="scss" scoped>
.user {
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  background-color: #ebebeb;
  &-wrapper {
    display: flex;
  }
}
</style>
