<template>
  <div>
    <NavBar />
    <div class="d-flex justify-center flex-column wid">
      <ProgressCircular :tasks="listaTarefas" />
    </div>
  </div>
</template>

<script>
import ProgressCircular from "../components/ProgressCircular.vue";
import NavBar from "../layouts/NavBar.vue";
import TasksApi from "../TasksApi";

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
  },
  created() {
    TasksApi.getProject((callback) => {
      this.listaTarefas = callback;

      // let retorno = this.listaTarefas.filter((projetos) =>
      //   this.listaTarefas2.push(projetos.nome)
      // )
    });
  },
};
</script>

<style></style>
