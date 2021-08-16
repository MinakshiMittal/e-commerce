import "./Login.css";
import { useAuth } from "../../Contexts";
import { useState } from "react";

export const Login = () => {
  const { isUserLogin, loginUserWithCredentials, logout } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = (event) => {
    event.preventDefault();
    isUserLogin ? logout() : loginUserWithCredentials(email, password);
  };

  return (
    <div className="login-page">
      <div className="background-image-container">
        <img
          src="https://cdn.pixabay.com/photo/2015/06/02/17/35/identity-795295_1280.jpg"
          alt="background"
        />
      </div>
      <div className="form-container">
        <h1 className="form-heading">Log In</h1>
        <form className="login-form">
          <label>Username</label>
          <input
            type="email"
            placeholder="Your email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button class="button primary-btn" onClick={loginHandler}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
