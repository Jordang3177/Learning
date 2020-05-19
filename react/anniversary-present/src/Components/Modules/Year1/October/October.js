import React from "react";
import classes from "./October.module.css";
import Puppy1 from "../../../../Assets/Pictures/Year 1/October/Puppy1.jpg";
import Puppy2 from "../../../../Assets/Pictures/Year 1/October/Puppy2.jpg";
import Puppy3 from "../../../../Assets/Pictures/Year 1/October/Puppy3.jpg";
import Messy1 from "../../../../Assets/Pictures/Year 1/October/Messy1.jpg";

function October() {
  return (
    <div>
      <img src={Puppy1} className={classes.img1} alt="Puppy1" />
      <img src={Puppy2} className={classes.img2} alt="Puppy2" />
      <img src={Puppy3} className={classes.img1} alt="Puppy3" />
      <img src={Messy1} className={classes.img2} alt="Messy1" />
      <p>
        During this time we kept raising cheese and trying to figure out the best way to
        do so. I also was still being a messy person and didn't always keep up with
        hygeine as I should :)
      </p>
    </div>
  );
}

export default October;
