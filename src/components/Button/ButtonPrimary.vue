<template>
  <button
    class="btn"
    :type="typeBtn"
    @click="onClick"
    :class="getClasses"
    :disabled="disabled"
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    content: String,
    theme: {
      type: String,
      default: 'default',
      validator: (val) => ~['default', 'primary', 'secondary'].indexOf(val),
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val) => ~['small', 'medium', 'large'].indexOf(val),
    },
    outline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    wFull: {
      type: Boolean,
      default: false,
    },
    typeBtn: {
      type: String,
      default: 'button',
    },
    radiusNone: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getClasses() {
      return {
        'full': this.wFull,
        outline: this.outline,
        [this.size]: this.size,
        radiusNone: this.radiusNone
      };
    },
  },
  methods: {
    onClick() {
      if(this.disabled) return;

      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
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
  user-select: none;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }

  &:disabled {
    border-color: $bg-contrary-light;
    background-color: $bg-contrary-light;
    background-image: linear-gradient(1deg, $bg-contrary-light, $bg-contrary-light 99%);
    color: #666;
    cursor: not-allowed;
  }

  &.outline {
    color: $bg-primary;
    background: transparent;
    border: 2px solid $bg-primary;
  }

  // Width-full
  &.full {
    width: 100%;
  }

  // Sizes
  &.large {
    padding: 1.2rem;
  }
  &.medium {
    padding: .8rem 1.2rem;
  }
  &.small {
    font-size: 1.3rem;
    padding: .4rem .8rem;
  }
  &.radiusNone{
    border-radius: 0;
  }
}
</style>
