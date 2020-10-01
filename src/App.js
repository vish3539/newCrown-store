import React from "react";
import "./App.css";
import HomePageComp from "./pages/Homepage/HomePageComp";
import { Route, Switch } from "react-router-dom";
import ShopComp from "./pages/shop/ShopComp";
import HeaderComp from "./components/HeaderComponent/HeaderComp";
import SigninupComp from "./pages/signInandsignUp/signinupComp";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtil.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
            console.log(this.state)
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
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
