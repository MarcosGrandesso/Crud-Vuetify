<template>
  <div class="d-flex justify-center flex-column wid">
    <template>
      <div>
        <v-text-field
          label="Login"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-text-field label="senha"></v-text-field>
        <v-text-field
          label="confirmar senha"
          v-if="!logando"
          class="mp0"
        ></v-text-field>
      </div>
    </template>
    <v-btn depressed elevation="2" @click="redirectLogado" v-if="logando"
      >Logar</v-btn
    >
    <v-btn
      class="bmargin"
      depressed
      elevation="2"
      @click="redirectLogado"
      v-if="!logando"
      >Registrar</v-btn
    >
    <a @click="redirectRegistro">Nao tem conta? registre-se</a>
  </div>
</template>
<script>
export default {
  methods: {
    redirectLogado() {
      this.$router.push("/painel");
    },
    redirectRegistro() {
      this.$router.push("/registro");
    },
  },
  props: {
    logando: Boolean,
  },
};
</script>
<style>
.wid {
  width: 33%;
  margin: auto;
  margin-top: 5rem;
}
.mp0 {
  margin: 0px;
  padding: 0px;
}
</style>
