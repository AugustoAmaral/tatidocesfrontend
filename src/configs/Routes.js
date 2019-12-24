import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../components/main/Main";

import Candies from "../components/candies/Candies";

const PrivateRoute = ({ component, ...props }) => (
  <Route>
    <Main>{component}</Main>
  </Route>
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute component={Candies} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
