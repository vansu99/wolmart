<template>
  <v-app>
    <sidebar />
    <v-app-bar app flat absolute color="transparent">
      <div class="ad-container">
        <div class="d-flex align-center mx-6">
          <v-text-field
            rounded
            dense
            outlined
            :prepend-inner-icon="icons.mdiMagnify"
            class="flex-grow-0"
            hide-details
          />
          <v-spacer />
          <a href="https://github.com/vansu99/wolmart" target="_blank" rel="nofollow">
            <v-icon class="ms-6 me-4">
              {{ icons.mdiGithub }}
            </v-icon>
          </a>
          <v-btn icon small class="ms-3">
            <v-icon>
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn>
          <app-bar-user-menus />
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <div class="ad-container pa-6">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Navigate/sidebar';
import { mdiMagnify, mdiGithub, mdiBellOutline } from '@mdi/js';
import AppBarUserMenus from '@/modules/admin/components/Navigate/AppBarUserMenus';
export default {
  name: 'admin',
  components: { AppBarUserMenus, Sidebar },
  data() {
    return {
      icons: { mdiMagnify, mdiGithub, mdiBellOutline },
    };
  },
};
</script>

<style lang="scss" scoped>
.ad-container {
  width: 100%;
  max-width: 144rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
