<template>
  <div>
    <NavBar />
    <FormsLogin :logando="logando" />
  </div>
</template>
<script>
import NavBar from "../layouts/NavBar.vue";
import FormsLogin from "../components/FormsLogin.vue";
export default {
  methods: {},
  components: {
    FormsLogin,
    NavBar,
  },
  data: function () {
    return {
      logando: true,
    };
  },
};
</script>
<style>
.wid {
  width: 33%;
  margin: auto;
  margin-top: 5rem;
}
</style>
