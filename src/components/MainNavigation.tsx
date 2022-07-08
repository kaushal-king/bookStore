import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import BookList from "../pages/book-listing";
import Cart from "../pages/cart";
import { RoutePaths } from "../utils/enum";
import PrivateRoute from "./PrivateRoute";
// import PrivateRoute from "./PrivateRoute";

//component lazy loading
const Login = lazy(() => import("../pages/login/index"));
const Register = lazy(() => import("../pages/register/index"));

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RoutePaths.Login} component={Login} />
      <Route exact path={RoutePaths.Register} component={Register} />
      <Route exact path={RoutePaths.BookListing} component={BookList} />
      <Route exact path={RoutePaths.Cart} component={Cart} />
    </Switch>
  );
};

export default AppRoutes;
