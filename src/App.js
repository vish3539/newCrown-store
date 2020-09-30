import React from "react";
import "./App.css";
import HomePageComp from "./pages/Homepage/HomePageComp";
import { Route, Switch } from "react-router-dom";
import ShopComp from "./pages/shop/ShopComp";
import HeaderComp from "./components/HeaderComponent/HeaderComp";
import SigninupComp from "./pages/signInandsignUp/signinupComp";
import {auth} from "./firebase/firebaseUtil.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComp currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/shop" component={ShopComp} />
          <Route path="/signin" component={SigninupComp} />
          <Route path="/" component={HomePageComp} />
        </Switch>
      </div>
    );
  }
}

export default App;
