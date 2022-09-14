<template>
  <div>
    <NavBar />
    <FormsLogin :logando="logando" @logar="redirectLogado" />
  </div>
</template>
<script>
import NavBar from "../layouts/NavBar.vue";
import FormsLogin from "../components/FormsLogin.vue";
import TasksApi from "../TasksApi";

export default {
  methods: {
    redirectLogado(dadosUsuario) {
      TasksApi.logar((callback) => {
        this.usuarios = callback;
        // console.log(this.usuarios);
        // console.log(dadosUsuario);
        let user;
        for (user of this.usuarios) {
          if (
            user.name == dadosUsuario.name &&
            user.senha == dadosUsuario.senha
          ) {
            this.$router.push("/painel");
          }
        }
      });
    },
  },
  components: {
    FormsLogin,
    NavBar,
  },
  data: function () {
    return {
      logando: true,
      usuarios: [],
    };
  },
};
</script>
<style>
.wid {
  width: 33%;
  margin: auto;
  margin-top: 5rem;
}
</style>
