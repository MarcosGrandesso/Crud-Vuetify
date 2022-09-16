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
    <FooTer />
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar.vue";
import FooTer from "../layouts/FooTer.vue";

export default {
  methods: {
    redirectLogin() {
      this.$router.push("/login");
    },
  },
  components: {
    FooTer,
    NavBar,
  },
};
</script>

<style>
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
