import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";
function App() {
  let isLogin = localStorage.getItem("isLogin") || false;
  console.log(isLogin);

  return (
    <div className="bg">
      <div className="el-top"></div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={!Boolean(isLogin) ? Register : Home} />
        </Switch>
      </BrowserRouter>
      <div className="el-bot"></div>
    </div>
  );
}

export default App;
