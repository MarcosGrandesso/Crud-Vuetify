<template>
  <div>
    <NavBar />
    <div class="d-flex justify-center mt-10">
      <v-btn color="green lighten-1" text @click="toggle">
        Criar Tipo de projeto
      </v-btn>
    </div>
    <div v-if="criando">
      <ProjectForm @create-project="createProject" />
    </div>
    <div v-if="!criando">
      <CardProject :proj="projetos" />
    </div>
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar.vue";
import CardProject from "../components/CardProject.vue";
import ProjectForm from "../components/ProjectForm.vue";
import TasksApi from "../TasksApi";

export default {
  components: {
    CardProject,
    NavBar,
    ProjectForm,
  },
  data: function () {
    return {
      criando: false,
      projetos: [],
    };
  },
  methods: {
    toggle() {
      if (this.criando == false) {
        this.criando = true;
      } else {
        this.criando = false;
      }
    },
    createProject(obj) {
      TasksApi.createProject(obj);
    },
    callProject() {
      TasksApi.getProject((res) => {
        let i = 0;
        while (i <= res.length) {
          this.projetos.push(res[i].nome);
          i++;
        }
      });
      console.log(this.projetos);
    },
  },
  created() {
    this.callProject();
  },
};
</script>
