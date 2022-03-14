import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import DetailProduct from "./components/DetailProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/detail/:id" component={DetailProduct} />
      </Switch>
    </Router>
  );
}

export default App;
