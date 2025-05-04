<template>
  <v-container class="pt-5 pb-10">
    <h2 class="text-black mt-5">What is PVI-Editor?</h2>

    <p class="text-black mt-2">
      PVI stands for <b>P</b>ython <b>Vi</b>m. It's a terminal-based text editor
      inspired by Vim, built on top of
      <a href="https://textual.textualize.io/" target="_blank">Textual</a>
      framework. <b>PVI-Editor</b> supports basic vim keybindings for
      navigation, editing, and committing to git.
    </p>

    <h3 class="text-black mt-3">This project helped me explore:</h3>
    <p class="text-black">
      &#10687; Understanding of TUI (Terminal-based user interface).
    </p>
    <p class="text-black">&#10687; Improving my knowledge of Python.</p>
    <p class="text-black">
      &#10687; Designing app architecture with UX in mind.
    </p>

    <h2 class="text-black mt-5">Demo</h2>
    <div class="text-center">
      <v-img :src="demo" id="demo" class="mx-auto"></v-img>
    </div>

    <p class="text-black mt-5">
      Link to github:
      <a href="https://github.com/MuongKimhong/pvi-editor" target="_blank">
        https://github.com/MuongKimhong/pvi-editor
      </a>
    </p>

    <ProjectNav></ProjectNav>
  </v-container>
</template>

<script>
import ProjectNav from "../../components/ProjectNav.vue";

export default {
  name: "PviEditorView",
  components: {
    ProjectNav,
  },
  data() {
    return {
      demo: require("../../assets/pvi-demo.gif"),
    };
  },
};
</script>

<style scoped>
#demo {
  width: 90%;
}
</style>
