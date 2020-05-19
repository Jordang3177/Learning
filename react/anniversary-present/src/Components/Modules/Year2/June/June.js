import React from "react";
import classes from "./June.module.css";
import Friends1 from "../../../../Assets/Pictures/Year 2/June/Friends1.jpg";
import Teemo1 from "../../../../Assets/Pictures/Year 2/June/Teemo1.jpg";
import Teemo2 from "../../../../Assets/Pictures/Year 2/June/Teemo2.jpg";
import Teemo3 from "../../../../Assets/Pictures/Year 2/June/Teemo3.jpg";
import Teemo4 from "../../../../Assets/Pictures/Year 2/June/Teemo3.jpg";

function June() {
  return (
    <div>
      <img src={Friends1} className={classes.img1} alt="Friends1" />
      <img src={Teemo1} className={classes.img2} alt="Teemo1" />
      <img src={Teemo2} className={classes.img1} alt="Teemo2" />
      <img src={Teemo3} className={classes.img2} alt="Teemo3" />
      <img src={Teemo4} className={classes.img1} alt="Teemo4" />
      <p>
        Oh man this month was a bit crazy. I remember you going back to China and for some
        reason someone had either contacted you or you saw something on IU classified
        about someone needing their dog taken care of while they were in China. So I took
        care of two different dogs, a Husky and a Corgi. This was a very stressful time
        for me as I remember getting very little sleep and also working and starting to go
        back to school. But I just remember cheese being super happy to be able to have
        other dogs around{" "}
      </p>
    </div>
  );
}

export default June;
