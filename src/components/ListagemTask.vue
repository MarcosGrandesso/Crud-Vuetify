<template>
  <div>
    <v-card
      class="mx-auto mt-10"
      max-width="400"
      :key="task.id"
      v-for="task in tasks"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ task.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0"> ID {{ task.id }} </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ task.usuario }}</div>

        <div>hitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="red" text @click="sendDelete(task.id)"> Excluir </v-btn>

        <v-btn color="orange" text> Editar </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: {
    tasks: Array,
  },
  methods: {
    sendDelete(id) {
      this.$emit("Enviar-Delete", id);
    },
  },
};
</script>

<style scoped></style>
