import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { submitdata } from "./actions/index";

const Signin = () => {
  const histroy = useHistory();
  const [data, setData] = useState({
    username: "",
    pwd: "",
    email: "",
    todo: [],
  });
  const dispatch = useDispatch();
  const [repwd, setRepwd] = useState();

  const handleinput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.pwd === repwd) {
      dispatch(submitdata(data));
      histroy.push("/Login");
    } else {
      alert("password does not match");
    }
  };

  return (
    <>
      <div className="form-style-8">
        <form action="" onSubmit={submitForm}>
          <h1>Sign Up Now!</h1>
          <div>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              id="username"
              type="text"
              required
              value={data.username}
              onChange={handleinput}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              value={data.email}
              onChange={handleinput}
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              name="pwd"
              id="pwd"
              type="text"
              value={data.pwd}
              onChange={handleinput}
            />
          </div>
          <div>
            <label htmlFor="ConformPassword">ConformPassword</label>
            <input
              name="Conpwd"
              id="Conpwd"
              type="text"
              value={repwd}
              onChange={(e) => setRepwd(e.target.value)}
            />
          </div>
          <input type="submit" value="SignUp" className="lg" />
        </form>
      </div>
    </>
  );
};

export default Signin;
