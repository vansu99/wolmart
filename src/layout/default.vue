<template>
  <div>
    <Header/>
      <slot />
    <Footer/>
    <ScrollTop />
  </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ScrollTop from './components/scrollTop';
export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Footer,
    ScrollTop
  }
}
</script>

<style lang="scss" scoped></style>
