<template>
  <div>
    <router-view></router-view>
    <FooTer />
  </div>
</template>

<script>
import TasksApi from "../api/TasksApi";
import FooTer from "../layouts/FooTer.vue";

export default {
  components: {
    FooTer,
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
