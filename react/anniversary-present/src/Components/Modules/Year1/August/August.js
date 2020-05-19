import React from "react";
import classes from "./August.module.css";
import Return1 from "../../../../Assets/Pictures/Year 1/August/Return1.jpg";
import Return2 from "../../../../Assets/Pictures/Year 1/August/Return2.jpg";
import Woodbridge1 from "../../../../Assets/Pictures/Year 1/August/Woodbridge1.jpg";
import Woodbridge2 from "../../../../Assets/Pictures/Year 1/August/Woodbridge2.jpg";
import Woodbridge3 from "../../../../Assets/Pictures/Year 1/August/Woodbridge3.jpg";
import Woodbridge4 from "../../../../Assets/Pictures/Year 1/August/Woodbridge4.jpg";
import Woodbridge5 from "../../../../Assets/Pictures/Year 1/August/Woodbridge5.jpg";
import Woodbridge6 from "../../../../Assets/Pictures/Year 1/August/Woodbridge6.jpg";

function August() {
  return (
    <div>
      <img src={Woodbridge1} className={classes.img1} alt="Woodbridge1" />
      <img src={Woodbridge2} className={classes.img2} alt="Woodbridge2" />
      <img src={Woodbridge3} className={classes.img1} alt="Woodbridge3" />
      <img src={Woodbridge4} className={classes.img2} alt="Woodbridge4" />
      <img src={Woodbridge5} className={classes.img1} alt="Woodbridge5" />
      <img src={Woodbridge6} className={classes.img2} alt="Woodbridge6" />
      <img src={Return1} className={classes.img1} alt="Return1" />
      <img src={Return2} className={classes.img2} alt="Return2" />
      <p>
        While you were still in China I was getting ready and moving us from Fountain Park
        to Woodbridge Apartments where we would stay for the next two years. I remember
        picking out this place and you just loved the gray color of most of the
        apartments. I'm glad you picked this place as it was a wonderful place to live
        with you. <br />
        You also came back from China during this time and lived with me for your last
        semester at IU.
      </p>
    </div>
  );
}

export default August;
