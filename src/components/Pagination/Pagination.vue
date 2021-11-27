<template>
  <div class="Pagination">
    <div class="container">
      <div class="pages-start" v-if="this.pagination.totalPages >= 6 && clickedPage != 1">
        <button @click.prevent="startPagination()"><i class="fas fa-angle-double-left"></i></button>
      </div>
      <div class="pages-middle" v-for="(item, index) of showPagination" :key="index">
        <button
          @click.prevent="
            pagination.currentPage = item;
            changePagination(index);
          "
          :class="pagination.currentPage == item ? 'active' : ''"
        >
          {{ item }}
        </button>
      </div>
      <div
        class="page-end"
        v-if="
          this.pagination.totalPages >= 6 && pagination.currentPage != this.pagination.totalPages
        "
      >
        <button @click.prevent="endPagination()"><i class="fas fa-angle-double-right"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      showPagination: [],
    };
  },
  props: {
    pagination: {},
  },
  watch: {
    pagination: {
      handler() {
        this.showPagination = [];
        if (this.pagination.totalPages != undefined) {
          let page = this.pagination.totalPages < 5 ? this.pagination.totalPages : 5;
          for (let i = 0; i < page; i++) {
            this.showPagination[i] = i + 1;
          }
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    changePagination(index) {
      this.$emit('changePagination', this.pagination.currentPage); // truyền event lên cha để đổ products phù hợp
      let add = 0;
      if (index == 0 && this.showPagination[0] != 1) {
        // nếu bấm nút đầu tiên thì dịch sang 2 giá trị (4-5-6-7-8) dịch thành (2-3-4-5-6)
        if (this.showPagination[0] - 2 >= 1) {
          add = 2;
        } else if (this.showPagination[0] - 1 >= 1) {
          add = 1;
        }
        for (let i = 0; i < this.showPagination.length; i++) {
          this.showPagination[i] -= add;
        }
        this.$set(this.showPagination, 0, this.showPagination[0]);
      } else if (index == this.showPagination.length - 1) {
        // nếu bấm nút cuối cùng thì dịch sang 2 giá trị dịch (2-3-4-5-6) thành (4-5-6-7-8).
        if (this.showPagination[this.showPagination.length - 1] + 2 <= this.pagination.totalPages) {
          add = 2;
        } else if (
          this.showPagination[this.showPagination.length - 1] + 1 <=
          this.pagination.totalPages
        ) {
          add = 1;
        }
        for (let i = 0; i < this.showPagination.length; i++) {
          this.showPagination[i] += add;
        }
        this.$set(this.showPagination, 0, this.showPagination[0]);
      }
      this.$router.replace({ query: { page: this.pagination.currentPage } });
    },
    endPagination() {
      // nếu bấm nút cuối cùng thì show pagination cuối cùng
      for (let i = 0; i < this.showPagination.length; i++) {
        this.showPagination[this.showPagination.length - i - 1] = this.pagination.totalPages - i;
      }
      this.pagination.currentPage = this.pagination.totalPages;
      this.$set(this.showPagination, 0, this.showPagination[0]);
      this.$emit('changePagination', this.pagination.currentPage);
    },
    startPagination() {
      // nếu bấm về đầu tiên cùng thì show pagination (1-2-3-4-5)...
      for (let i = 0; i < this.showPagination.length; i++) {
        this.showPagination[i] = i + 1;
      }
      this.pagination.currentPage = 1;
      this.$set(this.showPagination, 0, this.showPagination[0]);
      this.$emit('changePagination', this.pagination.currentPage);
    },
  },
};
</script>

<style lang="scss" >
.Pagination {
  padding: 0.5rem 0;
  .container {
    @include flexCenter();
    .pages-start,
    .pages-middle,
    .page-end {
      width: 5rem;
      height: 5rem;
      margin: 0px 1px;
      button {
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
        cursor: pointer;
        &:hover {
          background-color: $bg-contrary-dark;
        }
        &.active {
          background-color: $hover-color;
          color: $text-white-light;
        }
      }
    }
  }
}
</style>