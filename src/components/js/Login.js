import React from "react";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="Login-container">
      <form action="action_page.php" method="post" className="Login-boxes">
        <h3>Login now!</h3>
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
