import React, { Component } from "react";
import FormInputComp from "../FormInput/FormInputComp";
import "./SigninStyles.scss";
import CustomButtonComp from "../CustomButton/CustomButtonComp";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtil";

class SigninComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  // form takes care of this
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  // the input field uses this.
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInputComp
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInputComp
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="button">
            <CustomButtonComp type="submit">Sign In</CustomButtonComp>
            <CustomButtonComp onClick={signInWithGoogle} isGoogleSignIn>
              Google Sign in
            </CustomButtonComp>
          </div>
        </form>
      </div>
    );
  }
}

export default SigninComp;
