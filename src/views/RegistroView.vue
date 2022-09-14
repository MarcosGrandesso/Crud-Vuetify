<template>
  <div>
    <NavBar :voulogar="true" />
    <FormsLogin @registrei="redirectLogin" :errors="erros" />
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar.vue";
import FormsLogin from "../components/FormsLogin.vue";
import TasksApi from "../TasksApi";

export default {
  data: function () {
    return {
      erros: [],
    };
  },
  methods: {
    redirectLogado() {
      console.log("oi");
      this.$router.push("/painel");
    },
    redirectLogin(dadosUsuario) {
      if (
        dadosUsuario.senha === dadosUsuario.senha2 &&
        dadosUsuario.senha.length >= 3 &&
        dadosUsuario.name.length >= 3
      ) {
        TasksApi.criarUsuario(dadosUsuario);
        this.$router.push("/login");
      } else {
        this.erros.push("Senha ou usuario invalidos");
        console.log(this.erros);
        setTimeout(() => {
          this.erros = [];
        }, "3000");
      }
    },
  },
  components: {
    FormsLogin,
    NavBar,
  },
};
</script>
