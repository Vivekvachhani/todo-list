import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./App.css";

const Login = () => {
  const histroy = useHistory();
  const alldata =   useSelector ((state) => state.allUser);
  const [store, setStore] = useState({
    email: "",
    pwd: "",
  });
  const handleclick = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStore({ ...store, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(alldata);
    console.log(store);
    const user = alldata.find((val) => {
      return val.email === store.email && val.pwd === store.pwd;
    });
    console.log(user);
    if (user) {
      localStorage.setItem("loggedUsed", JSON.stringify(user));
      histroy.push("/Home");
    } else {
      alert("password or email is invalid...");
    }
    // const list = JSON.parse(localStorage.getItem("listdata") || '[]');
    // console.log(list)
    // console.log(list, store);
    // const item = list.find(
    //   (x) => x.username === store.username && x.pwd === store.pwd
    // );
    // if (item) {
    //   console.log("login");
    //   chistroy.push("./Home");
    // } else {
    //   console.log("in correct");
    //   alert("Username & Password incorrect");
    // }
  };
  return (
    <>
      <div className="form-style-8">
        <form action="" onSubmit={submit}>
          <h1>Login Now!</h1>
          <div>
            <label htmlFor="Username">Email Address</label>
            <input
              type="text"
              id="username"
              name="email"
              value={store.username}
              onChange={handleclick}
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              value={store.pwd}
              onChange={handleclick}
            />
          </div>
          <input type="submit" value="Login" className="lg" />
          <input
            type="button"
            value="Create Account"
            onClick={() => histroy.push("./Signin")}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
