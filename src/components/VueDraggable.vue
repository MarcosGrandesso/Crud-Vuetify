<template>
  <!--     colocar isso aqui no elemento com id= to depois que eu consertar as funcoes 
                :to="{    name: 'edicao',
                    params: { id: task.id, obj: task },
                  }" -->
  <div class="drag-container" v-drag-and-drop:options="options">
    <!-- <h2>list 1 ={{ groups[0].items }}</h2>
    <h2>list 2 ={{ groups[1].items }}</h2>
    <h2>list 3 ={{ groups[2].items }}</h2> -->
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
            >
              <!-- <v-parallax
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

                <div>hitsunday Island, Whitsunday Islands</div>
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
//= import ListagemTask from "../components/ListagemTask.vue";

export default {
  data() {
    return {
      groups: [
        {
          id: 1,
          name: "To Do",
          items: this.tasks,
          // items: [{ id: 1, title: "Mock Todo", groupId: 1 }],
        },
        {
          id: 2,
          name: "In Progress",
          items: [],
        },
        {
          id: 3,
          name: "Done",
          items: [],
        },
      ],
      options: {
        dropzoneSelector: ".drag-inner-list",
        draggableSelector: ".drag-item",
      },
    };
  },
  // kaasssss
  methods: {
    onGroupsChange(e) {
      console.log({ e });
    },
    sendDelete(id) {
      this.$emit("Enviar-Delete", id);
    },
    editTask() {
      this.$router.push("/create");
    },
  },
  created() {},
  props: {
    tasks: Array,
  },
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
    background: #5cc1a6;
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
