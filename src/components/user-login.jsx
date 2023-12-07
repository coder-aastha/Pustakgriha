import React from 'react'
import './Login.css'
import { MdEmail } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

const Login = () => {
  return (
    <>
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>

        <div className='close-icon-login'>
        <a href="#"><span className="close-icon-login"><IoCloseCircle /></span></a>
        </div>

        <form action="#">
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
            <a href="#"><span className="email-icon-login"><MdEmail /></span></a>
          </div>

          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <div className="register">
            <p>
              Don't have an account?
              <a href="register" className="Login-link">
                {' '}
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
