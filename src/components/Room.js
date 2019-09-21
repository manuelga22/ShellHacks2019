import React,{ Component, Fragment} from 'react';


function getPlayersName(){
  return;
}

class Room extends Component{
  render(){
    return(
     <Fragment>
       {this.getPlayersName}
       <button className="btn red">PLAY!</button>
     </Fragment>
    );
  }
}
export default Room;