import React from "react";
import classes from "./March.module.css";
import Birthday from "../../../../Assets/Pictures/Year 3/March/Birthday.jpg";
import FamilyPicture1 from "../../../../Assets/Pictures/Year 3/March/FamilyPicture1.jpg";
import Jordan1 from "../../../../Assets/Pictures/Year 3/March/Jordan1.jpg";
import JordansBurger from "../../../../Assets/Pictures/Year 3/March/JordansBurger.jpg";

function March() {
  return (
    <div>
      <img src={Birthday} className={classes.img1} alt="Birthday" />
      <img src={FamilyPicture1} className={classes.img2} alt="FamilyPicture1" />
      <img src={Jordan1} className={classes.img1} alt="Jordan1" />
      <img src={JordansBurger} className={classes.img2} alt="JordansBurger" />
      <p>
        Again this month was just like the last where we had to stay in your hometown and
        were able to be together.
      </p>
    </div>
  );
}

export default March;
