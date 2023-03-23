<template>
  <v-app>
    <AppBar />
    <v-main>
      <PersonalData />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppBar from '@/components/AppBar.vue'
  import PersonalData from '@/components/PersonalData.vue'
</script>
