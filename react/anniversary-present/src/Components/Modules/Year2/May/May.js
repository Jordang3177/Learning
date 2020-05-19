import React from "react";
import classes from "./May.module.css";
import Baby1 from "../../../../Assets/Pictures/Year 2/May/Baby1.jpg";
import Creation1 from "../../../../Assets/Pictures/Year 2/May/Creation1.jpg";
import Palm1 from "../../../../Assets/Pictures/Year 2/May/Palm1.jpg";
import Puppy1 from "../../../../Assets/Pictures/Year 2/May/Puppy1.jpg";

function May() {
  return (
    <div>
      <img src={Baby1} className={classes.img1} alt="Baby1" />
      <img src={Creation1} className={classes.img2} alt="Creation1" />
      <img src={Palm1} className={classes.img1} alt="Palm1" />
      <img src={Puppy1} className={classes.img2} alt="Puppy1" />
      <p>
        This month you came back to Indiana to live with me and cheese again. This would
        be our first year marriage anniversary during this month as well. I can only say
        that the first year that we were together was amazing and I hope they all are like
        this. <br />I don't know if you remember this dish that you made, but it was very
        interesting and was defintely something to remember.
        <br />I also remember you asking me to send you a picture of my palm while I was
        working so that you could send it over to someone in China to have it read and
        tell me about who I am and about my future.
      </p>
    </div>
  );
}

export default May;
