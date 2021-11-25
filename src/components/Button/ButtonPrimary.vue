<template>
  <button class="form-button" type="submit">{{content}}</button>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style lang="scss" scoped>
.form-button {
  display: block;
  width: 100%;
  padding: 12px;
  border: 0;
  border-radius: 4px;
  background-color: #3eb2fd;
  background-image: linear-gradient(1deg, #4f58fd, #149bf3 99%);
  font-family: $font-primary;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: capitalize;
  color: #fff;
  line-height: 1.2;
  outline: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
  &.disabled {
      border-color: $bg-contrary-light;
      background-color: $bg-contrary-light;
      background-image: linear-gradient(1deg, $bg-contrary-light, $bg-contrary-light 99%);
      color: #666;
      cursor: not-allowed;
    }
}
</style>