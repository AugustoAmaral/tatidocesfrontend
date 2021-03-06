import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "250",
    height: "250"
  },
  media: {
    height: 140
  }
});

const ImageCard = ({ image, name, onClick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title="Contemplative Reptile" />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImageCard;
