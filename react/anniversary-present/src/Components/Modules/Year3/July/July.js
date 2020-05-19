import React from "react";
import classes from "./July.module.css";
import Moving1 from "../../../../Assets/Pictures/Year 3/July/Moving1.JPG";
import Moving2 from "../../../../Assets/Pictures/Year 3/July/Moving2.JPG";

function July() {
  return (
    <div>
      <img src={Moving1} className={classes.img1} alt="Moving1" />
      <img src={Moving2} className={classes.img2} alt="Moving2" />
      <p>
        This was the month where we had to figure out what to do with all the big stuff
        that we had because we were moving over to a new apartment in Cedargate. Not too
        far from woodbridge but smaller in size.
        <br />
        Also during this month you went over to see your mom and brother while they were
        going to travel the United States. Sadly I wasn't able to come with you during
        this part of the month as I was finishing up teaching for a class this summer
      </p>
    </div>
  );
}

export default July;
