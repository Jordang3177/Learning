import React from "react";
import classes from "./July.module.css";
import School1 from "../../../../Assets/Pictures/Year 2/July/School1.jpg";

function July() {
  return (
    <div>
      <img src={School1} className={classes.img1} alt="School1" />
      <p>
        This was a big month for me and it's all because of you that it even happened. I
        remember being super afraid to start school again but you pushed me really hard to
        go back in the summer rather than waiting till the fall semester. I took Discrete
        Mathematics and Finite Math. I know at the time that I wasn't happy for you making
        me go back but I can tell you now that I'm very happy that you did make me go back
        and pushed me to do so. Thank you
      </p>
    </div>
  );
}

export default July;
