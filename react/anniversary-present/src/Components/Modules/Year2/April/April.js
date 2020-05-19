import React from "react";
import classes from "./April.module.css";
import Puppy1 from "../../../../Assets/Pictures/Year 2/April/Puppy1.jpg";
import Puppy2 from "../../../../Assets/Pictures/Year 2/April/Puppy2.jpg";
import Puppy3 from "../../../../Assets/Pictures/Year 2/April/Puppy3.jpg";

function April() {
  return (
    <div>
      <img src={Puppy1} className={classes.img1} alt="Puppy1" />
      <img src={Puppy2} className={classes.img2} alt="Puppy2" />
      <img src={Puppy3} className={classes.img1} alt="Puppy3" />
      <p>
        This seemed to be another uneventful month. Me and Cheese were just hanging out
        while me and you both finished up the spring semesters.{" "}
      </p>
    </div>
  );
}

export default April;
