<template>
  <div>
    <Header />
    <breadcrumb />
    <slot />
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ScrollTop from './components/scrollTop';
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'LayoutDefault',
  components: {
    Breadcrumb,
    Header,
    Footer,
    ScrollTop,
  },
};
</script>

<style lang="scss" scoped></style>
