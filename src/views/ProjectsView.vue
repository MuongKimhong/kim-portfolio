<template>
  <v-container class="mt-5">
    <p class="text-black">
      Here are some of the projects I’ve built to improve my skills and explore
      different areas of software development. Each one of them reflects my
      passion for writing clean, efficient code and building useful tools, from
      apps, text editors to library.
    </p>

    <v-card
      class="my-5 px-5 py-3 project-card"
      :elevation="projectCardElevations.famiq"
      @mouseover="onProjectCardHover('famiq')"
      @mouseout="onProjectCardOut('famiq')"
    >
      <div class="my-2">
        <h2 class="text-black">Famiq</h2>
        <p class="text-black">
          An experimental GUI library, written in Rust, based on ECS pattern,
          powered by Bevy game engine.
        </p>
        <p class="text-black"></p>
      </div>

      <div class="text-right mt-3">
        <v-btn
          class="text-capitalize mr-3"
          density="comfortable"
          color="grey-darken-3"
          variant="outlined"
          href="https://github.com/MuongKimhong/famiq"
          target="_blank"
        >
          View on Github
        </v-btn>
        <v-btn
          class="text-capitalize"
          density="comfortable"
          variant="outlined"
          color="grey-darken-3"
          @click="$router.push({ name: 'famiq' })"
        >
          See detail
        </v-btn>
      </div>
    </v-card>

    <v-card
      class="my-5 px-5 py-3 project-card"
      :elevation="projectCardElevations.bace"
      @mouseover="onProjectCardHover('bace')"
      @mouseout="onProjectCardOut('bace')"
    >
      <div class="my-2">
        <h2 class="text-black">Bace</h2>
        <p class="text-black">
          Web-based code editor with basic vim key bindings.
        </p>
        <p class="text-black"></p>
      </div>

      <div class="text-right">
        <v-btn
          class="text-capitalize mr-3"
          density="comfortable"
          color="grey-darken-3"
          variant="outlined"
          href="https://github.com/MuongKimhong/bace"
          target="_blank"
        >
          View on Github
        </v-btn>
        <v-btn
          class="text-capitalize"
          density="comfortable"
          color="grey-darken-3"
          variant="outlined"
          @click="$router.push({ name: 'bace' })"
        >
          See detail
        </v-btn>
      </div>
    </v-card>

    <v-card
      class="my-5 px-5 py-3 project-card"
      :elevation="projectCardElevations.pviEditor"
      @mouseover="onProjectCardHover('pviEditor')"
      @mouseout="onProjectCardOut('pviEditor')"
    >
      <div class="my-2">
        <h2 class="text-black">PVI Editor</h2>
        <p class="text-black">
          A vim-like text editor with all nescessary features and key bindings.
        </p>
        <p class="text-black"></p>
      </div>

      <div class="text-right">
        <v-btn
          class="text-capitalize mr-3"
          density="comfortable"
          color="grey-darken-3"
          variant="outlined"
          href="https://github.com/MuongKimhong/pvi-editor"
          target="_blank"
        >
          View on Github
        </v-btn>
        <v-btn
          class="text-capitalize"
          density="comfortable"
          variant="outlined"
          color="grey-darken-3"
          @click="$router.push({ name: 'pvi-editor' })"
        >
          See detail
        </v-btn>
      </div>
    </v-card>

    <v-card
      class="my-5 px-5 py-3 project-card"
      :elevation="projectCardElevations.tosChat"
      @mouseover="onProjectCardHover('tosChat')"
      @mouseout="onProjectCardOut('tosChat')"
    >
      <div class="my-2">
        <h2 class="text-black">TosChat</h2>
        <p class="text-black">
          Chat with your friends within your terminal with simple and easy to
          use chat app.
        </p>
        <p class="text-black"></p>
      </div>

      <div class="text-right">
        <v-btn
          class="text-capitalize mr-3"
          density="comfortable"
          color="grey-darken-3"
          variant="outlined"
          href="https://github.com/MuongKimhong/toschat"
          target="_blank"
        >
          View on Github
        </v-btn>
        <v-btn
          class="text-capitalize"
          density="comfortable"
          color="grey-darken-3"
          variant="outlined"
          @click="$router.push({ name: 'tos-chat' })"
        >
          See detail
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ProjectView",
  data() {
    return {
      projectCardElevations: {
        famiq: "3",
        bace: "3",
        pviEditor: "3",
        tosChat: "3",
      },
    };
  },
  methods: {
    onProjectCardHover: function (projectName) {
      this.projectCardElevations[projectName] = "6";
    },
    onProjectCardOut: function (projectName) {
      this.projectCardElevations[projectName] = "3";
    },
  },
};
</script>

<style scoped>
.project-card {
  cursor: pointer;
}
</style>
