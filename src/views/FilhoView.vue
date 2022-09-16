<template>
  <div>
    <router-view></router-view>
    <NavBar :voucriar="true" />
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" outlined tile> Não iniciada </v-card>
          <ListagemTask
            :tasks="taskList"
            @Enviar-Delete="deleteTask"
            @Enviar-Edit="editTask"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" outlined tile> In progress </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" outlined tile> finalizada </v-card>
        </v-col>
      </v-row>
    </v-container>

    <FooTer />
  </div>
</template>

<script>
import ListagemTask from "../components/ListagemTask.vue";
import TasksApi from "../api/TasksApi";
import NavBar from "../layouts/NavBar.vue";
import FooTer from "../layouts/FooTer.vue";

export default {
  components: {
    ListagemTask,
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
