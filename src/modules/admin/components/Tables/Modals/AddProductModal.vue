<template>
  <modal
    modal-width="700"
    modal-title="Thêm sản phẩm"
    :modal-active="dialog"
    modal-color="#fff"
    modal-position="end"
    :modal-button="[
      {
        title: 'Hủy',
        color: '#B2B2B2',
        outlined: false,
        methods: 'closeModal',
      },
      {
        title: 'Lưu',
        color: 'primary',
        methods: 'onSubmit',
      },
    ]"
    @closeModal="closeModal"
    @onSubmit="onSubmit"
  >
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          single-line
          dense
          hide-details="auto"
          outlined
          label="Nhập tên sản phẩm"
          v-model="valueForm.name"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          single-line
          dense
          hide-details="auto"
          outlined
          label="Nhập giá sản phẩm"
          v-model="valueForm.original_price"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-file-input
          multiple
          single-line
          :prepend-icon="null"
          label="Hình ảnh sản phẩm"
          hide-details="auto"
          show-size
          outlined
          dense
          accept="image/*"
          v-model="valueForm.image"
        ></v-file-input>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
          single-line
          dense
          hide-details="auto"
          outlined
          label="Số lượng sản phẩm"
          value="0"
          v-model="valueForm.quantity"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select
          single-line
          dense
          hide-details="auto"
          outlined
          label="Giảm giá"
          :items="discounts"
          v-model="valueForm.discount"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select
          single-line
          dense
          hide-details="auto"
          outlined
          label="Danh mục sản phẩm"
          :items="categories"
          item-text="name"
          item-value="id"
          v-model="valueForm.category_id"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-select
          single-line
          dense
          hide-details="auto"
          outlined
          label="Tình trạng sản phẩm"
          :items="status"
          item-text="name"
          item-value="id"
          v-model="valueForm.status"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <div class="d-flex">
          <v-checkbox
            class="mr-3"
            dense
            label="Miễn phí ship"
            v-model="valueForm.is_free_shipping"
          ></v-checkbox>
          <v-checkbox dense label="Quà tặng" v-model="valueForm.is_gift"></v-checkbox>
        </div>
      </v-col>
      <v-col cols="12">
        <v-textarea
          single-line
          dense
          auto-grow
          outlined
          hide-details="auto"
          label="Mô tả sản phẩm"
          v-model="valueForm.description"
        ></v-textarea>
      </v-col>
    </v-row>
  </modal>
</template>

<script>
import { productApis } from '@/apis'
import Modal from '@/components/Modal';

export default {
  name: 'AddProductModal',
  components: { Modal },
  props: {
    categories: { type: Array },
    dialog: { type: Boolean, default: false },
  },
  data() {
    return {
      discounts: [0, 5, 10, 15, 20, 25, 30],
      status: ['Còn hàng', 'Hết hàng'],
      valueForm: {
        name: '',
        image: null,
        status: '',
        is_gift: false,
        discount: 0,
        quantity: 0,
        category_id: '',
        description: '',
        original_price: 0,
        is_free_shipping: false,
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('update:dialog', false);
    },
    async onSubmit() {
      const {
        name,
        image,
        status,
        is_gift,
        discount,
        quantity,
        category_id,
        description,
        original_price,
        is_free_shipping,
      } = this.valueForm;
      const formData = new FormData();
      const convertGift = Number(is_gift);
      const convertFreeShip = Number(is_free_shipping);

      formData.append('name', name);
      formData.append('status', status);
      formData.append('is_gift', convertGift);
      formData.append('discount', discount);
      formData.append('quantity', quantity);
      formData.append('image', image[0]);
      formData.append('description', description);
      formData.append('category_id', category_id);
      formData.append('original_price', original_price);
      formData.append('is_free_shipping', convertFreeShip);

      try {
        const response = await productApis.createProduct(formData);
        if (response.status === 200) {
          this.$toasted.show('Thêm thành công').goAway(500);
        }
      } catch (error) {
        throw new Error('Something went wrong.');
      }
    },
  },
};
</script>
