import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken1,
        secondary: colors.grey.lighten1,
        accent: colors.indigo.lighten1,
        error: colors.red.darken1,
        info: colors.blue.lighten3,
        success: colors.green.lighten2,
        warning: colors.amber.darken1,
      },
    },
  },
});
