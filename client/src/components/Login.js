import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = event => {
    event.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubble-page");
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const onChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div className="login-page">
        <form onSubmit={login}>
          <label className="username-label">Username</label>
          <input
            type="text"
            name="username"
            onChange={onChange}
            value={credentials.username}
          />
          <label className="password-label">Password</label>
          <input
            type="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
