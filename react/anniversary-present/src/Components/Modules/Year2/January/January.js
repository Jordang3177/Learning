import React from "react";
import classes from "./January.module.css";
import Home1 from "../../../../Assets/Pictures/Year 2/January/Home1.JPG";
import Home2 from "../../../../Assets/Pictures/Year 2/January/Home2.JPG";
import Snowman1 from "../../../../Assets/Pictures/Year 2/January/Snowman1.jpg";

function January() {
  return (
    <div>
      <img src={Home1} className={classes.img1} alt="Home1" />
      <img src={Home2} className={classes.img2} alt="Home2" />
      <img src={Snowman1} className={classes.img1} alt="Snowman1" />
      <p>We spent the winter break together at Woodbridge and even Built a snowman!</p>
    </div>
  );
}

export default January;
