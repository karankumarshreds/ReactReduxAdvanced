import React from "react";
import { makeStyles, Container, Grid } from "@material-ui/core";
import products from "../products";
import Card from "../components/ProductCard/ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    margin: "auto",
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  console.log(products);
  return (
    <Container>
      <h1>Home page</h1>
      <Grid align="center">
        <Grid
          className={classes.root}
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justify="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeScreen;
