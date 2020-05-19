import React from "react";
import classes from "./August.module.css";
import Injured1 from "../../../../Assets/Pictures/Year 2/August/Injured1.jpg";

function August() {
  return (
    <div>
      <img src={Injured1} className={classes.img1} alt="Injured1" />
      <p>
        I remember being so scared when cheese jumped through our window and cut his paw a
        bit. But you made sure that I was calm and did what I needed to do.
        <br />
        Also during this month I started my first Fall semester back at IU
      </p>
    </div>
  );
}

export default August;
