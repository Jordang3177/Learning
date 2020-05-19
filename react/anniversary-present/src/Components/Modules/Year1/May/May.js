import React from "react";
import classes from "./May.module.css";
import leasing from "../../../../Assets/Pictures/Year 1/May/Leasing1.jpg";
import leasing2 from "../../../../Assets/Pictures/Year 1/May/Leasing2.jpg";
import Marriage1 from "../../../../Assets/Pictures/Year 1/May/Marriage1.jpg";
import Marriage2 from "../../../../Assets/Pictures/Year 1/May/Marriage2.jpg";

function May() {
  return (
    <div className={classes.scroll}>
      <img className={classes.img1} alt="Marriage Certificate" src={Marriage1}></img>
      <img className={classes.img2} alt="Marriage" src={Marriage2}></img>
      <img className={classes.img1} alt="leasing" src={leasing}></img>
      <img className={classes.img2} alt="leasing" src={leasing2}></img>
      <p>
        We finally got married during this month! After being together for almost three
        years we went out to Fishers and got married together. We have been through alot
        to get to this stage. But I know that you are the only one I want to be with and
        will ever be with.
        <br />
        Also during this month we were out looking at alot of different places to start a
        message business
      </p>
    </div>
  );
}

export default May;
