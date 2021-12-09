<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
    left
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        append-icon="mdi-calendar"
        dense
        outlined
        readonly
        v-bind="attrs"
        hide-details
        class="date-picker"
        :placeholder="placeholder"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable :min="min" :max="max"> </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    min: {
      type: String,
      default: null,
    },
    max: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'dd/MM/yyy',
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      date: null,
      menu: false,
    };
  },
  watch: {
    value(val) {
      this.date = val;
    },
    date(val) {
      this.$emit('update:value', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.date-picker {
  &::v-deep {
    .mdi-calendar::before {
      color: #1ea0dc;
    }
  }
}
</style>
