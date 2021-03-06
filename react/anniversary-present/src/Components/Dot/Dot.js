import React from "react";
import classes from "./Dot.module.css";

const dot = (props) => {
  var side = props.side;
  var side_class = null;
  if (side === "left") {
    side_class = classes.left;
  } else {
    side_class = classes.right;
  }
  return (
    <div className={classes.push}>
      <p>
        <span onClick={props.clicker} className={side_class}></span>
        <span>{props.date}</span>
      </p>
    </div>
  );
};

export default dot;
