import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            items:null,
        }
    }
    
     componentDidMount = () =>{
         var url = "https://api.github.com"+ this.props.match.url;
         var fetchurl = url.replace("detail","repos");
         fetch(fetchurl)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            items:result,
                isLoaded:true
	          });
	        },
	      )

        var readmeurl = fetchurl + "/readme";
        fetch(readmeurl)
        .then(res => res.json())
        .then(
          (result) => {
            
            var showdown  = require('showdown'),
            converter = new showdown.Converter(),
            html      = converter.makeHtml(atob(result.content));
            this.setState({
                readme:html
            })
            console.log(html);
            var newhtml = "<div style='margin:3% 5%;padding:1%;border:1px solid lightgrey'><h1> README.md </h1> <hr/>" +this.state.readme+"</div>";
            document.body.innerHTML += newhtml;
            console.log(newhtml);

            
          },
        )
     }
    render() { 
        return ( <div>
            <NavBar/>
            <br/><br/><br/><br/>
            {this.state.isLoaded &&
            <div style={{padding:"3% 3% 1% 4%"}}>
                <span><img src="https://www.seekpng.com/png/full/178-1787374_git-repository-icon-github-repo-icon-svg.png" width="15"/> &nbsp;</span>
                <Link style={{fontSize:"20px"}}>{this.state.items.full_name}</Link>
                <br/>
                {this.state.items.description}
                <br/>
            </div>

        }
         
        </div>
            );
    }
}
 
export default Detail;