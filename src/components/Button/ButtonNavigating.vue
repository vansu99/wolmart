<template>
  <span class="button--opacity"
    ><i v-show="left" class="fas fa-chevron-left left"></i
    ><i v-show="left" class="fas fa-chevron-left left"></i>
    {{ content }}
    <i v-show="!left" class="fas fa-chevron-right right"></i
    ><i v-show="!left" class="fas fa-chevron-right right"></i>
  </span>
</template>

<script>
export default {
  props: { content: String, left: Boolean },
};
</script>

<style lang="scss" scoped>
.button--opacity {
  display: inline-block;
  padding: 1.3rem 2.8rem;
  border: 2px solid $bg-second;
  border-radius: 0.3rem;
  background-color: $bg-second;
  font-family: $font-primary;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.95;
  }
  & i {
    font-size: 1.2rem;
    transition: transform 0.3s ease-in-out;
    &:nth-child(3) {
      margin-left: 0.3rem;
    }
    &:nth-child(2) {
      margin-right: 0.3rem;
    }
  }
  &:hover .right {
    transform: translateX(1rem);
  }
  &:hover .left {
    transform: translateX(-1rem);
  }
}
</style>