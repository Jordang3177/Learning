import React from "react";
import classes from "./November.module.css";
import Museum1 from "../../../../Assets/Pictures/Year 2/November/Museum1.jpg";
import Museum2 from "../../../../Assets/Pictures/Year 2/November/Museum2.jpg";
import Museum3 from "../../../../Assets/Pictures/Year 2/November/Museum3.jpg";
import Museum4 from "../../../../Assets/Pictures/Year 2/November/Museum4.jpg";
import Museum5 from "../../../../Assets/Pictures/Year 2/November/Museum5.jpg";
import Museum6 from "../../../../Assets/Pictures/Year 2/November/Museum6.jpg";
import Parade1 from "../../../../Assets/Pictures/Year 2/November/Parade1.jpg";
import Parade2 from "../../../../Assets/Pictures/Year 2/November/Parade2.jpg";

function November() {
  return (
    <div>
      <img src={Museum1} className={classes.img1} alt="Museum1" />
      <img src={Museum2} className={classes.img2} alt="Museum2" />
      <img src={Museum3} className={classes.img1} alt="Museum3" />
      <img src={Museum4} className={classes.img2} alt="Museum4" />
      <img src={Museum5} className={classes.img1} alt="Museum5" />
      <img src={Museum6} className={classes.img2} alt="Museum6" />
      <img src={Parade1} className={classes.img1} alt="Parade1" />
      <img src={Parade2} className={classes.img2} alt="Parade2" />
      <p>
        This time it was my turn to come to you. I spent the Thanksgiving break of 2018
        with you in New York. We went to the Macy's Day Parade on Thanksgiving as well as
        went to the wax museum to have some fun. I also remember going to the interactive
        show where you got scared while we were doing it. But none the less I loved this
        thanksgiving break and the time that we had
      </p>
    </div>
  );
}

export default November;
