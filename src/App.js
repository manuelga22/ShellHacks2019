import React,{ Component} from 'react';
import WelcomeScreen from './components/welcomeScreen';
import Host from './components/Host';
import Join from './components/Join';
import Game from './components/GameLayout';
import Room from './components/Room';
import {  Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
  return (
    <div className="App">
    <Route exact path="/" component={WelcomeScreen}/>
    <Switch>
    <Route exact path="/host" component={Host}/>
    <Route exact path="/join" component={Join}/>
    <Route exact path="/game" component={Game}/>
    <Route exact path="/room" component={Room}/>
    </Switch>
    </div>
  );
  }
}

export default App;
