import React from "react";
import classes from "./November.module.css";
import Computer1 from "../../../../Assets/Pictures/Year 4/November/Computer1.jpg";
import Computer2 from "../../../../Assets/Pictures/Year 4/November/Computer2.jpg";
import Computer3 from "../../../../Assets/Pictures/Year 4/November/Computer3.jpg";
import Computer4 from "../../../../Assets/Pictures/Year 4/November/Computer4.jpg";
import Computer5 from "../../../../Assets/Pictures/Year 4/November/Computer5.jpg";
import Computer6 from "../../../../Assets/Pictures/Year 4/November/Computer6.jpg";
import Computer7 from "../../../../Assets/Pictures/Year 4/November/Computer7.jpg";
import Computer8 from "../../../../Assets/Pictures/Year 4/November/Computer8.jpg";
import Computer9 from "../../../../Assets/Pictures/Year 4/November/Computer9.jpg";
import Thanksgiving from "../../../../Assets/Pictures/Year 4/November/Thanksgiving.jpg";

function November() {
    return (
        <div>
            <img src={Computer1} className={classes.img1} alt="Computer1" />
            <img src={Computer2} className={classes.img2} alt="Computer2" />
            <img src={Computer3} className={classes.img1} alt="Computer3" />
            <img src={Computer4} className={classes.img2} alt="Computer4" />
            <img src={Computer5} className={classes.img1} alt="Computer5" />
            <img src={Computer6} className={classes.img2} alt="Computer6" />
            <img src={Computer7} className={classes.img1} alt="Computer7" />
            <img src={Computer8} className={classes.img2} alt="Computer8" />
            <img src={Computer9} className={classes.img1} alt="Computer9" />
            <img src={Thanksgiving} className={classes.img2} alt="Thanksgiving" />
            <p>I built a new computer during this month in order to learn machine learning and hopefully transition
                to that career path one day. I also remember on Thanksgiving I was super sad and you ordered me a meal.
                Thank you for always being there when I'm sad and thinking of me during my hardest of times. I love you baby!
                Also I remember during this month you talked about doing Real estate and studying for that so once you get back
                you can take the test in order to do real estate. And you talked about studying for a CPA in order to do our taxes.
            </p>
        </div>
    );
}

export default November;