<template>
  <v-card flat class="mt-5">
    <v-form>
      <div class="px-3">
        <v-card-text class="pt-5">
          <v-row>
            <v-col cols="12" md="6" sm="8">
              <v-text-field
                v-model="pwdInfo.currentPassword"
                :type="isCurrentPasswordVisible ? 'text' : 'password'"
                :append-icon="
                  isCurrentPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline
                "
                label="Current Password"
                outlined
                dense
                @click:append="isCurrentPasswordVisible = !isCurrentPasswordVisible"
              ></v-text-field>
              <v-text-field
                v-model="pwdInfo.newPassword"
                :type="isNewPasswordVisible ? 'text' : 'password'"
                :append-icon="isNewPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                label="New Password"
                outlined
                dense
                hint="Make sure it's at least 8 characters."
                persistent-hint
                @click:append="isNewPasswordVisible = !isNewPasswordVisible"
              ></v-text-field>
              <v-text-field
                v-model="pwdInfo.cPassword"
                :type="isCPasswordVisible ? 'text' : 'password'"
                :append-icon="isCPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                label="Confirm New Password"
                outlined
                dense
                class="mt-3"
                @click:append="isCPasswordVisible = !isCPasswordVisible"
              ></v-text-field>
              <v-btn color="primary" class="text-xs">Cập nhật</v-btn>
              <v-btn color="secondary" outlined class="ml-2 text-xs">Hủy</v-btn>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              md="6"
              class="d-none d-sm-flex justify-center position-relative"
            >
              <v-img
                contain
                max-width="170"
                :src="require('@/assets/images/Shared/acc-security.png')"
                class="security-character"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import { mdiKeyOutline, mdiLockOpenOutline, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js';
export default {
  name: 'Security',
  data() {
    return {
      isCurrentPasswordVisible: false,
      isNewPasswordVisible: false,
      isCPasswordVisible: false,
      pwdInfo: {
        currentPassword: 123456,
        newPassword: 123456789,
        cPassword: 123456789,
      },
      icons: {
        mdiKeyOutline,
        mdiLockOpenOutline,
        mdiEyeOffOutline,
        mdiEyeOutline,
      },
    };
  },
};
</script>

<style scoped></style>
