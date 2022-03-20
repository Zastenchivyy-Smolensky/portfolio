import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import { getUserProducts } from "../../lib/api/user";
import ProductList from "../ProductList";

function UserPost() {
  const { loading, isSignedIn, currentUser } = useContext(AuthContext);
  const [userProducts, setUserProducts] = useState({});
  const history = useHistory();

  useEffect(() => {
    handleGetUserProducts();
  }, [currentUser]);
  const handleGetUserProducts = async () => {
    if (!loading) {
      if (isSignedIn) {
        const res = await getUserProducts(currentUser.id);
        console.log(res.data);
        setUserProducts(res.data);
      } else {
        <Redirect to="/signin" />;
      }
    }
  };

  const UserTable = () => {
    if (userProducts.length >= 1) {
      return <ProductList />;
    } else {
      return <h2>投稿はありません</h2>;
    }
  };
  return (
    <div>
      <h1>{currentUser.name}の投稿一覧</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
      >
        戻る
      </Button>
      <UserTable />
    </div>
  );
}

export default UserPost;
