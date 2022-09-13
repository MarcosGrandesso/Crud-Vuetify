<template>
  <div>
    <NavBar />
    <div class="d-flex justify-center flex-column wid">
      <ProgressCircular />
    </div>
  </div>
</template>

<script>
import ProgressCircular from "../components/ProgressCircular.vue";
import NavBar from "../layouts/NavBar.vue";

export default {
  components: {
    ProgressCircular,
    NavBar,
  },
};
</script>

<style></style>
