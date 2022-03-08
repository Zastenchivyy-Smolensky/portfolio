import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch , Route} from "react-router-dom"
import {ProductList} from './component/ProductList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
