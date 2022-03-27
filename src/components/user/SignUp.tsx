import { Fragment } from 'react';
import Input from '../layout/form/Input';
import './User.scss';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const SignUp = () => {
  return (
    <Fragment>
      <Header />
        <form>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account.</p>
                <Input content={'Email'} placeholder={'Please Enter Your Email'} type={'email'} ></Input>
                <Input content={'First Name'} placeholder={'Please Enter Your First Name'} type={'text'} ></Input>
                <Input content={'Last Name'} placeholder={'Please Enter Your Last Email'} type={'text'} ></Input>
                <Input content={'Password'} placeholder={'Please Enter Your Password'} type={'password'} ></Input>
                <Input content={'Confirm Password'} placeholder={'Please Confirm Your Password'} type={'password'} ></Input>
                <p>By creating an account you agree to our Terms & Privacy.</p>
                <button type="submit">Submit</button>
                <p>Already have an account?  <Link to='/SignIn'>Sign In</Link></p>
        </form>
        <Footer />
    </Fragment>
  )
}

export default SignUp;