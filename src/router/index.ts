import Vue from "vue";
import VueRouter from "vue-router";
import InvoiceView from "../views/InvoiceView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Wystaw fakture",
    component: InvoiceView
  },
  {
    path: "/about",
    name: "AboutView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
