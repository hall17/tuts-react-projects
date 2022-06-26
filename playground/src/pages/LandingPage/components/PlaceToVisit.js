import { makeStyles } from "@mui/styles";
import React from "react";
import useWindowPosition from "../../../hooks/useWindowPosition";
import places from "../places";
import ImageCard from "./ImageCard";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    [theme.breakpoints.down("md")] : {
        flexDirection: 'column'
    }
  },
}));

const PlaceToVisit = () => {
  const classes = useStyles();
  const checked = useWindowPosition('header')
  return (
    <div className={classes.root} id="place-to-visit">
      {places.map((p,i) => (
        <ImageCard key={i} place={p} checked={checked} />
      ))}
    </div>
  );
};

export default PlaceToVisit;
