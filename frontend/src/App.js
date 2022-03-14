import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;
