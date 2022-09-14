<template>
  <div class="d-flex justify-center flex-column wid">
    <div>
      <v-text-field
        label="Login"
        hide-details="auto"
        v-model="dadosUsuario.name"
      ></v-text-field>
      <v-text-field label="senha" v-model="dadosUsuario.senha"></v-text-field>
      <v-text-field
        label="confirmar senha"
        v-if="!logando"
        class="mp0"
        v-model="dadosUsuario.senha2"
      ></v-text-field>
    </div>
    <v-btn depressed elevation="2" @click="redirectLogado" v-if="logando"
      >Logar</v-btn
    >
    <v-btn
      class="bmargin"
      depressed
      elevation="2"
      @click="redirectLogin"
      v-if="!logando"
      >Registrar</v-btn
    >
    <a class="mt-5" @click="redirectRegistro">Nao tem conta? registre-se</a>
    <div :key="erro.id" v-for="erro in errors">
      <v-alert class="mt-10" border="bottom" color="pink darken-1" dark>
        {{ erro }}
      </v-alert>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      dadosUsuario: {
        name: "",
        senha: "",
        senha2: "",
      },
    };
  },
  methods: {
    redirectLogado() {
      this.$emit("logar", this.dadosUsuario);
    },
    redirectLogin() {
      this.$emit("registrei", this.dadosUsuario);
    },
    redirectRegistro() {
      this.$router.push("/registro");
    },
  },
  props: {
    logando: Boolean,
    errors: Array,
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
