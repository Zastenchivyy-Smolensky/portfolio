import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import DetailProduct from "./components/DetailProduct";
import Edit from "./components/Edit";
import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "./lib/api/auth";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CommonLayout from "./components/layouts/CommonLayout";
import UserPost from "./components/users/UserPost";

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();
      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
        console.log(res?.data.data);
      } else {
        console.log("no current user");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser]);

  const Private = ({ children }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Redirect to="signin" />;
      }
    } else {
      return <></>;
    }
  };
  return (
    <Router>
      <AuthContext.Provider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
        }}
      >
        <CommonLayout>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            {/* <Private> */}
            <Route exact path="/" component={ProductList} />
            <Route path="/product/:id" component={DetailProduct} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/user/products" compoent={UserPost} />
            {/* </Private> */}
          </Switch>
        </CommonLayout>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
