<template>
  <div class="text-center">
    <v-progress-circular
      v-for="circulo in tasks"
      :key="circulo.id"
      :rotate="360"
      :size="100"
      :width="10"
      :value="(achaX(circulo.nome).length / listaFull.length) * 100"
      :color="
        circulo.nome == 'Financeiro' || circulo.nome == 'Educacao'
          ? 'teal'
          : 'red'
      "
      class="circulo"
    >
      <p>
        {{ (achaX(circulo.nome).length / listaFull.length) * 100 }} <br />{{
          circulo.nome
        }}
      </p>
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
    };
  },
  props: {
    tasks: Array,
    listaFull: Array,
  },
  methods: {
    redirectProjects() {
      this.$router.push("/projects");
    },
    redirectListar() {
      this.$router.push("/listar");
    },
    achaX(nome) {
      return this.listaFull.filter((titulo) => titulo.project.includes(nome));
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
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
