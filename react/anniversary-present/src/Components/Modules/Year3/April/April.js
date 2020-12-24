import React from "react";
import classes from "./April.module.css";
import BurgerLunch from "../../../../Assets/Pictures/Year 3/April/BurgerLunch.jpg";
import EatingOut1 from "../../../../Assets/Pictures/Year 3/April/EatingOut1.jpg";
import EatingOut2 from "../../../../Assets/Pictures/Year 3/April/EatingOut2.jpg";
import EatingOut3 from "../../../../Assets/Pictures/Year 3/April/EatingOut3.jpg";
import EatingOut4 from "../../../../Assets/Pictures/Year 3/April/EatingOut4.jpg";
import FunMirror from "../../../../Assets/Pictures/Year 3/April/FunMirror.jpg";
import HouseOfPictures from "../../../../Assets/Pictures/Year 3/April/HouseOfPictures.jpg";
import JordansFood from "../../../../Assets/Pictures/Year 3/April/JordansFood.jpg";
import LanJordan1 from "../../../../Assets/Pictures/Year 3/April/LanJordan1.jpg";
import LanJordan2 from "../../../../Assets/Pictures/Year 3/April/LanJordan2.jpg";
import Travel1 from "../../../../Assets/Pictures/Year 3/April/Travel1.jpg";
import Travel2 from "../../../../Assets/Pictures/Year 3/April/Travel2.jpg";
import Travel3 from "../../../../Assets/Pictures/Year 3/April/Travel3.jpg";
import Travel4 from "../../../../Assets/Pictures/Year 3/April/Travel4.jpg";

function April() {
  return (
    <div>
      <img src={BurgerLunch} className={classes.img1} alt="BurgerLunch" />
      <img src={EatingOut1} className={classes.img2} alt="EatingOut1" />
      <img src={EatingOut2} className={classes.img1} alt="EatingOut2" />
      <img src={EatingOut3} className={classes.img2} alt="EatingOut3" />
      <img src={EatingOut4} className={classes.img1} alt="EatingOut4" />
      <img src={FunMirror} className={classes.img2} alt="FunMirror" />
      <img src={HouseOfPictures} className={classes.img1} alt="HouseOfPictures" />
      <img src={JordansFood} className={classes.img2} alt="JordansFood" />
      <img src={LanJordan1} className={classes.img1} alt="LanJordan1" />
      <img src={LanJordan2} className={classes.img2} alt="LanJordan2" />
      <img src={Travel1} className={classes.img1} alt="Travel1" />
      <img src={Travel2} className={classes.img2} alt="Travel2" />
      <img src={Travel3} className={classes.img1} alt="Travel3" />
      <img src={Travel4} className={classes.img2} alt="Travel4" />

      <p>We finally were able to go back to Shanghai together while I looked for a job. We went out to eat and traveled quite a bit while we were together for our last full month of the year.</p>
    </div>
  );
}

export default April;
