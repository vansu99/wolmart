<template>
  <div>
    <Header/>
      <slot />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped></style>
