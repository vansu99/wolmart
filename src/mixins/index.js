export default {
  methods: {
    convertSlug(str) {
      return str.split(' ').join('-');
    },
  },
};
