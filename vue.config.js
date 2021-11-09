module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/reset.scss";
          @import "@/assets/styles/shared.scss";
          @import "@/assets/styles/mixins.scss";
          @import "@/assets/styles/variables.scss";
          @import "@/assets/styles/typography.scss";
          @import "@/assets/styles/transition.scss";
        `,
      },
    },
  },
};
