<template>
  <div class="pagination">
    <div class="container">
      <div class="pages-start" v-show="pagination.currentPage !== 1">
        <button @click.prevent="gotoBackPage()">
          <i class="fas fa-angle-double-left"></i>
        </button>
      </div>
      <div class="pages-middle" v-for="count of pages" :key="count">
        <button
          @click.prevent="onChangePaginate(count)"
          :class="pagination.currentPage === count ? 'active' : ''"
        >
          {{ count }}
        </button>
      </div>
      <div class="page-end">
        <button
          :disabled="pagination.currentPage === pages[pages.length - 1]"
          @click.prevent="gotoNextPage()"
        >
          <i class="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getPage } from '@/utils';
export default {
  name: 'Pagination',
  data() {
    return {
      pages: [],
    };
  },
  props: {
    pagination: {},
  },
  watch: {
    pagination: {
      handler() {
        this.pages = Array.from({ length: this.pagination.totalPages }, (_, i) => i + 1);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    getCurrentPage() {
      const { perPage, currentPage } = this.pagination;
      const currPage = Math.ceil((perPage * currentPage) / 20);
      return currPage === 0 ? currPage + 1 : currPage;
    },

    // trigger vao tung page
    onChangePaginate(current) {
      const { pages, currentPage } = getPage(this.pagination.total, current);
      this.$router.replace({ query: { ...this.$route.query, page: current } });
      this.$emit('onChangePaginate', currentPage);
      if (current >= 5) {
        this.pages = [...pages];
      }
    },

    // trigger icon next
    gotoNextPage(event) {
      if (this.getCurrentPage() === this.pages[this.pages.length - 1]) {
        event.preventDefault();
      }

      const nextPage = this.getCurrentPage() + 1;
      this.$router.replace({ query: { ...this.$route.query, page: nextPage } });
      this.$emit('onChangePaginate', nextPage);
    },

    // trigger icon back
    gotoBackPage() {
      const prevPage = this.getCurrentPage() - 1;
      this.$router.replace({ query: { ...this.$route.query, page: prevPage } });
      this.$emit('onChangePaginate', prevPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  padding: 0.5rem 0;
  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .pages-start,
    .pages-middle,
    .page-end {
      width: 3rem;
      height: 3rem;
      border-radius: 4px;
      overflow: hidden;
      margin: 0 4px;

      button {
        outline: none;
        border: 1px solid $bg-primary;
        overflow: hidden;
        border-radius: inherit;
        width: 100%;
        height: 100%;
        font-size: 1.4rem;
        cursor: pointer;
        &.active {
          background-color: $hover-color;
          color: $text-white-light;
        }
        &:disabled {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
