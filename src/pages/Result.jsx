import React, { Component } from 'react';
import { Spinner,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

class Result extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoaded:false,
            count:null,
            items:null,
            total : 5
        }
    }

    addItems = () =>{
        this.setState({total:this.state.total+5});
    }
    componentDidMount= () =>{
        var query = this.props.match.params.name;
        
        fetch("https://api.github.com/search/repositories?q="+query)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
                isLoaded:true,
	            items: result.items,
                count : result.total_count
	          });
              console.log(result.items);
	        },
	      )
	  }


    render() { 
   
        return ( <div>
            <NavBar/>
            {!this.state.isLoaded && 
            <div className="center-screen">
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
            </div>}
            {this.state.isLoaded && 
            <div style={{padding:"5%"}}> 
                
                 <b style={{fontSize:"30px"}}>{this.state.count} repository results </b>
                 <hr/>
                 {this.state.items.slice(0,this.state.total).map((item,i)=>(
                     <div>
                         <span><img src="https://www.seekpng.com/png/full/178-1787374_git-repository-icon-github-repo-icon-svg.png" width="15"/> &nbsp;</span>
                         <Link to={{pathname:"/detail/" +item.full_name}} ><span onClick="window.location.reload();">{item.full_name}</span> </Link>
                         <br/>
                         {item.description}
                         <br/>
                         <div>
                            <span>
                                <img src="https://img.icons8.com/ios/452/star--v1.png" width="13" /> &nbsp;
                            </span>
                            {item.stargazers_count} 
                    
                         {item.language != null && <span>
                             <span>&nbsp;&nbsp;&nbsp;
                                 <img src="https://www.freeiconspng.com/uploads/orange-circle-png-3.png" width="13"/>&nbsp;

                             </span>
                             {item.language}
                             </span>}
                         {item.open_issues != 0 && <span style={{opacity:"0.8"}}> &nbsp;&nbsp;
                            {item.open_issues} issues need help
                             </span>}
                                 
                        
                        </div>
                         <hr/>
                    </div>
                        
                 ))}

                 <Button onClick={this.addItems} variant="outline-dark"> Load more </Button>
            </div>}
                
        </div>);
    }
}
 
export default Result;