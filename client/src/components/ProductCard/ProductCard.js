import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
  left: {
    textAlign: "left",
  },
}));

const ProductCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={`/images/airpods.jpg`} />
        <CardContent className={classes.left}>
          <Typography variant="h5" component="h2">
            Airpods
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.flexRight}>
          <strong>$500</strong>
        </Button>
        <Button variant="contained" color="primary">
          Add to Cart{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
