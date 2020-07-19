<template>
  <v-app-bar
    flat
    prominent
    :height="!$vuetify.breakpoint.xs ? 200 : 160"
    app
    color="primary"
    dark
  >
    <v-row no-gutter align="end">
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
              class="text-xl-h6 text-lg-h6 text-md-h6 text-sm-h6 text-subtitle-1"
            >
              Electrical Engineer
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-col v-if="$vuetify.breakpoint.xs" class="py-0">
          <profLinks></profLinks>
        </v-col>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.xs" class="py-0" cols="4" xs="2">
        <profLinks></profLinks>
      </v-col>
      <v-spacer></v-spacer>
      <v-col v-if="!$vuetify.breakpoint.xs" class="py-0" md="5" align="end">
        <v-btn text href="mailto:gotenks33@gmail.com" class="text-lowercase">
          <v-icon small class="pr-2">mdi-gmail</v-icon>
          gotenks33@gmail.com
        </v-btn>
        <div
          v-show="!$vuetify.breakpoint.sm"
          class="text-capitalize v-btn text-body-2 font-weight-medium pr-4"
          style="background-color: unset;"
        >
          <v-icon small class="pr-2">mdi-map-marker-radius</v-icon>
          Tel-Aviv, Israel
        </div>
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
