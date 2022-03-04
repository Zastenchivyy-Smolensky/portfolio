import './App.css';
import List from './component/List';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={List}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
