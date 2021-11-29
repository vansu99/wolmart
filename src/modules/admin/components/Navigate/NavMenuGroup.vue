<template>
  <v-list-group class="vertical-nav-menu-group">
    <template #prependIcon>
      <v-icon>{{ icon }}</v-icon>
    </template>
    <template #activator>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </template>
    <slot />
  </v-list-group>
</template>

<script>
export default {
  name: "NavMenuGroup",
  props: {
    title: {type: String},
    icon: {type: String}
  }
};
</script>

<style scoped>

</style>
