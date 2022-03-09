import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ProductList from './components/ProductList';
import DetailProduct from './components/DetailProduct';
import New from './components/New';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:id" component={DetailProduct} />s
          <Route exact path="/new" component={New} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
