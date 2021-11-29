import Vue from 'vue';
import preset from './preset';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  preset,
  icons: {
    iconfont: 'mdiSvg',
  },
});
