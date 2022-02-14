<template>
  <div>
    <div class="header">
      <div class="header-logo">
        <img src="../assets/images/Header/logo.png" alt="wolmart">
      </div>
    </div>
    <transition name="fade">
      <slot />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer';
export default {
  name: "LayoutSecond",
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem 0;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  &-logo {
    width: 10rem;
    img {
      object-fit: cover;
    }
  }
}

.fade-enter-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
