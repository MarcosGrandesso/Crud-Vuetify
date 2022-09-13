<template>
  <div>
    <NavBar :voulogar="true" />
    <FormsLogin />
  </div>
</template>

<script>
import NavBar from "../layouts/NavBar.vue";
import FormsLogin from "../components/FormsLogin.vue";
export default {
  components: {
    FormsLogin,
    NavBar,
  },
};
</script>
