import React from "react";
import "../css/UserRegister.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const UserRegister = () => {
  return (
    <>
      <div>
        <div className="wrapper1">
          <div className="form-box register">
            <h2>Register</h2>

            <form action="#">
              <div className="inputbox">
                <input type="username" required />
                <label>Username</label>
                <a href="#">
                  <span className="user-icon-register">
                    <FaUser />
                  </span>
                </a>
              </div>

              <div className="inputbox">
                <input type="email" required />
                <label>Email</label>
                <a href="#">
                  <span className="user-icon-register">
                    <MdEmail />
                  </span>
                </a>
              </div>

              <div className="inputbox">
                <input type="password" required />
                <label>Password</label>
                <a href="#">
                  <span className="user-icon-register">
                    <RiLockPasswordFill />
                  </span>
                </a>
              </div>

              <div className="conditions">
                <label>
                  <input type="checkbox" />I agree the terms & conditions
                </label>
              </div>

              <button type="submit" className="register-btn">
                Register
              </button>

              <div className="login">
                <p>
                  Already have an account?
                  <a href="login" className="Register-link">
                    {" "}
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
