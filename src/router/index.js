import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import FamiqView from "../views/projects/FamiqView.vue";
import BaceView from "../views/projects/BaceView.vue";
import PviEditorView from "../views/projects/PviEditorView.vue";
import TosChatView from "../views/projects/TosChatView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-me",
    name: "about",
    component: AboutView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/projects/famiq",
    name: "famiq",
    component: FamiqView,
  },
  {
    path: "/projects/bace",
    name: "bace",
    component: BaceView,
  },
  {
    path: "/projects/pvi-editor",
    name: "pvi-editor",
    component: PviEditorView,
  },
  {
    path: "/projects/tos-chat",
    name: "tos-chat",
    component: TosChatView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
