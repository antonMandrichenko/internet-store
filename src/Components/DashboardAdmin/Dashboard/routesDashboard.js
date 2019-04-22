import Typography from "@material-ui/core/Typography";
import SimpleLineChart from "../SimpleLineChart";
import React from "react";
import CategoryList from "../CategoryList";
import CategoryCreate from "../CategoryCreate";
import ProductCreate from "../ProductCreate";
import ReviewDashboard from "../ReviewDashboard";
import ProductsList from "../ProductsList";
import ProductEdit from "../ProductEdit";

export const routes = [
  {
    path: "/dashboard",
    exact: true,
    main: () => <Typography component="div">
      <SimpleLineChart/>
    </Typography>
  },
  {
    path: "/dashboard/categories/list",
    main: () => <CategoryList/>
  },
  {
    path: "/dashboard/categories/create",
    main: () => <CategoryCreate/>
  },
  {
    path: "/dashboard/products/list",
    main: () => <ProductsList/>
  },
  {
    path: "/dashboard/products/create",
    main: () => <ProductCreate/>
  },
  {
    path: "/dashboard/products/edit",
    main: () => <ProductEdit/>
  },
  {
    path: "/dashboard/sales",
    main: () => <Typography component="div">
      <SimpleLineChart/>
    </Typography>
  },
  {
    path: "/dashboard/reviews",
    main: () => <ReviewDashboard/>
  },

];
