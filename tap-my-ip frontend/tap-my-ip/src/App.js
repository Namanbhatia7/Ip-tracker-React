import './App.css';
import Home from './Components/home'
import Result from './Components/result'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
         <Switch>
         <Route exact path="/">
            <Home />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
         </Switch>

      </Router>
      </header>
    </div>
  );
}

export default App;
