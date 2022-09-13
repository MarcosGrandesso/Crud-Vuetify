<template>
  <div class="text-center">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="value"
      color="primary"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="90"
      :size="100"
      :width="15"
      :value="value"
      color="red"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="180"
      :size="100"
      :width="15"
      :value="value"
      color="pink"
    >
      {{ value }}
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
      value: 0,
    };
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
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
