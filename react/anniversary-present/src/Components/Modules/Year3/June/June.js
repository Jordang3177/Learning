import React from "react";
import classes from "./June.module.css";
import Baby1 from "../../../../Assets/Pictures/Year 3/June/Baby1.JPG";
import Baby2 from "../../../../Assets/Pictures/Year 3/June/Baby2.JPG";
import Fleas1 from "../../../../Assets/Pictures/Year 3/June/Fleas1.JPG";
import Fleas2 from "../../../../Assets/Pictures/Year 3/June/Fleas1.JPG";
import Food1 from "../../../../Assets/Pictures/Year 3/June/Food1.JPG";
import Food2 from "../../../../Assets/Pictures/Year 3/June/Food2.JPG";

function June() {
  return (
    <div>
      <img src={Baby1} className={classes.img1} alt="Baby1" />
      <img src={Baby2} className={classes.img2} alt="Baby2" />
      <img src={Fleas1} className={classes.img1} alt="Fleas1" />
      <img src={Fleas2} className={classes.img2} alt="Fleas2" />
      <img src={Food1} className={classes.img1} alt="Food1" />
      <img src={Food2} className={classes.img2} alt="Food2" />
      <p>
        This was the first year that you stayed with me for the summer vacation. I
        remember you coming back and being so happy to be able to spend the summer
        vacation with you rather than having you go back to china for a few months.
        <br />
        This was also the time that we had to shave cheese's hair on his head because he
        had bugs all over him and the only way we could figure out how to get rid of them
        was to shave all his hair off. He never seemed to mind that we shaved his hair,
        but he did look kinda funny for the next couple of months.
        <br />
        And of couse as you can see here we did cook together everyonce in awhile.
      </p>
    </div>
  );
}

export default June;
