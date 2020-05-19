import React from "react";
import classes from "./September.module.css";
import Puppy1 from "../../../../Assets/Pictures/Year 1/September/Puppy1.jpg";
import Puppy2 from "../../../../Assets/Pictures/Year 1/September/Puppy2.jpg";
import Puppy3 from "../../../../Assets/Pictures/Year 1/September/Puppy3.jpg";
import Puppy4 from "../../../../Assets/Pictures/Year 1/September/Puppy4.jpg";
import Puppy5 from "../../../../Assets/Pictures/Year 1/September/Puppy5.jpg";
import Puppy6 from "../../../../Assets/Pictures/Year 1/September/Puppy6.jpg";
import Puppy7 from "../../../../Assets/Pictures/Year 1/September/Puppy7.jpg";
import Puppy8 from "../../../../Assets/Pictures/Year 1/September/Puppy8.jpg";
import Puppy9 from "../../../../Assets/Pictures/Year 1/September/Puppy9.jpg";
import Puppy10 from "../../../../Assets/Pictures/Year 1/September/Puppy10.jpg";

function September() {
  return (
    <div>
      <img src={Puppy1} className={classes.img1} alt="Puppy1" />
      <img src={Puppy2} className={classes.img2} alt="Puppy2" />
      <img src={Puppy3} className={classes.img1} alt="Puppy3" />
      <img src={Puppy4} className={classes.img2} alt="Puppy4" />
      <img src={Puppy5} className={classes.img1} alt="Puppy5" />
      <img src={Puppy6} className={classes.img2} alt="Puppy6" />
      <img src={Puppy7} className={classes.img1} alt="Puppy7" />
      <img src={Puppy8} className={classes.img2} alt="Puppy8" />
      <img src={Puppy9} className={classes.img1} alt="Puppy9" />
      <img src={Puppy10} className={classes.img2} alt="Puppy10" />
      <p>
        This was the month in which we went to see and bought Cheese for the first time.
        I'm really glad that you did this for me. Without you I never would have been able
        to have Cheese in my life. Not only did you help choose him but you also gave him
        a fantastic name that still brings a smile to my face to think about.
      </p>
    </div>
  );
}

export default September;
