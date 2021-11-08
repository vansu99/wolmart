<template>
  <transition name="slide-up">
    <button class="top-btn" v-if="showScroll" @click="scrollToTop">
      <i class="fas fa-chevron-up"></i>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'ScrollTop',
  data() {
    return {
      showScroll: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    handleScroll() {
      this.showScroll = window.scrollY > 400;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.top-btn {
  position: fixed;
  right: 3rem;
  bottom: 6rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  outline: none;
  background: #333;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 3rem;
}
</style>
