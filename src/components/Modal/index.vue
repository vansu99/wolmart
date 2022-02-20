<template>
  <v-dialog v-model="modalActive" :width="modalWidth" @click:outside="closeModal">
    <v-sheet max-height="583" elevation="1" color="white" class="modal-wrap">
      <div class="modal-title">
        <h3>{{ modalTitle }}</h3>
        <v-btn class="modal-close" color="#51565B" small @click="closeModal">
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </div>
      <v-sheet class="modal-content" :color="modalColor">
        <slot></slot>
      </v-sheet>
    </v-sheet>

    <div class="modal-action" :class="`justify-${modalPosition}`">
      <div v-for="(item, index) in modalButton" :key="index" class="mr-5">
        <v-btn
          class="modal-button"
          :outlined="item.outlined"
          :color="item.color"
          @click="clickEvent(item.methods)"
          >{{item.title}}</v-btn
        >
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalWidth: String,
    modalTitle: String,
    modalColor: String,
    modalActive: Boolean,
    modalPosition: String,
    modalButton: Array,
    modalKey: String
  },
  methods: {
    clickEvent(event) {
      this.$emit(event);
    },
    closeModal() {
      this.$emit('closeModal')
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &-wrap {
    position: relative;
    overflow-y: auto;
  }

  &-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding: 20px;
    background: #fff;
    z-index: 100;

    h3 {
      color: #000;
      font-weight: 500;
      font-size: 16px !important;
    }
  }

  &-close {
    padding: 0 10px;
    cursor: pointer;
    background-color: #fff !important;
    border: 0 !important;
    box-shadow: none !important;

    .v-icon.v-icon {
      color: #000 !important;
      font-size: 18px !important;
      font-weight: bold !important;
    }
  }

  &-content {
    padding: 20px;
  }

  &-action {
    position: sticky;
    display: flex;
    padding: 20px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 100;
  }

  &-button {
    margin-right: 20px;
    font-size: 13px !important;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>