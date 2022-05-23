import Vue from "vue";
import VueRouter from "vue-router";
import FormDetail from "../components/FormDetail";
import PageDetail from "../components/ProductDetail"
import EditProduct from "../components/EditProduct"


Vue.use(VueRouter);

const routes = [
  {
    path: "/form",
    name: "form",
    component: FormDetail,
  },
  {
    path: "/",
    name: "Home",
    component: PageDetail,
  },
//   {
//     path: "/create",
//     name: "create",
//     component: CreateProduct,
//   },
  {
    path: "/edit/:id",
    name: "Edit",
    component: EditProduct,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
