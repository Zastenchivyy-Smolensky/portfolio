import './App.css';
import List from './component/todo/List';

import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom"
import Detail from './component/todo/Detail';
import New from './component/todo/New';
import Edit from './component/todo/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={List}/>
          <Route path='/products/:id' component={Detail} />
          <Route path="/new" component={New} />
          <Route path="/edit/:edit" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
