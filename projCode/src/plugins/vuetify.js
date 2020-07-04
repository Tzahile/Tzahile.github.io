import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "4fafbe",
        secondary: colors.grey.lighten1,
        accent: "3095a3",
        error: colors.red.darken1,
        info: colors.blue.lighten3,
        success: colors.green.lighten2,
        warning: colors.amber.darken1,
      },
    },
  },
});
