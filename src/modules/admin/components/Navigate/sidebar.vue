<template>
  <v-navigation-drawer floating app width="260" class="app-navigation-menu">
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link to="/" class="d-flex align-center text-decoration-none">
        <v-img
          :src="require('@/assets/images/Header/logo.png')"
          max-height="35px"
          max-width="140px"
          alt="wolmart"
          contain
          eager
          class="app-logo me-3"
        />
      </router-link>
    </div>
    <v-list expand shaped class="vertical-nav-menu-items pr-5">
      <nav-menu-link
        title="Dashboard"
        :icon="icons.mdiHomeOutline"
        to="/admin/dashboard"
      />
      <nav-menu-link
        title="Settings"
        :icon="icons.mdiAlphaTBoxOutline"
        to="/admin/profile"
      />
      <nav-menu-link
        title="Files"
        :icon="icons.mdiFileOutline"
        to="/"
      />
      <nav-menu-group title="Accounts" :icon="icons.mdiFileOutline">
        <nav-menu-link
          title="Profile"
          :icon="icons.mdiAccountCogOutline"
          to="/"
        />
        <nav-menu-link
          title="Purchase"
          :icon="icons.mdiAccountCogOutline"
          to="/"
        />
        <nav-menu-link
          title="Helps"
          :icon="icons.mdiFileOutline"
          to="/"
        />
      </nav-menu-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import NavMenuLink from '@/modules/admin/components/Navigate/NavMenuLink';
import NavMenuGroup from "@/modules/admin/components/Navigate/NavMenuGroup";
import { mdiHomeOutline, mdiAlphaTBoxOutline, mdiFileOutline, mdiAccountCogOutline } from '@mdi/js';
export default {
  name: 'sidebar',
  components: { NavMenuLink, NavMenuGroup },
  data() {
    return {
      icons: {
        mdiHomeOutline,
        mdiFileOutline,
        mdiAlphaTBoxOutline,
        mdiAccountCogOutline
      },
    };
  },
};
</script>

<style scoped></style>
