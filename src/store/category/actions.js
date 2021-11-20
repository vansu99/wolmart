export default {
  getCategories({ commit }, value) {
    commit('CATEGORIES', value);
  },
  getCategoryById({ commit }, value) {
    commit('CATEGORY_ID', value);
  },
};
