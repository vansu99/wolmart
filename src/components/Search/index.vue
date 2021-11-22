<template>
  <div class="form d-flex">
    <div class="search-input">
      <input
        type="text"
        placeholder="Tìm sản phẩm..."
        v-model="searchText"
        @keyup.enter="handleSearch"
        @input="handleSearchAuto"
      />
      <button type="button" class="search-btn" @click="handleSearch">
        <img class="icon-search" src="../../assets/images/Shared/search.png" alt="search-icon" />
      </button>
    </div>
    <template v-if="show">
      <div class="search-result" v-click-outside="hideResult">
        <div @click.prevent="showSearchText(item.name)" v-for="item in limitResult" :key="item.id">
          <router-link
            :to="{
              name: 'ProductDetail',
              params: { slug: convertSlug(item.name), categoryId: item.category_id, productId:
              item.id },
            }"
            class="search-result-item"
          >
            <img src="../../assets/images/Shared/search.png" alt="" />
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import mixins from '@/mixins';
export default {
  name: 'Search',
  mixins: [mixins],
  props: {
    results: {
      type: Array,
      default: () => [],
    },
    max: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    limitResult() {
      return this.results.slice(0, this.max);
    },
  },
  watch: {
    results(value) {
      this.show = value.length > 0;
    },
  },
  data() {
    return {
      searchText: '',
      show: false,
      timeout: 700
    };
  },
  methods: {
    handleSearch() {
      this.$emit('onSearch', this.searchText);
    },
    handleSearchAuto(e) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.$emit('onSearch', e.target.value);
      }, 700)
    },
    hideResult() {
      this.show = false;
    },
    showSearchText(name) {
      this.searchText = name;
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  width: 55rem;
  margin: 0 auto;
  align-items: center;
  min-width: auto;
  max-width: 55.6rem;
  border: 0.3rem solid #336699;
  border-radius: 0.3rem;
  .search-input {
    width: 100%;
    @include flexSpaceBetween;
    input {
      border: none;
      outline: none;
      height: 100%;
      padding: 0 1.5rem;
      display: block;
      flex: 1 0 0;
      color: #666;
      font-size: 1.6rem;
    }
    .search-btn {
      width: 5rem;
      height: 4.7rem;
      background-color: white;
      border: none;
      outline: none;
      cursor: pointer;
      .icon-search {
        width: 2rem;
        height: 2rem;
        object-fit: cover;
      }
    }
  }
  .search-result {
    position: absolute;
    left: 0;
    right: 0;
    top: 120%;
    height: auto;
    background-color: #fff;
    z-index: 99;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;

    &-item {
      @include flexVerticalCenter;
      padding: 1.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: $text-primary;

      img {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 1rem;
      }
    }
  }
}
</style>
