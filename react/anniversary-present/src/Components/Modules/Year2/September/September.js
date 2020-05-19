import React from "react";
import classes from "./September.module.css";
import Family1 from "../../../../Assets/Pictures/Year 2/September/Family1.jpg";
import Family2 from "../../../../Assets/Pictures/Year 2/September/Family2.jpg";
import Food1 from "../../../../Assets/Pictures/Year 2/September/Food1.jpg";

function September() {
  return (
    <div>
      <img src={Family1} className={classes.img1} alt="Family1" />
      <img src={Family2} className={classes.img2} alt="Family2" />
      <img src={Food1} className={classes.img1} alt="Food1" />
      <p>
        This was the month that you were able to stay with me for a little bit longer than
        we expected because your semester didn't start until later in September. So we
        were able to be together as a little family for a few months while we waited for
        you to go back to school for the semester. And of course we had to get some Korean
        BBQ while you were here. :)
      </p>
    </div>
  );
}

export default September;
