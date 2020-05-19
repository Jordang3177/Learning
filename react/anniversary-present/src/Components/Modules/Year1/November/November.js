import React from "react";
import classes from "./November.module.css";
import NY1 from "../../../../Assets/Pictures/Year 1/November/NY1.jpg";
import NY2 from "../../../../Assets/Pictures/Year 1/November/NY2.jpg";
import NY3 from "../../../../Assets/Pictures/Year 1/November/NY3.jpg";
import NY4 from "../../../../Assets/Pictures/Year 1/November/NY4.jpg";
import NY5 from "../../../../Assets/Pictures/Year 1/November/NY5.jpg";
import Puppy1 from "../../../../Assets/Pictures/Year 1/November/Puppy1.jpg";
import Puppy2 from "../../../../Assets/Pictures/Year 1/November/Puppy2.jpg";

function November() {
  return (
    <div>
      <img src={NY1} className={classes.img1} alt="NY1" />
      <img src={NY2} className={classes.img2} alt="NY2" />
      <img src={NY3} className={classes.img1} alt="NY3" />
      <img src={NY4} className={classes.img2} alt="NY4" />
      <img src={NY5} className={classes.img1} alt="NY5" />
      <img src={Puppy1} className={classes.img2} alt="Puppy1" />
      <img src={Puppy2} className={classes.img1} alt="Puppy2" />
      <p>
        This was the month where we went to New York during Thanksgiving break to go to a
        Bvlgari sale. I just remember sitting there for hours in the early morning so that
        we could be sure that we were going to be able to get the right bags for you to
        sell. Even though we didn't make alot of money off of this whole thing I will
        always remember sitting out in the cold with you and just waiting.{" "}
      </p>
    </div>
  );
}

export default November;
