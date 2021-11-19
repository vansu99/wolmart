export default {
  CATEGORIES(state, value) {
    state.categories = [...value];
  },
  CATEGORY_ID(state, value) {
    return (state.categoryId = [...state.categories].find((item) => item.id === value));
  },
};
