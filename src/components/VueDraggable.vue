<template>
  <div class="drag-container" v-drag-and-drop:options="options">
    <button @click="editTask">
      <v-icon color="black"> fas fa-plus</v-icon>
    </button>
    <ul class="drag-list">
      <li
        class="drag-column grey lighten-5"
        v-for="group in groups"
        :key="group.id"
      >
        <span class="drag-column-header">
          <h2>{{ group.name }}</h2>
          <feather-icon type="more-vertical"></feather-icon>
        </span>
        <vue-draggable-group
          v-model="group.items"
          :groups="groups"
          :data-id="group.id"
          @change="onGroupsChange"
        >
          <div class="drag-inner-list" :data-id="group.id">
            <v-card
              class="mx-auto mt-10 drag-item tamanho"
              max-width="400"
              v-for="item in group.items"
              :key="item.id"
              :data-id="item.id"
              @click="takeObject(item)"
            >
              <!-- <v-parallaxasdsa
              height="170"
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            >
              <h2>{{ task.title }}</h2>
            </v-parallax> -->

              <v-card-subtitle class="pb-0">
                <h2>{{ item.title }}</h2>
              </v-card-subtitle>

              <v-card-text class="text--primary pb-0">
                <div>ID {{ item.id }}</div>

                <div>{{ item.status }}, {{ item.project }}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="red" text @click="sendDelete(item.id)">
                  Excluir
                </v-btn>

                <v-btn
                  color="orange"
                  text
                  :to="{
                    name: 'edicao',
                    params: { id: item.id, obj: item },
                  }"
                  >Editar
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </vue-draggable-group>
      </li>
    </ul>
  </div>
</template>

<script>
//= import ListagemTask from "../components/ListagemTask.vue";fdsfd

export default {
  data() {
    return {
      options: {
        dropzoneSelector: ".drag-inner-list",
        draggableSelector: ".drag-item",
      },
      tarefaAtual: null,
    };
  },
  // kaasssss
  methods: {
    onGroupsChange(e) {
      // To Do Group
      for (let tarefa of e[0].items) {
        // console.log(tarefa.status);
        if (tarefa.status != "pending") {
          this.$emit("Turn-pending", tarefa);
        }
      }
      //in progress
      for (let tarefa of e[1].items) {
        // console.log(tarefa.status);
        if (tarefa.status != "progress") {
          this.$emit("Turn-progress", tarefa);
        }
      }

      for (let tarefa of e[2].items) {
        // console.log(tarefa.status);
        if (tarefa.status != "done") {
          this.$emit("Turn-done", tarefa);
        }
      }
    },
    sendDelete(id) {
      this.$emit("Enviar-Delete", id);
    },
    editTask() {
      this.$router.push("/create");
    },
    takeObject(obj) {
      this.tarefaAtual = obj;
    },
  },
  created() {},
  props: ["groups"],
};
</script>

<style lang="scss">
$ease-out: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
$to-do: #f4ce46;
$in-progress: #2a92bf;
$approved: #00b961;

* {
  box-sizing: border-box;
}
.tamanho {
  width: 17rem;
}
body {
  background: #33363d;
  color: white;
  font-family: "Roboto Mono", serif;
  font-weight: 300;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.drag-container {
  max-width: 1000px;
  margin: 20px auto;
}

.drag-list {
  display: flex;
  align-items: flex-start;

  @media (max-width: 690px) {
    display: block;
  }
}

.drag-column {
  flex: 1;
  margin: 0 10px;
  position: relative;
  background: rgba(black, 0.2);
  overflow: hidden;

  @media (max-width: 690px) {
    margin-bottom: 30px;
  }

  h2 {
    font-size: 0.8rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
  }

  &-to-do {
    .drag-column-header,
    .drag-options {
      background: $to-do;
    }
  }

  &-in-progress {
    .drag-column-header,
    .drag-options {
      background: $in-progress;
    }
  }

  &-approved {
    .drag-column-header,
    .drag-options {
      background: $approved;
    }
  }
}

.drag-column-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  user-select: none;
}

.drag-inner-list {
  height: 85vh;
  overflow: auto;
}

.drag-item {
  margin: 10px;
  height: 130px;
  background: rgba(black, 0.4);
  transition: $ease-out;

  /* items grabbed state */
  &[aria-grabbed="true"] {
    background: #92aaa452;
    color: #fff;
  }

  .drag-item-text {
    font-size: 1rem;
    padding-left: 1rem;
    padding-top: 1rem;
  }
}

.drag-header-more {
  cursor: pointer;
}

@keyframes nodeInserted {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 0.8;
  }
}

.item-dropzone-area {
  height: 6rem;
  background: #888;
  opacity: 0.8;
  animation-duration: 0.5s;
  animation-name: nodeInserted;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}
</style>
