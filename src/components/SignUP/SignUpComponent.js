import React from "react";
import "./signUpStyles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebaseUtil";
import FormInputComp from "../FormInput/FormInputComp";
import CustomButtonComp from "../CustomButton/CustomButtonComp";

class SignUpComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      // the below will clear the form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event =>{
      const {name, value}=event.target;
      this.setState({[name]:value});
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>SignUp with your email and passowrd</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInputComp
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display name"
            required
          ></FormInputComp>

          <FormInputComp
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInputComp>

          <FormInputComp
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          ></FormInputComp>

          <FormInputComp
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          ></FormInputComp>
          <CustomButtonComp type="submit">Sign Up</CustomButtonComp>
        </form>
      </div>
    );
  }
}

export default SignUpComponent;
