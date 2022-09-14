<template>
  <div>
    <NavBar :voucriar="true" />

    <ListagemTask
      :tasks="taskList"
      @Enviar-Delete="deleteTask"
      @Enviar-Edit="editTask"
    />
  </div>
</template>

<script>
import ListagemTask from "../components/ListagemTask.vue";
import TasksApi from "../TasksApi";
import NavBar from "../layouts/NavBar.vue";

export default {
  components: {
    ListagemTask,
    NavBar,
  },
  data: function () {
    return {
      taskList: [],
    };
  },

  methods: {
    getTask() {
      TasksApi.getTasks((data) => {
        this.taskList = data;
        console.log(this.taskList);
      });
    },
    deleteTask(id) {
      TasksApi.deleteTasks(id, () => {
        this.getTask();
      });
    },
    editTask() {
      this.$router.push("/create");
    },
  },
  created() {
    this.getTask();
  },
};
</script>
