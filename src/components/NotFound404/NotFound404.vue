<template>
  <div class="NotFound">
    <p class="not-found">404</p>
    <p class="not-found-cotent title">Không tìm thấy trang</p>
    <p class="not-found-cotent">Trang bạn đang tìm dường như không tồn tại</p>
    <div class="container-navigate-home">
      <router-link :to="{ name: 'Home', path: '/' }" class="back-to-home">Quay về trang chủ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound404',
};
</script>

<style lang="scss" scoped>
.NotFound {
  font-size: 1.4rem;
  text-align: center;
  .not-found-cotent.title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .not-found {
    font-size: 15rem;
  }
  .back-to-home {
    background-color: $bg-primary;
    color: $text-white-light;
    padding: 1.5rem 2rem;
    font-weight: bold;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    &:hover {
    color: $text-white-light;
      background-color: $hover-contrary;
    }
  }
  .container-navigate-home {
    margin: 3rem;
  }
}
</style>