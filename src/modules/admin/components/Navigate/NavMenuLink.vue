<template>
  <v-list-item v-bind="$attrs" class="vertical-nav-menu-link" active-class="nav-link-active">
    <v-list-item-icon>
      <v-icon class="mx-auto">{{ icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>
      {{ title }}
    </v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "NavMenuLink",
  props: {
    title: { type: String, required: true },
    icon: { type: String }
  }
};
</script>

<style lang="scss" scoped>
.vertical-nav-menu-link {
  margin-top: .7rem;
  &.nav-link-active {
    color: #fff;
    background-color: $bg-primary;
  }
  .v-list-item__title {
    font-size: 1.8rem;
  }
}
</style>
