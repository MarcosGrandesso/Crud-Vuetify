import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CriadorEditor from "../views/CriadorEditor.vue";
import RegistroView from "../views/RegistroView.vue";
import PainelView from "../views/PainelView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import TodoStart from "../views/TodoStart.vue";
import FilhoView from "../views/FilhoView.vue";
import EditorView from "../views/EditorView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: TodoStart,
  },
  {
    path: "/listar",
    component: HomeView,
    children: [
      {
        path: ":id",
        name: "edicao",
        component: EditorView,
      },
      {
        path: "",
        name: "listar",
        component: FilhoView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/create",
    name: "create",
    component: CriadorEditor,
  },
  {
    path: "/registro",
    name: "registro",
    component: RegistroView,
  },
  {
    path: "/painel",
    name: "painel",
    component: PainelView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
