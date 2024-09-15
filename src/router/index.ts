import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-me",
      name: "about-me",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectView.vue"),
    },
    {
      path: "/experiences",
      name: "experiences",
      component: () => import("../views/Experiences.vue"),
    },
    {
      path: "/contact-me",
      name: "contact-me",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
