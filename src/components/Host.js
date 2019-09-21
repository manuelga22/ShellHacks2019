import React,{Component} from 'react';
import {  Link } from "react-router-dom";

class Host extends Component{
  state={
    partyName:"",
    player1:"",
  }
  handleChangePartyName= (e)=>{
   this.setState({
    partyName:e.target.value
   })
   console.log(this.state.partyName)
  }
  handleUsernameChange=(e)=>{
    this.setState({
       player1: e.target.value
    })
    console.log(this.state.username)
  }

  submitForm(e){
    e.preventDefault();
    this.history.push(`/room/${this.state.partyName}/${this.state.player1}`); 
  }

render(){
  return(
   <div className="centeredBlock">
     <h1>HOST YOUR GAME!</h1>
     <div className="forms">
     <form onSubmit={this.submitForm}>
     <div className = "partyName">
        <label className="label">Enter a party code</label>
        <input onChange= {this.handleChangePartyName}/>
     </div>
     <div className="userName">
        <label className="label">Enter your name</label>
        <input onChange= {this.handleUsernameChange} />
     </div>
     <button className="btn red">JOIN GAME</button>
     </form>
     </div>
   </div>
  );
}

}
export default Host;