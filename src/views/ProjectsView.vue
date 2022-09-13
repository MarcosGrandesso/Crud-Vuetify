<template>
  <div>
    <NavBar />

    <div v-if="criando">
      <CardProject />
    </div>
    <div class="d-flex justify-center mt-10">
      <v-btn color="green lighten-1" text @click="toggle">
        Criar Tipo de projeto
      </v-btn>
    </div>
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar.vue";
import CardProject from "../components/CardProject.vue";
export default {
  components: {
    CardProject,
    NavBar,
  },
  data: function () {
    return {
      criando: false,
    };
  },
  methods: {
    toggle() {
      if (this.criando == false) {
        this.criando = true;
      } else {
        this.criando = false;
      }
    },
  },
};
</script>
