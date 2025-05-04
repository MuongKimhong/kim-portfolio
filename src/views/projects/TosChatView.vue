<template>
  <v-container class="pt-5 pb-10">
    <h2 class="text-black mt-5">What is TosChat?</h2>

    <p class="text-black mt-2">
      <b>TosChat</b> is a terminal-based chat application built using
      <a href="https://textual.textualize.io/" target="_blank">Textual</a>
      framework in Python. It uses
      <a href="https://www.djangoproject.com/" target="_blank">Django</a>
      as backend for authentication and data handling, and
      <a href="https://socket.io/" target="_blank">Socket.io</a> as websocket
      server for real-time messaging.
    </p>

    <h3 class="text-black mt-3">This project helped me explore:</h3>
    <p class="text-black">
      &#10687; Building real-time WebSocket communication.
    </p>
    <p class="text-black">&#10687; Integrating Django as server.</p>
    <p class="text-black">&#10687; Designing terminal-based UI.</p>
    <p class="text-black">
      &#10687; Managing multiple backend technologies in a single project.
    </p>

    <h2 class="text-black mt-5">Demo</h2>
    <div class="text-center">
      <v-img :src="demo" id="demo" class="mx-auto"></v-img>
    </div>

    <p class="text-black mt-5">
      Link to github:
      <a href="https://github.com/MuongKimhong/toschat" target="_blank">
        https://github.com/MuongKimhong/toschat
      </a>
    </p>

    <ProjectNav></ProjectNav>
  </v-container>
</template>

<script>
import ProjectNav from "../../components/ProjectNav.vue";

export default {
  name: "TosChatView",
  components: {
    ProjectNav,
  },
  data() {
    return {
      demo: require("../../assets/toschat-demo.gif"),
    };
  },
};
</script>

<style scoped>
#demo {
  width: 90%;
}
</style>
