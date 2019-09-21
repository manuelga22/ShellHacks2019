import React,{Component, Fragment} from 'react';
import axios from 'axios';

class Join extends Component{
  state={
    code:"",
    player2:""
  }

   handleChangePartyName=(e)=>{
    this.setState({
      partyCode:e.target.value
    })
   }

   handleUsernameChange=(e)=>{
     this.setState({
      player2: e.target.value
     })
   }
   submitForm=(e)=>{
    e.preventDefault();
    this.history.push(`/game/${this.state.code}/${this.state.player2}`); 
   }
   
   joinGame=()=>{
     axios.post('http://localhost:3000/api/join/game',{
       code: this.state.code,
       player2: this.state.player2
     })
     .then((response)=>{
       console.log(response);
     }).catch(err=>{console.log(err)})
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
     <button className="btn red" onClick={this.joinGame}>JOIN GAME</button>
     </form>
     </div>
   </Fragment>
  );
}




}
export default Join;