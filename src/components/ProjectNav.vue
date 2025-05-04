<template>
  <div class="text-center mt-10 mb-5">
    <v-btn
      class="text-capitalize mr-5"
      color="grey-darken-3"
      density="comfortable"
      v-if="hasBack"
      @click="onBackPress"
    >
      < Back
    </v-btn>
    <v-btn
      class="text-capitalize ml-5"
      color="grey-darken-3"
      density="comfortable"
      v-if="hasNext"
      @click="onNextPress"
    >
      Next >
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ProjectNav",
  data() {
    return {
      hasBack: true,
      hasNext: true,
      currentIndex: 0,
      allProjectRoutes: ["famiq", "bace", "pvi-editor", "tos-chat"],
    };
  },
  created() {
    this.updateNavBtnsVisibility();
  },
  methods: {
    updateNavBtnsVisibility: function () {
      this.hasNext = true;
      this.hasBack = true;

      if (this.$route.name === "famiq") {
        this.hasBack = false;
      }

      if (this.$route.name === "tos-chat") {
        this.hasNext = false;
      }
    },

    onNextPress: function () {
      for (let i = 0; i < this.allProjectRoutes.length; i++) {
        let cRoute = this.allProjectRoutes[i];
        let lastIndex = this.allProjectRoutes.length - 1;

        if (this.$route.name == cRoute && i < lastIndex) {
          this.$router.push({ name: `${this.allProjectRoutes[i + 1]}` });
          break;
        }
      }
    },

    onBackPress: function () {
      for (let i = 0; i < this.allProjectRoutes.length; i++) {
        let cRoute = this.allProjectRoutes[i];

        if (this.$route.name == cRoute && i > 0) {
          this.$router.push({ name: `${this.allProjectRoutes[i - 1]}` });
          break;
        }
      }
    },
  },
};
</script>
