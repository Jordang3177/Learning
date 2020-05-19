import React from "react";
import classes from "./September.module.css";
import Cedargate1 from "../../../../Assets/Pictures/Year 3/September/Cedargate1.JPG";
import Cedargate2 from "../../../../Assets/Pictures/Year 3/September/Cedargate2.JPG";
import Cedargate3 from "../../../../Assets/Pictures/Year 3/September/Cedargate3.jpg";

function September() {
  return (
    <div>
      <img src={Cedargate1} className={classes.img1} alt="Cedargate1" />
      <img src={Cedargate2} className={classes.img2} alt="Cedargate2" />
      <img src={Cedargate3} className={classes.img1} alt="Cedargate3" />
      <p>
        This was the last month that we would spend together for this year. We moved into
        a new apartment. I know it sucked, I'm sorry about that. But eventually you went
        off to Shanghai and found a job there so that you could get your citizenship while
        I finished up my Degree at IU.
      </p>
    </div>
  );
}

export default September;
