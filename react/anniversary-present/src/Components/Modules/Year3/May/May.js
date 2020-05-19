import React from "react";
import classes from "./May.module.css";
import Graduation1 from "../../../../Assets/Pictures/Year 3/May/Graduation1.JPG";
import Graduation2 from "../../../../Assets/Pictures/Year 3/May/Graduation2.jpg";
import Graduation3 from "../../../../Assets/Pictures/Year 3/May/Graduation3.jpg";
import Graduation4 from "../../../../Assets/Pictures/Year 3/May/Graduation4.jpg";
import Graduation5 from "../../../../Assets/Pictures/Year 3/May/Graduation5.jpg";
import Graduation6 from "../../../../Assets/Pictures/Year 3/May/Graduation6.jpg";
import Graduation7 from "../../../../Assets/Pictures/Year 3/May/Graduation7.jpg";

function May() {
  return (
    <div>
      <img src={Graduation1} className={classes.img1} alt="Graduation1" />
      <img src={Graduation2} className={classes.img2} alt="Graduation2" />
      <img src={Graduation3} className={classes.img1} alt="Graduation3" />
      <img src={Graduation4} className={classes.img2} alt="Graduation4" />
      <img src={Graduation5} className={classes.img1} alt="Graduation5" />
      <img src={Graduation6} className={classes.img2} alt="Graduation6" />
      <img src={Graduation7} className={classes.img1} alt="Graduation7" />
      <p>
        You GRADUATED!!!!!! I was and am still very proud of you for being able to do this
        even though it was tough for you to be able to move to a new city and be apart
        from me. I will remember sitting in those bleachers till the day that I die.
        Really honey I'm so proud of you for being able to do this and always look up to
        you for having the strength to do so.
      </p>
    </div>
  );
}

export default May;
