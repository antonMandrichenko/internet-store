import Layouts from "../containers/layouts/Main";
import CardProduct from "../containers/CardProduct";
import SignIn from "../containers/auth/SignInForm";
import AddReview from "../containers/rewiews/AddReview";
import Registered from "../containers/auth/RegisterForm";
import Dashboard from "../containers/dashboardAdmin/Dashboard";
import ShopCart from "../containers/shopCart/Cart";
import Checkout from "../containers/shopCart/Checkout";
import AboutUs from "../components/AboutUs";

const routes = [
  {
    path: "/",
    component: Layouts,
    exact: true
  },
  {
    path: "/:category/products",
    component: Layouts,
    exact: true
  },
  {
    path: "/personalData",
    component: Layouts,
    exact: true
  },
  {
    path: "/products/:id",
    component: CardProduct,
    exact: false
  },
  {
    path: "/signin",
    component: SignIn,
    exact: false
  },
  {
    path: "/create-review",
    component: AddReview,
    exact: false
  },
  {
    path: "/register",
    component: Registered,
    exact: false
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: false
  },
  {
    path: "/dashboard/categories/list",
    component: Dashboard,
    exact: false
  },
  {
    path: "/dashboard/categories/create",
    component: Dashboard,
    exact: false
  },
  {
    path: "/dashboard/products/list",
    component: Dashboard,
    exact: false
  },
  {
    path: "/dashboard/products/create",
    component: Dashboard,
    exact: false
  },
  {
    path: "/dashboard/sales",
    component: Dashboard,
    exact: false
  },
  {
    path: "/dashboard/reviews",
    component: Dashboard,
    exact: false
  },
  {
    path: "/shopcart",
    component: ShopCart,
    exact: false
  },
  {
    path: "/checkout",
    component: Checkout,
    exact: false
  },
  {
    path: "/aboutus",
    component: AboutUs,
    exact: false
  },
];

export default routes;
