<template>
  <div class="breadcrumb" v-if="this.$route.meta.breadcrumb">
    <div class="container">
      <div class="breadcrumb-list">
        <router-link
          v-for="(item, index) in breadcrumbs"
          :to="item.path"
          :key="index"
          class="breadcrumb-link"
        >
          {{ item.title }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import titleCase from 'ap-style-title-case';
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbs: [],
    };
  },
  watch: {
    '$route.path': {
      handler(value) {
        this.breadcrumbs = [{ title: 'Home', path: '/' }];

        if(this.$route.meta.title) {
          this.breadcrumbs.push({
            title: this.$route.meta.title,
            path: value,
          });
        }

        if (this.breadcrumbs.filter((item) => item.path === value).length === 0) {
          this.breadcrumbs.push({
            title: titleCase(this.$route.params.slug.replace(/-/g, ' ')),
            path: value,
          });
        } else {
          this.breadcrumbs.forEach((item, index, obj) => {
            if (item.path === value) {
              obj.splice(index + 1, 1);
            }
          });
        }
      },
      deep: true,
      immediate: true
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 2rem 0;
  background-color: #e2e3e4;
  &-list {
    display: flex;
  }
  &-link {
    font-size: 1.5rem;
    color: $text-primary;
    position: relative;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    &:not(:first-child) {
      margin-left: 1rem;
    }
    &:after {
      content: '\f054';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: 1rem;
      position: absolute;
      display: inline-block;
      color: $text-light;
      right: 0;
    }
    &:last-child:after {
      content: '';
    }
    &.router-link-exact-active {
      color: $bg-primary;
    }
  }
  &-space {
    margin: 0 1rem;
  }
}
</style>
