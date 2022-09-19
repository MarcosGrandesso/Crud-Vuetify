<template>
  <div>
    <router-view></router-view>
    <NavBar :voucriar="true" />

    <VueDraggable
      :groups="taskList"
      @Enviar-Delete="deleteTask"
      @Enviar-Edit="editTask"
      @Turn-pending="changeToPending"
      @Turn-progress="changeToProgress"
      @Turn-done="changeToDone"
    />

    <FooTer />
  </div>
</template>

<script>
import VueDraggable from "../components/VueDraggable.vue";
import TasksApi from "../api/TasksApi";
import NavBar from "../layouts/NavBar.vue";
import FooTer from "../layouts/FooTer.vue";

export default {
  components: {
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
        let itemDone = data.filter((tarefa) => {
          return tarefa.status.includes("done");
        });
        let itemProgress = data.filter((tarefa) => {
          return tarefa.status.includes("progress");
        });
        let itemTodo = data.filter((tarefa) => {
          return tarefa.status.includes("pending");
        });

        this.taskList = [
          {
            id: 1,
            name: "To Do",
            items: itemTodo,
            // items: [{ id: 1, title: "Mock Todo", groupId: 1 }],
          },
          {
            id: 2,
            name: "In Progress",
            items: itemProgress,
          },
          {
            id: 3,
            name: "Done",
            items: itemDone,
          },
        ];
      });
    },
    deleteTask(id) {
      console.log("deletei", id);
      TasksApi.deleteTasks(id, () => {
        this.getTask();
      });
    },
    editTask() {
      this.$router.push("/create");
    },
    /// alternancia de status tasks
    changeToPending(tarefa) {
      TasksApi.toPending(tarefa);
    },
    changeToProgress(tarefa) {
      TasksApi.toProgress(tarefa);
    },
    changeToDone(tarefa) {
      TasksApi.toDone(tarefa);
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
