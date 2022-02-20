<template>
  <modal
    modal-width="350"
    modal-title="Thông báo"
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
        title: 'Xóa',
        color: 'primary',
        methods: 'deleteConfirm',
      },
    ]"
    @closeModal="closeModal"
    @deleteConfirm="deleteConfirm"
  >
    <h3 class="text-sm">Bạn có chắc muốn xóa sản phẩm này?</h3>
  </modal>
</template>

<script>
import Modal from '@/components/Modal';
import { productApis } from '@/apis';

export default {
  name: 'RemoveProductModal',
  components: { Modal },
  props: ['dialog', 'productId'],
  methods: {
    closeModal() {
      this.$emit('update:dialog', false);
    },
    async deleteConfirm() {
      try {
        const response = await productApis.removeProduct(this.productId);
        if (response.status === 200) {
          this.closeModal();
          this.$toasted.success('Xóa thành công').goAway(500);
        }
      } catch (error) {
        throw new Error('Something went wrong');
      }
    },
  },
};
</script>
