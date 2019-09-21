import React,{Component, Fragment} from 'react';
import {  Link } from "react-router-dom";

class Join extends Component{
  state={
    partyCode:"",
    payer2:""
  }

  handleChangePartyName(e){
    this.setState({
      partyCode:e.target.value
    })
   }

   handleUsernameChange(e){
     this.setState({
      payer2: e.target.value
     })
   }
   submitForm(e){
    e.preventDefault();
    this.history.push(`/joinMatch/${this.state.partyCode}/${this.state.player1}`); 
  }
render(){
  return(
   <Fragment>
     <h1>JOIN A GAME!!</h1>
     <div className="forms">
     <form onSubmit = {this.submitForm}>
     <div className = "partyName">
        <label className="label">Enter the party code</label>
        <input onChange= {e=>this.handleChangePartyName(e)}/>
     </div>
     <div className="userName">
        <label className="label">Enter your name</label>
        <input onChange= {e=>this.handleUsernameChange(e)}/>
     </div>
     <button className="btn red">HOST</button>
     </form>
     </div>
   </Fragment>
  );
}




}
export default Join;