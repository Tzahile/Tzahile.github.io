<template>
  <v-app>
    <appBar></appBar>
    <v-main>
      <personalData />
    </v-main>
  </v-app>
</template>

<script>
import personalData from "./components/personalData";
import appBar from "./components/appBar";
export default {
  name: "App",

  components: {
    personalData,
    appBar,
  },
};
</script>
