import React from "react";
import classes from "./December.module.css";
import Travel1 from "../../../../Assets/Pictures/Year 2/December/Travel1.JPG";
import Travel2 from "../../../../Assets/Pictures/Year 2/December/Travel2.JPG";
import Travel3 from "../../../../Assets/Pictures/Year 2/December/Travel3.JPG";
import Travel4 from "../../../../Assets/Pictures/Year 2/December/Travel4.JPG";
import Travel5 from "../../../../Assets/Pictures/Year 2/December/Travel5.JPG";
import Travel6 from "../../../../Assets/Pictures/Year 2/December/Travel6.JPG";
import Travel7 from "../../../../Assets/Pictures/Year 2/December/Travel7.JPG";
import Travel8 from "../../../../Assets/Pictures/Year 2/December/Travel8.JPG";
import Travel9 from "../../../../Assets/Pictures/Year 2/December/Travel9.JPG";
import Travel10 from "../../../../Assets/Pictures/Year 2/December/Travel10.jpg";
import Travel11 from "../../../../Assets/Pictures/Year 2/December/Travel11.jpg";

function December() {
  return (
    <div>
      <img src={Travel1} className={classes.img1} alt="Travel1" />
      <img src={Travel2} className={classes.img2} alt="Travel2" />
      <img src={Travel3} className={classes.img1} alt="Travel3" />
      <img src={Travel4} className={classes.img2} alt="Travel4" />
      <img src={Travel5} className={classes.img1} alt="Travel5" />
      <img src={Travel6} className={classes.img2} alt="Travel6" />
      <img src={Travel7} className={classes.img1} alt="Travel7" />
      <img src={Travel8} className={classes.img2} alt="Travel8" />
      <img src={Travel9} className={classes.img1} alt="Travel9" />
      <img src={Travel10} className={classes.img2} alt="Travel10" />
      <img src={Travel11} className={classes.img1} alt="Travel11" />
      <p>
        This was the first trip that we went on to Las Vegas with the new Camera that you
        bought. We did alot on this trip, we saw a water show, went to a buffet with your
        friend Jenny, went out to this area of colored rocks that someone has set up. I
        really did love this trip honey.
      </p>
    </div>
  );
}

export default December;
