import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Loginpage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className="log-wrapper">
      <div className="Caption">
        <p>
          Go to Django Administration at 127.0.0.1:8000/admin/ <br />
          Username = bhavesh Password=bmdsa#51
        </p>
      </div>
      <div className="loginform">
        <form onSubmit={loginUser} className="dataform">
          <label>
            <h1>User Login</h1>
          </label>
          <input type="text" name="username" placeholder="Enter Username" />
          <input type="password" name="password" placeholder="Enter Password" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
