import React from "react";
import classes from "./August.module.css";
import Travel1 from "../../../../Assets/Pictures/Year 3/August/Travel1.JPG";
import Travel2 from "../../../../Assets/Pictures/Year 3/August/Travel2.JPG";
import Travel3 from "../../../../Assets/Pictures/Year 3/August/Travel3.JPG";
import Travel4 from "../../../../Assets/Pictures/Year 3/August/Travel4.jpg";

function August() {
  return (
    <div>
      <img src={Travel1} className={classes.img1} alt="Travel1" />
      <img src={Travel2} className={classes.img2} alt="Travel2" />
      <img src={Travel3} className={classes.img1} alt="Travel3" />
      <img src={Travel4} className={classes.img2} alt="Travel4" />
      <p>
        This was when we traveled with your brother and mom to DC, Boston, and Nashville.
        We went to alot of different museums and historic places together and saw alot of
        different places of the United States together.
      </p>
    </div>
  );
}

export default August;
