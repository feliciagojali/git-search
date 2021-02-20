import React, { Component } from 'react';
import { Navbar,Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {
        query:null
     }

     handleQuery = (e)=>{
         this.setState({query:e.target.value});
     }
    render() {
        return ( <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand href="/"><img src="https://icon-library.com/images/github-icon-png/github-icon-png-29.jpg" height="40"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" >
                <NavDropdown title={<span style={{color:"white"}}>Why? Github </span>} id="collasible-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
                    <Nav.Link style={{color:"white"}} href="#features">Team</Nav.Link>
                    <Nav.Link  style={{color:"white"}} href="#pricing">Enterprise</Nav.Link>
                <NavDropdown title={<span style={{color:"white"}}>Explore </span>} id="collasible-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
                    <Nav.Link  style={{color:"white"}} href="#pricing">Marketing</Nav.Link>
                <NavDropdown title={<span style={{color:"white"}}>Pricing </span>} id="collasible-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>

                </Nav>
                <input type="text" placeholder="Search" value={this.state.query} onChange={this.handleQuery} style={{height:"40px"}} className="mr-sm-2" />
                <Link to={{pathname:"/search/" + this.state.query}}  className="linkto"><Button  onClick="window.location.reload();" variant="outline-light">Search</Button></Link>
                </Navbar.Collapse>
            </Navbar>

        </div> );
    }
}

export default NavBar;
