import React from "react";
import classes from "./April.module.css";
import Fat1 from "../../../../Assets/Pictures/Year 1/April/Fat1.jpg";
import Messy1 from "../../../../Assets/Pictures/Year 1/April/Messy1.jpg";
import Puppy1 from "../../../../Assets/Pictures/Year 1/April/Puppy1.jpg";
import Puppy2 from "../../../../Assets/Pictures/Year 1/April/Puppy2.jpg";
import Puppy3 from "../../../../Assets/Pictures/Year 1/April/Puppy3.jpg";

function April() {
  return (
    <div>
      <img src={Fat1} className={classes.img1} alt="Fat1" />
      <img src={Messy1} className={classes.img2} alt="Messy1" />
      <img src={Puppy1} className={classes.img1} alt="Puppy1" />
      <img src={Puppy2} className={classes.img2} alt="Puppy2" />
      <img src={Puppy3} className={classes.img1} alt="Puppy3" />
      <p>
        During this month I remember telling myself that I was going to start losing
        weight so that I wouldn't have to be so big anymore. Also as you can see I was
        still a bit messy :)
      </p>
    </div>
  );
}

export default April;
