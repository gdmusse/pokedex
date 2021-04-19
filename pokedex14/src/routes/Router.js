import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Pokedexpage } from "../pages/PokedexPage/Pokedexpage";
import { Homepage } from "../pages/Homepage/Homepage";
import { Detailspage } from "../pages/DetailsPage/DetailsPage";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/pokedex">
          <Pokedexpage />
        </Route>
        <Route exact path="/pokemon/:name">
          <Detailspage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
