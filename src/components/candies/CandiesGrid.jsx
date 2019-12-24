import React from "react";
import { Grid } from "@material-ui/core";
import ImageCard from "../common/ImageCard";

import SampleImage from "../../images/sample/bala1.png";

const samples = [
  { id: 1, image: SampleImage, name: "Bala de mel" },
  { id: 2, image: SampleImage, name: "Bala de chocolate" },
  { id: 3, image: SampleImage, name: "Bala de uva" },
  { id: 2, image: SampleImage, name: "Bala de chocolate" },
  { id: 3, image: SampleImage, name: "Bala de uva" },
  { id: 2, image: SampleImage, name: "Bala de chocolate" },
  { id: 3, image: SampleImage, name: "Bala de uva" },
  { id: 2, image: SampleImage, name: "Bala de chocolate" },
];

const CandiesGrid = ({ onSelect }) => {
  return (
    <Grid container spacing={3}>
      {samples.map((candy, key) => (
        <Grid item md={3} key={candy.name + key}>
          <ImageCard image={candy.image} name={candy.name} onClick={id => onSelect(id)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CandiesGrid;
