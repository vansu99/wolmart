<template>
  <modal name="register" :width="400" height="auto" :resizable="true">
    <slot />
  </modal>
</template>

<script>
export default {
  name: 'ModalRegister',
};
</script>

<style scoped></style>
