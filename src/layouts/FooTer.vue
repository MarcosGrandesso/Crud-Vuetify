<template>
  <div>
    <!-- <v-footer padless fixed>
    <v-row justify="center" no-gutters>
      <v-col class="red darken-3 range pt-5 text-center white--text" cols="12">
        Copyright® {{ new Date().getFullYear() }} — <strong>Tasks</strong>
      </v-col>
      <v-col
        class="red darken-3 pb-5 text-center white--text text-caption"
        cols="12"
      >
        <strong>{{ version }}</strong> -
        {{ nodeEnv }}
        <p>
          <v-btn
            icon
            color="white"
            href="https://github.com/huogerac/crud-js-materialize-vuejs"
          >
            <v-icon>fa-brands fa-github</v-icon>
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-footer> -->
  </div>
</template>

<script>
import settings from "@/settings";
export default {
  data: () => ({
    version: settings.version,
    nodeEnv: settings.nodeEnv,
  }),
};
</script>
