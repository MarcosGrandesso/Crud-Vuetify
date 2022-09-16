<template>
  <div>
    <router-view></router-view>
    <NavBar :voucriar="true" />
    <ListagemTask
      :tasks="taskList"
      @Enviar-Delete="deleteTask"
      @Enviar-Edit="editTask"
    />
    <VueDraggable />

    <FooTer />
  </div>
</template>

<script>
import ListagemTask from "../components/ListagemTask.vue";
import VueDraggable from "../components/VueDraggable.vue";

import TasksApi from "../api/TasksApi";
import NavBar from "../layouts/NavBar.vue";
import FooTer from "../layouts/FooTer.vue";

export default {
  components: {
    ListagemTask,
    VueDraggable,
    FooTer,
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

<style scoped>
.heightmaxed {
  height: 90vh;
}
</style>
