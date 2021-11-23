<template>
  <div class="Pagination">
    <div class="container">
      <div class="pages-start" v-if="lengthPage >= 6 && clickedPage != 1">
        <button @click.prevent="startPagination()"><i class="fas fa-angle-double-left"></i></button>
      </div>
      <div class="pages-middle" v-for="(item, index) of showPagination" :key="index">
        <button
          @click.prevent="
            changePagination(index);
            clickedPage = item;
          "
          :class="clickedPage == item ? 'active' : ''"
        >
          {{ item }}
        </button>
      </div>
      <div class="page-end" v-if="lengthPage >= 6 && clickedPage != lengthPage">
        <button @click.prevent="endPagination()"><i class="fas fa-angle-double-right"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import Nprogress from 'nprogress';
import { categoryApis } from '@/apis';

export default {
  name: 'Pagination',
  data() {
    return {
      lengthPage: 10,
      showPagination: [],
      clickedPage: 1,
    };
  },
  created() {
    this.getAmountProduct();
  },
  methods: {
    async getAmountProduct() {
      try {
        Nprogress.start();
        //const id = this.$route.params.categoryId;
        const query = this.$route.query;
        const response = await categoryApis.getProductListBaseOnCategory(1, query);
        this.lengthPage = response.pagination.total;
        for (let i = 0; i < (this.lengthPage <= 5 ? this.lengthPage : 5); i++) {
          this.showPagination[i] = i + 1;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.isShow = false;
        Nprogress.done();
      }
    },
    changePagination(index) {
      let add = 0;
      if (index == 0 && this.showPagination[0] != 1) {
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
        if (this.showPagination[this.showPagination.length - 1] + 2 <= this.lengthPage) {
          add = 2;
        } else if (this.showPagination[this.showPagination.length - 1] + 1 <= this.lengthPage) {
          add = 1;
        }
        for (let i = 0; i < this.showPagination.length; i++) {
          this.showPagination[i] += add;
        }
        this.$set(this.showPagination, 0, this.showPagination[0]);
      }
    },
    endPagination() {
      for (let i = 0; i < this.showPagination.length; i++) {
        this.showPagination[this.showPagination.length - i - 1] = this.lengthPage - i;
      }
      this.clickedPage = this.lengthPage;
      this.$set(this.showPagination, 0, this.showPagination[0]);
    },
    startPagination() {
      for (let i = 0; i < this.showPagination.length; i++) {
        this.showPagination[i] = i + 1;
      }
      this.clickedPage = 1;
      this.$set(this.showPagination, 0, this.showPagination[0]);
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