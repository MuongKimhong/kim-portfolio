<template>
  <v-container class="mt-6">
    <!-- <v-row align="center" justify="center" style="height: 100%">
      <v-col cols="auto">

      </v-col>
    </v-row> -->
    <div class="text-center mb-5">
      <v-img :src="profile" class="rounded-circle mx-auto" :width="200"></v-img>
    </div>

    <h1 class="text-black text-center">Mr. Kim Muong</h1>
    <p class="text-black text-center">
      Currently building
      <a href="https://github.com/MuongKimhong/famiq" target="_blank">Famiq</a>.
    </p>
    <p class="text-black text-center mt-2">
      Passionate about clean code, performance, and building tools.
    </p>

    <div class="text-center my-5">
      <img
        v-for="(logo, i) in langLogos"
        :key="i"
        :src="logo"
        width="75"
        height="75"
        class="mx-5 logo"
        :alt="langAlts[i]"
        @click="onLogoClick(i)"
      />
    </div>

    <div class="text-center mt-8">
      <v-btn
        class="text-capitalize"
        density="comfortable"
        color="grey-darken-3"
        @click="$router.push({ name: 'projects' })"
      >
        See my projects
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",

  data() {
    return {
      profile: require("../assets/profile.jpeg"),
      langLogos: [
        require("../assets/rust-logo.png"),
        require("../assets/python-logo.png"),
        require("../assets/typescript-logo.png"),
      ],
      langAlts: [
        "Rust programming language",
        "Python programming language",
        "Typescript programming language",
      ],
      langLogoLinks: [
        "https://www.rust-lang.org/",
        "https://www.python.org/",
        "https://www.typescriptlang.org/",
      ],
    };
  },

  methods: {
    onLogoClick: function (index) {
      window.open(this.langLogoLinks[index], "_blank");
    },
  },
});
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>
