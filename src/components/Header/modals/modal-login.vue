<template>
  <modal name="login" :width="400" height="auto" :resizable="true">
    <slot />
  </modal>
</template>

<script>
export default {
  name: "ModalLogin"
}
</script>

<style scoped>

</style>
