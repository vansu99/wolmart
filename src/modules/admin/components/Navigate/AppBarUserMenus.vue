<template>
  <v-menu offset-y left nudge-bottom="14" content-class="user-profile-menu-content">
    <template v-slot:activator="{ on, attrs }">
      <v-badge bottom color="success" overlap offset-x="12" offset-y="12" class="ms-4" dot>
        <v-avatar size="40px" v-bind="attrs" v-on="on">
          <v-img :src="require('@/assets/images/Authentication/avatar.png')"></v-img>
        </v-avatar>
      </v-badge>
    </template>
    <v-list>
      <div class="pb-3 pt-2">
        <v-badge bottom color="success" overlap offset-x="12" offset-y="12" class="ms-4" dot>
          <v-avatar size="40px">
            <v-img :src="require('@/assets/images/Authentication/avatar.png')"></v-img>
          </v-avatar>
        </v-badge>
        <div class="d-inline-flex flex-column justify-center ms-3" style="vertical-align: middle">
          <span class="text--primary font-weight-medium mb-n1 text-sm"> John Doe </span>
          <small class="text--disabled text-capitalize text-sm">Admin</small>
        </div>
      </div>

      <v-divider></v-divider>

      <!-- Profile -->
      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="25">
            {{ icons.mdiAccountOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-sm">Profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Email -->
      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="25">
            {{ icons.mdiEmailOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-sm">Inbox</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Settings -->
      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="25">
            {{ icons.mdiCogOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-sm">Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Logout -->
      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="25">
            {{ icons.mdiLogoutVariant }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-sm">Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {
  mdiHelpCircleOutline,
  mdiLogoutVariant,
  mdiCurrencyUsd,
  mdiCogOutline,
  mdiChatOutline,
  mdiEmailOutline,
  mdiAccountOutline,
} from '@mdi/js';
export default {
  name: 'AppBarUserMenus',
  data() {
    return {
      icons: {
        mdiLogoutVariant,
        mdiHelpCircleOutline,
        mdiCurrencyUsd,
        mdiCogOutline,
        mdiChatOutline,
        mdiEmailOutline,
        mdiAccountOutline,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile-menu-content {
  max-width: 23rem;
  width: 100%;
  .v-list-item {
    min-height: 2.5rem !important;
  }
}
</style>
