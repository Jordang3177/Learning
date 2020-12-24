import React from "react";
import classes from "./May.module.css";
import Anniversary from "../../../../Assets/Pictures/Year 4/May/Anniversary.jpg";
import EarCleaning from "../../../../Assets/Pictures/Year 4/May/EarCleaning.jpg";

function May() {
  return (
    <div>
      <img src={Anniversary} className={classes.img1} alt="Anniversary" />
      <img src={EarCleaning} className={classes.img2} alt="EarCleaning" />
      <p>
        This is our third year Anniversary. I know that this site isn't the best that it
        could be. But I really hope that you like it and if you have any pictures that I
        missed out and you want to add to this site, please just let me know and i'll add
        them.
      </p>
    </div>
  );
}

export default May;
