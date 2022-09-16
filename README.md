# vutodo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

<template>
  <div>
    <NavBar />
    <FormsLogin :logando="logando" @logar="redirectLogado" />
  </div>
</template>
<script>
import NavBar from "../layouts/NavBar.vue";
import FormsLogin from "../components/FormsLogin.vue";
import TasksApi from "../api/TasksApi";

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

<template>
  <v-app-bar app color="red darken-3" dark style="padding: 0px">
    <div class="d-flex align-center">
      <h1>Kanban with Vuetify</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn text @click="redirectCreate" v-if="voucriar">
      <span class="mr-2">Criar</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn text @click="redirectLogin" v-if="voulogar">
      <span class="mr-2">Login</span>
      <v-icon>mdi-account-card</v-icon>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  props: {
    voulogar: Boolean,
    voucriar: Boolean,
  },
  methods: {
    redirectLogin() {
      this.$router.push("/login");
    },
    redirectCreate() {
      this.$router.push("/create");
    },
  },
};
</script>
