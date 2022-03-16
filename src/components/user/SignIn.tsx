import Input from "../layout/form/Input";
import "./User.scss";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
const SignIn = () => {
  return (
    <Fragment>
      <Header />
      <form>
        <h2>Sign In</h2>
        <Input
          content={"Email"}
          placeholder={"Please Enter Your Email"}
          type={"email"}
        ></Input>
        <Input
          content={"Password"}
          placeholder={"Please Enter Your Password"}
          type={"password"}
        ></Input>
        <Input type={"checkbox"} content={"Remember"} placeholder="">
          {" "}
          Remember me{" "}
        </Input>
        <button type="submit">Submit</button>
        <p className="psw">
          Forgot <a href="#">password?</a>
        </p>
        <p>
          Don't have an account yet? <Link to="/SignUp">Sign Up</Link>
        </p>
      </form>
      <Footer />
    </Fragment>
  );
};

export default SignIn;
