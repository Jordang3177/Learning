import React from "react";
import classes from "./BranchingLine.module.css";
import Dot from "../Dot/Dot";

const branchingline = (props) => {
  return (
    <div className={classes.vl}>
      <Dot date={"May " + props.year} side={"right"}></Dot>
      <Dot date={"June " + props.year} side={"left"}></Dot>
      <Dot date={"July " + props.year} side={"right"}></Dot>
      <Dot date={"Aug " + props.year} side={"left"}></Dot>
      <Dot date={"Sept " + props.year} side={"right"}></Dot>
      <Dot date={"Oct " + props.year} side={"left"}></Dot>
      <Dot date={"Nov " + props.year} side={"right"}></Dot>
      <Dot date={"Dec " + props.year} side={"left"}></Dot>
      <Dot date={"Jan " + (props.year + 1)} side={"right"}></Dot>
      <Dot date={"Feb " + (props.year + 1)} side={"left"}></Dot>
      <Dot date={"Mar " + (props.year + 1)} side={"right"}></Dot>
      <Dot date={"Apr " + (props.year + 1)} side={"left"}></Dot>
    </div>
  );
};

export default branchingline;
