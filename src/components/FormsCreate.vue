<template>
  <div class="d-flex justify-center flex-column wid">
    <v-form ref="form" lazy-validation>
      <v-text-field
        label="Name"
        v-model="criacao.title"
        required
      ></v-text-field>

      <v-text-field
        label="user"
        v-model="criacao.usuario"
        required
      ></v-text-field>

      <v-select :items="itens" v-model="criacao.project" label="Item" required>
      </v-select>

      <v-btn color="success" class="mr-4" @click="sendCriar">
        Criar Task
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      criacao: {
        title: "",
        usuario: "",
        project: "",
      },
    };
  },
  props: {
    itens: Array,
  },
  methods: {
    sendCriar() {
      this.$emit("Criar-Task", this.criacao);
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
