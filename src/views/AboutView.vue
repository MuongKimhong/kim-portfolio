<template>
  <v-container class="pt-3 pb-10">
    <h2 class="text-black text-center">About me</h2>

    <div class="text-center my-4">
      <v-img :src="profile" class="rounded-circle mx-auto" :width="200"></v-img>
    </div>

    <p class="text-black mt-5">
      My name <b>Kim Hong Muong</b>. I'm a software developer based in Sydney,
      Australia. I've spent years teaching myself how to build real things.
    </p>

    <p class="text-black mt-2">
      I focus mostly on Rust, Python, and building developer tools like text
      editors, GUI library, and terminal apps. I love building things from
      scratch to learn about how things work. I care deeply about performance,
      code clarity, and creating good developer experiences.
    </p>

    <p class="text-black mt-2">
      I’m always learning, improving, and looking for opportunities where I can
      build useful software, grow with a strong team, and contribute with my
      knowledge.
    </p>

    <h2 class="text-center text-black mt-5">Find me at</h2>
    <div class="text-center text-black mt-2">
      <span class="contact">
        <i class="fas fa-phone mr-1"></i> 0436117828
      </span>
      <span class="mx-1"> | </span>
      <span class="contact" @click="onMailClick">
        <i class="fas fa-envelope mr-1"></i>mail@kimhongmuong.com
      </span>
      <span class="mx-1"> | </span>
      <span class="contact" @click="onGithubClick">
        <i class="fab fa-github mr-1"></i>github.com/MuongKimhong
      </span>
      <span class="mx-1"> | </span>
      <span class="contact" @click="onResumeClick"
        ><i class="fas fa-file mr-1"></i>Resume</span
      >
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      profile: require("../assets/profile.jpeg"),
    };
  },
  methods: {
    onMailClick: function () {
      window.open("mailto:mail@kimhongmuong.com", "_blank");
    },

    onGithubClick: function () {
      window.open("https://github.com/MuongKimhong", "_blank");
    },

    onResumeClick: function () {
      window.open("/KimMuong-Resume.pdf", "_blank");
    },
  },
};
</script>

<style scoped>
.contact {
  cursor: pointer;
}
</style>
