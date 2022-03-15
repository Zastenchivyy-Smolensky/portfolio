import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import DetailProduct from "./components/DetailProduct";
import Edit from "./components/Edit";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id" component={DetailProduct} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
