<template>
  <v-app-bar flat prominent :height="xs ? 149 : 200" app color="blue-darken-2" dark>
    <v-row no-gutters align="end">
      <v-col align-self="start" class="pa-0" cols="auto">
        <v-avatar id="avatarRow" rounded size="150">
          <v-img src="../assets/cvFinal.jpeg"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="py-0" xl="9" xs="3" md="8" sm="8" align="start" :class="{ 'px-0': xs }">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-xl-h5 text-lg-h5 text-md-h5 text-sm-h5 text-h6">
              Izhak Lehmann
            </v-list-item-title>
            <v-list-item-subtitle class="text-xl-h6 text-lg-h6 text-md-h6 text-sm-h6 text-subtitle-1">
              Fullstack Developer
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-col v-if="xs" class="py-0" :class="{ 'pb-1': xs }">
          <ProfileLinks />
        </v-col>
      </v-col>
      <template v-if="!xs">
        <v-col cols="4">
          <ProfileLinks />
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2" class="flex py-0" align="end">
          <v-btn icon href="mailto:gotenks33@gmail.com">
            <v-icon>mdi-gmail</v-icon>
          </v-btn>
          <v-btn icon href="https://wa.me/972545269666">
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>
        </v-col>
      </template>
    </v-row>
  </v-app-bar>
</template>

<script setup lang="ts">
import ProfileLinks from "./ProfileLinks.vue";
import { useDisplay } from "vuetify";

const { xs } = useDisplay();
</script>
<style>
#avatarRow {
  margin-top: -2px
}
</style>