<template>
  <v-card>
    <v-tabs v-model="tab" show-arrows>
      <v-tab v-for="tab in tabs" :key="tab.title">
        <v-icon size="20" class="me-3">
          {{ tab.icon }}
        </v-icon>
        <span class="text-xs font-weight-medium">{{ tab.title }}</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <account />
      </v-tab-item>
      <v-tab-item>
        <security />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mdiAccountOutline, mdiLockOpenOutline } from '@mdi/js';
import Account from '@/modules/admin/components/Settings/Account';
import Security from "@/modules/admin/components/Settings/Security";

export default {
  name: 'Settings',
  components: { Account, Security },
  data() {
    return {
      tab: '',
      tabs: [
        { title: 'Account', icon: mdiAccountOutline },
        { title: 'Security', icon: mdiLockOpenOutline },
      ],
    };
  },
};
</script>

<style scoped></style>
