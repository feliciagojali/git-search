import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        query: null,
    }

    handleQueryChange = (e) =>{
        this.setState({query: e.target.value});
    }
  
    render() { 
        return ( <div className="center-screen" style={{backgroundColor:"black"}}>
            <div style={{fontSize:"60px",color:"white"}}><b>Github Search Repositories</b></div>
            <br/> 
            <div>
              <span>  <img src="https://icon-library.com/images/github-icon-png/github-icon-png-29.jpg" width="40"/> </span>
              &nbsp;&nbsp; <input value={this.state.query} onChange={this.handleQueryChange} style={{backgroundColor:"black",color:"white",border:"1px solid grey"}}type="text" ></input>
              &nbsp;&nbsp;&nbsp;&nbsp;<Link to={{pathname:"/search/" + this.state.query}} className="linkto"> <button onClick={this.onSubmit} style={{backgroundColor:"grey",borderRadius:"3px",color:"white",fontSize:"15px",padding:"3px 14px"}}> Search </button>
                </Link>
                </div>
            <br/>
            
        </div> );
    }
}
 
export default Home;