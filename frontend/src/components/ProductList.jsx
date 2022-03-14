import React, { useEffect, useState } from "react";
import { getProducts } from "../lib/api/products";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";
const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem",
  },
}));
const ProductList = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const handleGetPosts = async () => {
    const { data } = await getProducts();
    setProducts(data.products);
  };
  useEffect(() => {
    handleGetPosts();
  }, []);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <ProductForm handleGetPosts={handleGetPosts} />
          {products?.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                handleGetPosts={handleGetPosts}
              />
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductList;
