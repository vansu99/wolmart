<template>
  <span class="button--fading">{{ content }}</span>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style lang="scss" scoped>
.button--fading {
  display: inline-block;
  padding: 1rem 1.8rem;
  width: 100%;
  border: 0.2rem solid #ccc;
  border-radius: 0.3rem;
  background: transparent;
  font-family: $font-primary;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  color: $text-primary;
  line-height: 1;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: $text-white-light;
    border: 0.2rem solid $bg-second;
    background-color: $bg-second;
  }
}
</style>