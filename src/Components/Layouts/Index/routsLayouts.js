import React, {Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import SwiperRow from "../Swiper";
import ListOfProducts from "../../../Containers/ListOfProducts";
import Pagination from "../Pagination";

export const routes = [
  {
    path: "/",
    exact: true,
    // aside:
    main: () => <Fragment>
      <SwiperRow/>
      <ListOfProducts/>
      <Pagination/>
    </Fragment>
  },
  {
    path: "/:category/products",
    exact: true,
    // aside:
    main: () => <Fragment>
      <SwiperRow/>
      <ListOfProducts/>
    </Fragment>
  },

];
