import React from "react";
import "./App.css";
import HomePageComp from "./pages/Homepage/HomePageComp";
import { Route, Switch } from "react-router-dom";
import ShopComp from "./pages/shop/ShopComp";


function App() {
  return (
    <div>
      <h1>Header goes here</h1>
      <Switch>
        <Route path="/shop" component={ShopComp} />
        <Route path="/" component={HomePageComp} />
      </Switch>
    </div>
  );
}

export default App;
