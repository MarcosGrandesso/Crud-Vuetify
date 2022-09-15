<template>
  <div class="d-flex justify-center flex-column wid">
    <v-card
      class="mx-auto mt-10"
      max-width="344"
      :key="projeto.id"
      v-for="projeto in proj"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title> {{ projeto[0] }} </v-card-title>

      <v-card-subtitle> </v-card-subtitle>

      <v-card-actions>
        <v-btn color="red lighten-1" text @click="sendID(projeto[1])">
          Excuir
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  props: {
    proj: Array,
  },
  methods: {
    sendID(id) {
      this.$emit("delete-project", id);
    },
  },
};
</script>
