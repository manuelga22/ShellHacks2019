import React,{Component} from 'react';
import axios from 'axios';

class Host extends Component{
  state={
    code:"",
    player1:"",
  }
  handleChangePartyName= (e)=>{
   this.setState({
    code:e.target.value
   })
 
  }
  handleUsernameChange=(e)=>{
    this.setState({
       player1: e.target.value
    })
    
  }

  submitForm(e){
    e.preventDefault();
    this.history.push(`/game/${this.state.code}/${this.state.player2}`);  
  }

  createGame=()=>{
    axios.post('http://localhost:3000/api/create/game',{
      code: this.props.match.params.code,
      player1: this.state.player1
    })
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>console.log(err))
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
     <button className="btn red" onClick={this.createGame}>HOST GAME</button>
     </form>
     </div>
   </div>
  );
}

}
export default Host;