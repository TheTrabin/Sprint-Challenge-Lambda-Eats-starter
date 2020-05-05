import React, {useState} from "react";
import {Route, Switch, } from "react-router-dom";
import Bar from './components/Bar';
import Home from './components/Home';
import Form from './components/Form';
import Order from './components/Order';
import "./App.css";
import styled from 'styled-components';

const Applette = styled.div `
background: black;`;

const App = () => {
  return (
    <Applette>
    <div className="nav-links">
    <Bar />
    </div>
    <div>
      <Switch>
    <Route path="/Order" component="Order">
      <Order />
    </Route>
    <Route path="/Pizza" component="Form">
      <Form />
    </Route>
    <Route path="/" component="Home">
      <Home />
    </Route>
    </Switch>
    </div>
    </Applette>
  );
};
export default App;
