import React from "react";
import classes from "./YearElement.module.css";
import Aux from "../../hoc/Aux/Aux";

const yearelement = props => {
  return (
    <Aux>
      <p className={classes.Year}>{props.year}</p>
      <div className={classes.Text}>{props.text}</div>
    </Aux>
  );
};

export default yearelement;
