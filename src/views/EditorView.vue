<template>
  <div>
    {{ objeto }}
    <NavBar />
    <FormsCreate
      :toEditando="true"
      :itens="projetos"
      @Editar-Task="editarTask"
    />
    <FooTer />
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar.vue";

import FooTer from "../layouts/FooTer.vue";
import FormsCreate from "../components/FormsCreate.vue";
import TasksApi from "../api/TasksApi";

export default {
  components: {
    FormsCreate,
    FooTer,
    NavBar,
  },
  data: function () {
    return {
      projetos: [],
      objeto: {},
      idAtual: this.objeto,
    };
  },
  methods: {
    callProject() {
      TasksApi.getProject((res) => {
        let i = 0;
        while (i <= res.length) {
          this.projetos.push(res[i].nome);
          i++;
        }
      });
    },
    editarTask(parametroSinal) {
      TasksApi.EditTasks(this.idAtual, parametroSinal, () => {
        this.$router.push("/listar");
      });
    },
  },
  created() {
    this.callProject();
    this.objeto = this.$route.params.obj;
    this.idAtual = this.$route.params.id;
    console.log(this.objeto);
    console.log(this.idAtual);
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
