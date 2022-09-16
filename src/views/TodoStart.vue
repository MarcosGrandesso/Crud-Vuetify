<template>
  <div>
    <NavBar :voulogar="true" />
    <div class="flex-direction-row">
      <div class="conteudo-1">
        <h1 class="titulo-2">More than a just Todo List</h1>
        <p class="paragrafo margin-2">
          Build yours tasks brand's recognition and get detailed insights on how
          your links are performing
        </p>

        <button class="button-3" @click="redirectLogin">Get Started</button>
      </div>

      <div class="img-1">
        <img
          src="https://marcosgrandesso.github.io/D8-url-shortening-api-master/illustration-working.svg"
          alt=""
          class="imagem-1"
        />
      </div>
    </div>

    <FooTer />
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar.vue";
import FooTer from "../layouts/FooTer.vue";

export default {
  methods: {
    redirectLogin() {
      this.$router.push("/login");
    },
  },
  components: {
    FooTer,
    NavBar,
  },
};
</script>

<style>
* {
  font-family: "Oswald", sans-serif;
  font-family: "Red Hat Display", sans-serif;
}
.flex-direction-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  margin-bottom: 100px;
  margin-top: 10rem;
}
.conteudo-1 {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100px;
}
.titulo-2 {
  font-size: 50px;
  font-weight: bold;
}
.paragrafo {
  color: grey;
  font-size: 20px;
}
.margin-2 {
  margin-top: 13px;
  margin-bottom: 15px;
}
.button-3 {
  padding: 10px;
  width: 150px;
  border: none;
  background-color: #5fdcdc;
  border-radius: 30px;
  color: white;
  font-weight: 600;
}
.img-1 {
  display: flex;
  flex-direction: row;
}
.imagem-1 {
  width: 25em;
  height: 25em;
}
.ciano {
  color: #5fdcdc;
}
</style>
