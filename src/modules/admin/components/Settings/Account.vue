<template>
  <v-card flat class="pa-3 mt-2">
    <v-card-text class="d-flex">
      <v-avatar rounded size="120" class="me-6">
        <v-img :src="require('@/assets/images/Authentication/avatar.png')"></v-img>
      </v-avatar>
      <div>
        <v-btn color="primary" class="me-3 mt-5" @click="$refs.refInputEl.click()">
          <span class="d-none d-sm-block sm:text-subtitle-1">Upload new photo</span>
        </v-btn>
        <input ref="refInputEl" type="file" accept=".jpeg,.png,.jpg,GIF" :hidden="true" />
        <p class="text-sm mt-5">Allowed JPG, GIF or PNG. Max size of 800K</p>
      </div>
    </v-card-text>

    <v-card-text>
      <v-form class="mt-6" @submit.prevent="onSubmit">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="accountInfo.name"
              placeholder="Tên của bạn"
              dense
              outlined
              :rules="rules.account_name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="accountInfo.address"
              placeholder="Địa chỉ của bạn"
              dense
              outlined
              :rules="rules.account_address"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="accountInfo.email"
              disabled
              placeholder="Địa chỉ email"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="accountInfo.phone"
              label="Số điện thoại của bạn"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="accountInfo.gender"
              label="Giới tính của bạn"
              dense
              outlined
              :items="gender"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <date-picker :value.sync="accountInfo.birthday" />
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" type="submit" class="me-3 mt-4 text-xs">Cập nhật</v-btn>
            <v-btn color="secondary" outlined class="mt-4 text-xs">Hủy</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAlertOutline, mdiCloudUploadOutline } from '@mdi/js';
import { userApis } from '@/apis';
import DatePicker from '@/components/DatePicker';
export default {
  name: 'Account',
  components: { DatePicker },
  data() {
    return {
      menu: false,
      valid: false,
      gender: [
        { text: 'Nam', value: 'male' },
        { text: 'Nữ', value: 'female' },
      ],
      icons: { mdiAlertOutline, mdiCloudUploadOutline },
      accountInfo: {
        name: '',
        gender: '',
        email: '',
        birthday: '',
        phone: '',
        address: '',
      },
      rules: {
        account_name: [(v) => /^([Aa-zZ]|ー)+$/.test(v) || !v || 'Vui lòng nhập tên của bạn'],
        account_address: [
          (v) => /^([Aa-zZ,0-9]|ー)+$/.test(v) || !v || 'Vui lòng nhập địa chỉ của bạn',
        ],
      },
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    onSubmit() {
      console.log(this.accountInfo);
    },
    async getUser() {
      try {
        const response = await userApis.getUserInfo();
        this.accountInfo = { ...response.data };
      } catch (e) {
        throw new Error('Error: ', e);
      }
    },
  },
};
</script>

<style lang="scss">
.v-list-item__title {
  font-size: 1.3rem !important;
  line-height: 1.4 !important;
}
</style>
