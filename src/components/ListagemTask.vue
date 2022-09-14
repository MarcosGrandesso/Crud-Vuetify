<template>
  <div ref="divDrag">
    <v-card
      class="mx-auto mt-10"
      max-width="400"
      :key="task.id"
      v-for="task in tasks"
    >
      <v-parallax
        height="170"
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      >
        <h2>{{ task.title }}</h2>
      </v-parallax>
      <UseDraggable :initialValue="{ x: 10, y: 10 }" v-slot="{ x, y }">
        Drag me! I am at {{ x }}, {{ y }}
      </UseDraggable>
      <v-card-subtitle class="pb-0"> ID {{ task.id }} </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ task.usuario }}</div>

        <div>hitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="red" text @click="sendDelete(task.id)"> Excluir </v-btn>

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

<style scoped></style>
