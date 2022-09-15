<template>
  <div ref="divDrag">
    <div :key="task.id" v-for="task in tasks">
      <UseDraggable
        :initialValue="{ x: 10, y: 10 }"
        v-slot="{ style }"
        storage-key="vueuse-draggable"
        storage-type="session"
      >
        <div class="minha-nota" :style="style">
          <v-card class="mx-auto mt-10" max-width="400">
            <v-parallax
              height="170"
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            >
              <h2>{{ task.title }}</h2>
            </v-parallax>

            <v-card-subtitle class="pb-0"> ID {{ task.id }} </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ task.usuario }}</div>

              <div>hitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="red" text @click="sendDelete(task.id)">
                Excluir
              </v-btn>

              <v-btn
                color="orange"
                text
                :to="{
                  name: 'edicao',
                  params: { id: task.id, obj: task },
                }"
              >
                Editar
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </UseDraggable>
    </div>
  </div>
</template>

<script>
import { UseDraggable } from "@vueuse/components";

export default {
  data: function () {
    return {};
  },
  components: {
    UseDraggable,
  },
  props: {
    tasks: Array,
  },
  methods: {
    sendDelete(id) {
      this.$emit("Enviar-Delete", id);
    },
  },
  // mounted() {
  //   const { x, y, style } = useDraggable(this.$refs.divDrag, {
  //     initialValue: { x: 40, y: 40 },
  //   });
  // },
};
</script>

<style scoped>
.minha-nota {
  position: absolute;
}
</style>
