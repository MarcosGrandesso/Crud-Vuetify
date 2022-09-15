<template>
  <div>
    <NavBar :voulogar="true" />

    <div class="d-flex justify-center flex-column wid">
      <v-row align="center" justify="space-around">
        <v-btn tile color="success" @click="redirectLogin">
          <v-icon left> mdi-pencil </v-icon>
          Clique aqui para comecar a mexer nessa todoList
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar.vue";

export default {
  methods: {
    redirectLogin() {
      this.$router.push("/login");
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style></style>
