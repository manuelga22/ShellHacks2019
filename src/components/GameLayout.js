import React, { Component, Fragment } from "react";

import "./gameLayout.css";

class GameLayout extends Component {

  


  render() {
    return (
      <Fragment>
        <div className="players">
          <h2>TIC TAC TOE</h2>
          <div className="playersNames">
            <h5>dasdas</h5>
            <h5>asdasd</h5>
          </div>
        </div>
        <div className="gameBlock">
          <div className="tictacgrid">
            <div className="gridSquares"></div>
            <div className="gridSquares"></div>
            <div className="gridSquares"></div>
            <div className="gridSquares"></div>
            <div className="gridSquares"></div>
            <div className="gridSquares"></div>
            <div className="gridSquares"></div>
            <div className="gridSquares"></div>
            <div className="gridSquares"></div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default GameLayout;
