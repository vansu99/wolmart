<template>
  <div class="pagination">
    <div class="container">
      <div
        v-for="(page, key) in showPagination" :key="key"
        @click=" active = key; if(key == 2 || key == 4) changePagination(key);"
        :class="(active == key || (page == lengthPage - 1 && active == 4)) ? 'active' : ''" >
          <div class="pages" v-if="page != null"> 
            {{ page }}
          </div>  
      </div>
      <div class="pages"
        @click="active = lengthPage; changePagination(lengthPage); "
        :class="active == lengthPage ? 'active' : ''" >
          End
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  data() {
    return {
      lengthPage: 11,
      active: 0,
      showPagination: [],
    };
  },
  created() {
    for (let i = 0; i < (this.lengthPage <= 5 ? this.lengthPage : 5); i++) {
        this.showPagination[i] = i + 1;
      }
  },
  methods: {
    changePagination(key) {
      console.log("active: " + this.active);
      console.log(key);
      if(key == this.lengthPage) {
        this.showPagination[2] = '...';
        this.showPagination[3] = this.lengthPage - 2;
        this.showPagination[4] = this.lengthPage - 1;
      } else 
      if(key == 2) {
        if(this.showPagination[4] == null) {
          this.showPagination[4] = this.showPagination[3] + 1;
        } 
        if(this.showPagination[3] == 5) {
          this.showPagination[2] = 3;
          this.showPagination[3] = 4;
          this.showPagination[4] = 5;
        }
        if(this.showPagination[3] != 4) {
          this.showPagination[3]-=2;
          this.showPagination[4]-=2;
        }
        if(this.showPagination[3] != 4) {
          this.showPagination[2] = '...';
        } else {
          this.showPagination[2] = 3;
        }
      } else {
        if(this.showPagination[4] == null) return;
        if(this.showPagination[4] + 1 < this.lengthPage) {
          this.showPagination[3]+=2;
          this.showPagination[4]+=2;
          if(this.showPagination[4] == this.lengthPage) {
            this.showPagination[4] = null;
            this.$set(this.showPagination,4,this.showPagination[4]);
          }
          this.showPagination[2] = '...';
        }
      }
      this.$set(this.showPagination,3,this.showPagination[3]);
    },
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  .container {
    display: flex;
    justify-content: center;
    .pages {
      width: 5rem;
      height: 5rem;
      font-size: 1.2rem;
      line-height: 5rem;
      text-align: center;
      border: 1px solid #eee;
      cursor: pointer;
    }
    .active {
      background-color: #abc;
    }
  }
}
</style>