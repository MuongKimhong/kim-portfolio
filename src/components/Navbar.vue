<template>
  <v-app-bar :elevation="3">
    <v-container class="text-center">
      <v-btn
        class="text-capitalize"
        density="comfortable"
        color="black"
        @click="goHome()"
      >
        Home
      </v-btn>
      <v-btn
        class="text-capitalize"
        color="black"
        density="comfortable"
        @click="goProjects()"
      >
        Projects
      </v-btn>
      <v-btn
        class="text-capitalize"
        color="black"
        density="comfortable"
        @click="goAboutMe()"
      >
        About me
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  created() {},
  methods: {
    goHome: function () {
      this.$router.push({ name: "home" });
    },
    goProjects: function () {
      this.$router.push({ name: "projects" });
    },
    goAboutMe: function () {
      this.$router.push({ name: "about" });
    },
  },
};
</script>
