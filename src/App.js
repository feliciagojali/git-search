import './App.css';
import Home from './pages/Home';
import Result from './pages/Result';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/search/:name" render={(props) => <Result {...props} />} />
        <Route path="/detail/:url/:repo" render={(props) => <Detail {...props}/>}/>
      </Switch>

    </Router>
  );
}

export default App;
