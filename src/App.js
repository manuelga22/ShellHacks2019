import React from 'react';
import WelcomeScreen from './components/welcomeScreen';
import Host fr
import {  Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Route path="/" component={WelcomeScreen}/>
    <Switch>
    <Route exact path="/host" component={Host}/>
    <Route exact path="/join" component={Join}/>
    </Switch>
    </div>
  );
}

export default App;
