import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "首页欢迎你",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/front",
    component: () => import("../layout/Front.vue"),
    redirect: "/about",
    children: [
      {
        path: "about",
        name: "关于本站",
        component: () => import("../views/About.vue"),
      },
      {
        path: "offer",
        name: "Offer成功案例",
        component: () => import("../views/Offer.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404页面",
    component: () => import("@/components/404"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;