<template>
  <v-app-bar app color="orange" dark style="padding: 0px">
    <div class="d-flex align-center">
      <h1>Kanban with Vuetify</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn text @click="redirectCreate" v-if="voucriar">
      <span class="mr-2">Criar</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn text @click="redirectLogin" v-if="voulogar">
      <span class="mr-2">Login</span>
      <v-icon>mdi-account-card</v-icon>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    voulogar: Boolean,
    voucriar: Boolean,
  },
  methods: {
    redirectLogin() {
      this.$router.push("/login");
    },
    redirectCreate() {
      this.$router.push("/create");
    },
  },
};
</script>
