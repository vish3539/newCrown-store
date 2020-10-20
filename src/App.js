import React from "react";
import "./App.css";
import HomePageComp from "./pages/Homepage/HomePageComp";
import { Route, Switch } from "react-router-dom";
import ShopComp from "./pages/shop/ShopComp";
import HeaderComp from "./components/HeaderComponent/HeaderComp";
import SigninupComp from "./pages/signInandsignUp/signinupComp";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtil.js";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser}= this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComp/>
        <Switch>
          <Route path="/shop" component={ShopComp} />
          <Route path="/signin" component={SigninupComp} />
          <Route path="/" component={HomePageComp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToprops = dispatch =>({ 
  // dispatch is a way for redux to know that whatever the object you are passing is
  // going to be an action object that will be passed to every reducer.
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToprops)(App);
