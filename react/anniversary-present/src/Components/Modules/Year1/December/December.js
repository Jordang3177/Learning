import React from "react";
import classes from "./December.module.css";
import Desctruction from "../../../../Assets/Pictures/Year 1/December/Desctruction.jpg";
import Puppy1 from "../../../../Assets/Pictures/Year 1/December/Puppy1.jpg";
import Puppy2 from "../../../../Assets/Pictures/Year 1/December/Puppy2.jpg";

function December() {
  return (
    <div>
      <img src={Desctruction} className={classes.img1} alt="Desctruction" />
      <img src={Puppy1} className={classes.img2} alt="Puppy1" />
      <img src={Puppy2} className={classes.img1} alt="Puppy2" />
      <p>
        Still raising cheese and just doing the best we could. This was also a time where
        something happened in the wall to make it so that the water valve broke and then
        we had to have giant fans in the living room to dry the place for weeks.
      </p>
    </div>
  );
}

export default December;
