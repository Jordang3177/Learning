import React from "react";
import classes from "./March.module.css";
import Birthday from "../../../../Assets/Pictures/Year 1/March/Birthday.jpg";
import Cake from "../../../../Assets/Pictures/Year 1/March/Cake.jpg";
import Puppy1 from "../../../../Assets/Pictures/Year 1/March/Puppy1.jpg";
import Puppy2 from "../../../../Assets/Pictures/Year 1/March/Puppy2.jpg";

function March() {
  return (
    <div>
      <img src={Birthday} className={classes.img1} alt="Birthday" />
      <img src={Cake} className={classes.img2} alt="Cake" />
      <img src={Puppy1} className={classes.img1} alt="Puppy1" />
      <img src={Puppy2} className={classes.img2} alt="Puppy2" />
      <p>
        This was when you sent me an amazing birthday cake and when me and cheese went
        back to Bloomington. This cake was one of the most memerable cakes I have ever
        recieved and will always remember it. Thank you for that Honey.
      </p>
    </div>
  );
}

export default March;
