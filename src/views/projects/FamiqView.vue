<template>
  <v-container class="pt-5 pb-10">
    <div class="my-2">
      <v-img :src="logo" :width="220" class="mx-auto"></v-img>
    </div>
    <h2 class="text-black mt-5">What is Famiq?</h2>
    <p class="text-black mt-2">
      Famiq is a GUI library, based on ECS (Entity-Component-System) pattern,
      written in Rust, built on top of
      <a href="https://bevyengine.org/" target="_blank">Bevy game engine</a>. It
      runs on native platforms including Linux, MacOS, Window and Web via
      WebAssemly. Currently, it's in an experimental stage where many useful
      features are missing.
    </p>

    <p class="text-black mt-2">
      <b>Famiq</b> has only one goal, which is to leverage all the power
      provided by game engine to build GUI applications instead of games. With
      that, it allows developers to build any kind of applications from simple
      forms to app that requires heavy rendering.
    </p>

    <h2 class="text-black mt-5">Key features</h2>
    <p class="text-black">
      &#10687; Built-in useful widgets including text input, modal, progress bar
      and more
    </p>
    <p class="text-black">
      &#10687; Simple & lightweight, yet useful reactivity system
    </p>
    <p class="text-black">
      &#10687; JSON based styling (similar to css), keep your rust code clean!
    </p>
    <p class="text-black">&#10687; Yes it's fast!</p>

    <h2 class="text-black mt-5">Demo</h2>
    <div class="text-center">
      <iframe
        src="https://muongkimhong.github.io/famiq_live_demo/"
        frameborder=""
        class="demo-frame"
      ></iframe>
    </div>

    <p class="text-black mt-5">
      Link to github:
      <a href="https://github.com/MuongKimhong/famiq" target="_blank">
        https://github.com/MuongKimhong/famiq
      </a>
    </p>

    <ProjectNav></ProjectNav>
  </v-container>
</template>

<script>
import ProjectNav from "../../components/ProjectNav.vue";

export default {
  name: "FamiqView",
  components: {
    ProjectNav,
  },
  data() {
    return {
      logo: require("../../assets/famiq-logo.png"),
    };
  },
};
</script>

<style scoped>
.demo-frame {
  width: 90%;
  height: 600px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
