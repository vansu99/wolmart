<template>
  <svg
    id="close"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    focusable="false"
    :width="width"
    :height="height"
  >
    <path
      id="primary"
      d="M23.72,22.31,17.41,16l6.31-6.31a1,1,0,0,0-1.41-1.41L16,14.59,9.69,8.28A1,1,0,0,0,8.28,9.69L14.59,16,8.28,22.31a1,1,0,0,0,1.41,1.41L16,17.41l6.31,6.31a1,1,0,0,0,1.41-1.41Z"
      :fill="color"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'Close',
  props: {
    color: { type: String, default: 'rgb(0, 0, 0)' },
    width: { type: Number, default: 25 },
    height: { type: Number, default: 25 },
  },
};
</script>

<style></style>
