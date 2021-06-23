<template>
  <v-app-bar
    flat
    prominent
    :height="!$vuetify.breakpoint.xs ? 200 : 149"
    app
    color="primary"
    dark
  >
    <v-row id="avatarRow" no-gutter align="end">
      <v-col align-self="start" class="pa-0" cols="auto">
        <v-avatar tile size="150">
          <v-img src="../assets/cvFinal.jpeg"></v-img>
        </v-avatar>
      </v-col>
      <v-col
        class="py-0"
        xl="9"
        xs="3"
        md="8"
        sm="8"
        align="start"
        :class="{ 'px-0': $vuetify.breakpoint.xs }"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              class="text-xl-h5 text-lg-h5 text-md-h5 text-sm-h5 text-h6"
            >
              Izhak Lehmann
            </v-list-item-title>
            <v-list-item-subtitle
              class="
                text-xl-h6 text-lg-h6 text-md-h6 text-sm-h6 text-subtitle-1
              "
            >
              Fullstack Developer
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-col
          v-if="$vuetify.breakpoint.xs"
          class="py-0"
          :class="{ 'pb-1': $vuetify.breakpoint.xs }"
        >
          <profLinks></profLinks>
        </v-col>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.xs" class="py-0" cols="4" xs="2">
        <profLinks></profLinks>
      </v-col>
      <v-spacer></v-spacer>
      <v-col v-if="!$vuetify.breakpoint.xs" class="py-0" md="5" align="end">
        <v-btn icon href="mailto:gotenks33@gmail.com">
          <v-icon>mdi-gmail</v-icon>
        </v-btn>
        <v-btn icon href="https://wa.me/972545269666">
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import profLinks from "./profLinks.vue";

export default {
  components: {
    profLinks,
  },
};
</script>

<style lang="scss">
#avatarRow.row {
  margin: -5px 0px 0px -16px;
}
</style>
