<template>
  <div class="corpo">
    <meu-menu :routes="routes" />

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu.vue";
import routes from "./routes";

export default {
  components: {
    "meu-menu": Menu,
  },
  data() {
    return {
      routes,
    };
  },
};
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.3s;
}
.pagina-enter,
.pagina-leave-to {
  opacity: 0;
}
</style>