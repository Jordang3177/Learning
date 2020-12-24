import React from "react";
import classes from "./YearElement.module.css";
import Auxillary from "../../hoc/Auxillary/Auxillary";

const yearelement = props => {
  return (
    <Auxillary>
      <p className={classes.Year}>{props.year}</p>
      <div className={classes.Text}>{props.text}</div>
    </Auxillary>
  );
};

export default yearelement;
