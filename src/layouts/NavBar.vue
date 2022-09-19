<template>
  <v-toolbar dense>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>KanBan</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- <button @click="redirect">
      <v-toolbar-title>Criar uma nova task </v-toolbar-title>
    </button> -->
  </v-toolbar>
</template>

<script>
import settings from "@/settings";
export default {
  data: () => ({
    version: settings.version,
    nodeEnv: settings.nodeEnv,
  }),
  methods: {},
};
</script>
<style scoped>
.ciano {
  color: #5fdcdc;
}
</style>
