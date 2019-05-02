import React, {Fragment} from "react";
import SwiperRow from "../../../components/layouts/Swiper";
import ListOfProducts from "../../ListOfProducts";
import MenuPersonalData from "../../../components/layouts/MenuPersonalData";
import Aside from "../Aside";
import PersonalData from "../PersonalData";

export const routes = [
  {
    path: "/",
    exact: true,
    aside: () => <Fragment>
      <Aside/>
      <MenuPersonalData/>
    </Fragment>,

    main: () => <Fragment>
      <SwiperRow/>
      <ListOfProducts/>

    </Fragment>
  },
  {
    path: "/:category/products",
    exact: true,
    aside: () => <Fragment>
      <Aside/>
      <MenuPersonalData/>
    </Fragment>,
    main: () => <Fragment>
      <ListOfProducts/>
    </Fragment>
  },
  {
    path: "/personalData",
    exact: false,
    aside: () => <Fragment>
      <MenuPersonalData/>
    </Fragment>,
    main: () =>
      <PersonalData/>
  },

];
