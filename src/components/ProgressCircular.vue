<template>
  <div class="text-center">
    <v-progress-circular
      v-for="circulo in tasks"
      :key="circulo.id"
      :rotate="360"
      :size="100"
      :width="12"
      :value="value"
      aquiiiiiii
      :color="
        circulo.nome == 'Financeiro' || circulo.nome == 'educacao'
          ? 'teal'
          : 'red'
      "
    >
      <p>{{ value }} <br />{{ circulo.nome }}</p>
    </v-progress-circular>

    <a @click="redirectProjects">Cadastro De Tipos de Projetos das tasks</a>
    <br />
    <a @click="redirectListar">Ir Para Listagem</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: {},
      value: 12,
    };
  },
  props: {
    tasks: Array,
  },
  methods: {
    redirectProjects() {
      this.$router.push("/projects");
    },
    redirectListar() {
      this.$router.push("/listar");
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  // mounted() {
  //   this.interval = setInterval(() => {
  //     if (this.value === 100) {
  //       return (this.value = 0);
  //     }
  //     this.value += 10;
  //   }, 1000);
  // },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
