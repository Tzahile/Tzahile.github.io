<template>
  <div>
    <v-btn
      :small="$vuetify.breakpoint.xs"
      :large="!$vuetify.breakpoint.xs"
      icon
      href="https://github.com/Tzahile"
      target="_blank"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn
      icon
      :small="$vuetify.breakpoint.xs"
      :large="!$vuetify.breakpoint.xs"
      href="https://stackoverflow.com/users/5762431/tzahi-leh"
      target="_blank"
    >
      <v-icon>mdi-stack-overflow</v-icon>
    </v-btn>

    <v-btn
      :small="$vuetify.breakpoint.xs"
      :large="!$vuetify.breakpoint.xs"
      icon
      href="https://www.linkedin.com/in/tzahile"
      target="_blank"
    >
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "profLinks",
};
</script>

<style></style>
