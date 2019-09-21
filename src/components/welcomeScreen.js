import React, {Component, Fragment} from 'react';
import {  Link } from "react-router-dom";
// import M from 'materialize-css';
import './components.css';
class WelcomeScreen extends Component {
render(){
   return(
  <Fragment>
    <div className="center">
    <div><h1>TIC TAC TOE</h1></div>
    <div className = "componentButtons">
    <Link to="/host"><button className= "btn margins">Host game</button></Link>
    <Link to="/join"><button className= "btn margins">Join game</button></Link>
    </div>
    </div>
  </Fragment>

  );
}



}
export default WelcomeScreen;