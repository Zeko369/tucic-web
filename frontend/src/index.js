import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import "views/my.scss";

import Landing from "views/examples/Landing.jsx";
import SectionPage from "views/examples/SectionPage.jsx";

import Webshop from 'views/Webshop.jsx';
import Product from 'views/Product.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Landing {...props} />} />
      <Route path="/usluge/:name" component={SectionPage} />
      <Route path="/webshop/" exact render={props => <Webshop {...props} />} />
      <Route path="/webshop/:product" exact render={props => <Product {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
