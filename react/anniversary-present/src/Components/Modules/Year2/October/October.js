import React from "react";
import classes from "./October.module.css";
import Family1 from "../../../../Assets/Pictures/Year 2/October/Family1.jpg";
import Family2 from "../../../../Assets/Pictures/Year 2/October/Family2.jpg";

function October() {
  return (
    <div>
      <img src={Family1} className={classes.img1} alt="Family1" />
      <img src={Family2} className={classes.img2} alt="Family2" />
      <p>
        During the Fall break you were able to come back to Indiana and again spend some
        time with me while you could. I look back on all these pictures and just love that
        you were able to come back and see me so often, even though we couldn't be
        together for very long each time at least we were able to be together when we
        could.{" "}
      </p>
    </div>
  );
}

export default October;
