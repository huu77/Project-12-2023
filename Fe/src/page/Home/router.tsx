import Home from "./index";
import Main from "./Main/Main";
import { lazy, Suspense } from "react";
// import Product from "./Product/Main";
import CreatNewProduct from "./Product/Create";
import UpdateProduct from "./Product/UpdateProduct";
const Product = lazy(() => import("./Product/Main"));
// const CreatNewProduct = lazy(() => import("./Product/CreateNewProduct"));
// const UpdateProduct = lazy(() => import("./Product/UpdateProduct"));
import SkeletonLoading from '../../compoment/skeletonLoading'
const homeRouters = {
  path: "/home",
  element: <Home />,
  children: [
    {
      path: "",
      element: <Main />,
    },
    {
      path: "product",
      element:<Suspense fallback={<SkeletonLoading/>}> <Product /></Suspense>,
    },
    {
      path: "create",
      element: <CreatNewProduct />,
    },
    {
      path: "update/:id",
      element: <UpdateProduct />,
    },
  ],
};
export default homeRouters;
