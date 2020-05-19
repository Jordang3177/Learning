import React from "react";
import classes from "./January.module.css";
import China1 from "../../../../Assets/Pictures/Year 3/January/China1.JPG";
import China2 from "../../../../Assets/Pictures/Year 3/January/China2.JPG";
import China3 from "../../../../Assets/Pictures/Year 3/January/China3.jpg";
import China4 from "../../../../Assets/Pictures/Year 3/January/China4.jpg";
import China5 from "../../../../Assets/Pictures/Year 3/January/China5.jpg";
import China6 from "../../../../Assets/Pictures/Year 3/January/China6.jpg";
import China7 from "../../../../Assets/Pictures/Year 3/January/China7.jpg";
import China8 from "../../../../Assets/Pictures/Year 3/January/China8.jpg";
import China9 from "../../../../Assets/Pictures/Year 3/January/China9.jpg";

function January() {
  return (
    <div>
      <img src={China1} className={classes.img1} alt="China1" />
      <img src={China2} className={classes.img2} alt="China2" />
      <img src={China3} className={classes.img1} alt="China3" />
      <img src={China4} className={classes.img2} alt="China4" />
      <img src={China5} className={classes.img1} alt="China5" />
      <img src={China6} className={classes.img2} alt="China6" />
      <img src={China7} className={classes.img1} alt="China7" />
      <img src={China8} className={classes.img2} alt="China8" />
      <img src={China9} className={classes.img1} alt="China9" />
      <p>
        After I gradauted I knew that I had to come and see you before I started to work.
        So I booked a ticket to china and was planning on staying there for a month so we
        could be together for Chinese New Year. We went to Shanghai and traveled there for
        a bit then went to your Hometown and spent the New Year with your family and ate
        some wonderful food while we were there.
      </p>
    </div>
  );
}

export default January;
