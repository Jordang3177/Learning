import React from "react";
import classes from "./January.module.css";
import Leasing1 from "../../../../Assets/Pictures/Year 1/January/Leasing1.jpg";
import NY1 from "../../../../Assets/Pictures/Year 1/January/NY1.jpg";
import NY2 from "../../../../Assets/Pictures/Year 1/January/NY2.jpg";
import Puppy1 from "../../../../Assets/Pictures/Year 1/January/Puppy1.jpg";
import Puppy2 from "../../../../Assets/Pictures/Year 1/January/Puppy2.jpg";
import Puppy3 from "../../../../Assets/Pictures/Year 1/January/Puppy3.jpg";

function January() {
  return (
    <div>
      <img src={Leasing1} className={classes.img1} alt="Leasing1" />
      <img src={NY1} className={classes.img2} alt="NY1" />
      <img src={NY2} className={classes.img1} alt="NY2" />
      <img src={Puppy1} className={classes.img2} alt="Puppy1" />
      <img src={Puppy2} className={classes.img1} alt="Puppy2" />
      <img src={Puppy3} className={classes.img2} alt="Puppy3" />
      <p>
        This was when you first went to New York to move in and start going to grad school
        at New York University! You were picking out alot of different furniture that you
        were going to get at Ikea. <br />
        This was also the first month that cheese was big enough to be able to jump up on
        the bed on his own.
      </p>
    </div>
  );
}

export default January;
