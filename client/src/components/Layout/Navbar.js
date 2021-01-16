import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@material-ui/core";

// icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Ecommerce
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit" endIcon={<ShoppingCartIcon />}>
              Cart
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
