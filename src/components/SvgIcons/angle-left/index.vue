<template>
  <svg
    id="curve-arrow-left"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      id="primary"
      d="M3.37,13.77,11,20V16c7.1-.26,10-6.11,10-12,0,0-3.88,5.69-10,6V6L3.37,12.23A1,1,0,0,0,3.37,13.77Z"
      :fill="color"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'AngleLeft',
  props: {
    color: { type: String, default: 'rgb(0, 0, 0)' },
    width: { type: Number, default: 25 },
    height: { type: Number, default: 25 },
  },
};
</script>

<style></style>
