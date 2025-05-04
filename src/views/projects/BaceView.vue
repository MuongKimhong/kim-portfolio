<template>
  <v-container class="pt-5 pb-10">
    <div class="my-2">
      <v-img :src="logo" :width="150" class="mx-auto"></v-img>
    </div>
    <h2 class="text-black mt-5">What is Bace?</h2>
    <p class="text-black mt-2">
      Bace stands for <b>Ba</b>sic <b>C</b>ode <b>E</b>ditor. It's a
      lightweight, desktop code editor I built using
      <a href="https://vuejs.org/" target="_blank">Vue.js</a> (frontend) and
      <a href="https://v2.tauri.app/" target="_blank">Tauri</a> (Backend). It
      features <b>Vim-like</b> keybindings for easy navigation and editing,
      aiming to deliver a great coding experience.
    </p>

    <h3 class="text-black mt-3">This project helped me explore:</h3>
    <p class="text-black">
      &#10687; Building cross platform app using web technologies and Rust.
    </p>
    <p class="text-black">
      &#10687; Managing state, file operations and communication between Vue.js
      and Tauri.
    </p>
    <p class="text-black">
      &#10687; Designing Syntax highlighting from scratch using Regex and
      without Tree-sitter.
    </p>
    <p class="text-black">
      &#10687; Optimizing performance to prevent lagging.
    </p>

    <h2 class="text-black mt-5">Demo</h2>
    <div class="text-center">
      <video :src="demo" controls id="demo-vid"></video>
    </div>

    <p class="text-black mt-5">
      Link to github:
      <a href="https://github.com/MuongKimhong/bace" target="_blank">
        https://github.com/MuongKimhong/bace
      </a>
    </p>

    <ProjectNav></ProjectNav>
  </v-container>
</template>

<script>
import ProjectNav from "../../components/ProjectNav.vue";

export default {
  name: "BaceView",
  components: {
    ProjectNav,
  },
  data() {
    return {
      logo: require("../../assets/bace-logo.png"),
      demo: new URL("../../assets/bace-demo.mp4", import.meta.url).href,
    };
  },
};
</script>

<style scoped>
#demo-vid {
  width: 90%;
}
</style>
