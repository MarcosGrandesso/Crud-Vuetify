<template>
  <div>
    <NavBar />

    <div class="d-flex justify-center flex-column divfsxl">
      <h1 class="font-weight-black fsxl">Estatisticas Sobre Suas tasks</h1>
    </div>
    <div
      class="d-flex justify-center flex-column wid grey lighten-5 rounded-lg"
    >
      <ProgressCircular :tasks="listaTarefas" :listaFull="listaTarefas2" />
    </div>
    <FooTer />
  </div>
</template>

<script>
import ProgressCircular from "../components/ProgressCircular.vue";
import NavBar from "../layouts/NavBar.vue";
import FooTer from "../layouts/FooTer.vue";
import TasksApi from "../api/TasksApi";

export default {
  data: function () {
    return {
      listaTarefas: [],
      listaTarefas2: [],
    };
  },
  components: {
    ProgressCircular,
    NavBar,
    FooTer,
  },
  created() {
    TasksApi.getProject((callback) => {
      this.listaTarefas = callback;

      // let retorno = this.listaTarefas.filter((projetos) =>
      //   this.listaTarefas2.push(projetos.nome)
      // )

      TasksApi.getTasks((callback) => {
        this.listaTarefas2 = callback;
      });
    });
  },
};
</script>

<style>
.fsxl {
  font-size: 3rem;
}

.divfsxl {
  width: 35%;
  margin: auto;
  margin-top: 5rem;
}
</style>
