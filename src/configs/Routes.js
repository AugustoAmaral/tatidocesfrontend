import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../components/main/Main";

import Candies from "../components/candies/Candies";
// import SignIn from "../components/authentication/SignIn";

const PrivateRoute = ({ component, title, ...props }) => (
  <Route>
    <Main title={title} component={component}></Main>
  </Route>
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute component={Candies} title="Doces" />
        {/* <Route component={SignIn} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
