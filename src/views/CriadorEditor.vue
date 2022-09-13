<template>
  <div>
    <NavBar />

    <FormsCreate :itens="projetos" @Criar-Task="criarTask" />
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar.vue";

import FormsCreate from "../components/FormsCreate.vue";
import TasksApi from "../TasksApi";

export default {
  components: {
    FormsCreate,
    NavBar,
  },
  data: function () {
    return {
      projetos: [],
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
        console.log(this.project);
      });
    },
    criarTask(parametroSinal) {
      TasksApi.createTask(parametroSinal);
      this.$router.push("/");
    },
  },
  created() {
    this.callProject();
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
