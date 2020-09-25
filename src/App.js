import React from "react";
import "./App.css";
import HomePageComp from "./pages/Homepage/HomePageComp";
import { Route, Switch } from "react-router-dom";

const hatsPage = ()=>{
  return (
    <div>HATS</div>
  )
}

function App() {
  return (
    <div>
      <h1>Header goes here</h1>
      <Switch>
        <Route path="/shop/hats" component={hatsPage} />
        <Route path="/" component={HomePageComp} />
      </Switch>
    </div>
  );
}

export default App;
