<template>
  <div class="wid">
    <v-text-field
      label="Nome do tipo de Projeto"
      :rules="rules"
      hide-details="auto"
      v-model="obj.nome"
    ></v-text-field>
    <v-text-field
      label="URL de uma imagem Pra task"
      v-model="obj.imagem"
    ></v-text-field>
    <v-btn tile color="success" @click="chamaCreateProject">
      <v-icon left> mdi-pencil </v-icon>
      Criar
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    obj: {
      nome: "",
      imagem: "",
    },
  }),
  methods: {
    chamaCreateProject() {
      this.$emit("create-project", this.obj);
    },
  },
};
</script>

<style scoped>
.wid {
  width: 33%;
  margin: auto;
  margin-top: 5rem;
}
</style>
