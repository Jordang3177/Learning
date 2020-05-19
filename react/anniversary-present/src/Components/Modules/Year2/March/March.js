import React from "react";
import classes from "./March.module.css";
import Mexico1 from "../../../../Assets/Pictures/Year 2/March/Mexico1.jpg";
import Mexico2 from "../../../../Assets/Pictures/Year 2/March/Mexico2.jpg";
import Mexico3 from "../../../../Assets/Pictures/Year 2/March/Mexico3.jpg";
import Mexico4 from "../../../../Assets/Pictures/Year 2/March/Mexico4.jpg";
import Mexico5 from "../../../../Assets/Pictures/Year 2/March/Mexico5.jpg";
import Mexico6 from "../../../../Assets/Pictures/Year 2/March/Mexico6.jpg";
import Mexico7 from "../../../../Assets/Pictures/Year 2/March/Mexico7.jpg";
import NY1 from "../../../../Assets/Pictures/Year 2/March/NY1.jpg";

function March() {
  return (
    <div>
      <img src={NY1} className={classes.img1} alt="NY1" />
      <img src={Mexico1} className={classes.img2} alt="Mexico1" />
      <img src={Mexico2} className={classes.img1} alt="Mexico2" />
      <img src={Mexico3} className={classes.img2} alt="Mexico3" />
      <img src={Mexico4} className={classes.img1} alt="Mexico4" />
      <img src={Mexico5} className={classes.img2} alt="Mexico5" />
      <img src={Mexico6} className={classes.img1} alt="Mexico6" />
      <img src={Mexico7} className={classes.img2} alt="Mexico7" />
      <p>
        During the spring break I went up to New York to see you again. We went to this
        moochi place and also I remember going back to the Hotpot buffet place that I
        loved to eat.
        <br />
        Then after you were also on Spring break we went to Cancun and Tulum to spend time
        together. We rented a car while we were here and it was a wonderful time. We
        traveled down the highway, listened to music, got pulled over :). Then once my
        spring break ended you went to travel with your friends in the Bahamas
      </p>
    </div>
  );
}

export default March;
