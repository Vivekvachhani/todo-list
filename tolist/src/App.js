import {Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import React from "react";
import Login from "./Login";
import Signin from "./Signin";
import Error from "./Error";
import Home from "./Home";
import Add from "./Add"
import Protected from "./Protected"
import Authenticate from "./Authenticate"
//import {useSelecter,useDispatch} from "react-redux";


function App() {
 // const mystate =useSelector((state)=>state.newUser)
  return (
    <>
     <Switch>
       <Authenticate exact path="/Signin" component={Signin}/>
       <Authenticate exact path="/Login" component={Login}/>
       <Protected exact path="/Home" component={Home} />
         
      <Redirect to="/Login"/>

     </Switch>
    </>
  );
}

export default App;
