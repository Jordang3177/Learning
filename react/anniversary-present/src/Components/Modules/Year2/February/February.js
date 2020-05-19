import React from "react";
import classes from "./February.module.css";
import Flood1 from "../../../../Assets/Pictures/Year 2/February/Flood1.jpg";
import Flood2 from "../../../../Assets/Pictures/Year 2/February/Flood2.jpg";

function February() {
  return (
    <div>
      <img src={Flood1} className={classes.img1} alt="Flood1" />
      <img src={Flood2} className={classes.img2} alt="Flood2" />
      <p>
        Not alot happened in this month. You went back to New York for your last semester
        at NYU and I kept going to IU. The picture here is a flood that happened right
        next to woodbridge
      </p>
    </div>
  );
}

export default February;
