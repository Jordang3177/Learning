import React from "react";
import classes from "./September.module.css";
import Talk from "../../../../Assets/Pictures/Year 4/September/Talk.png";

function September() {
    return (
        <div>
           <img src={Talk} className={classes.img1} alt="Talk" /> 
           <p>You turned 24 years old during this month. We were still talking alot on WeChat while you were
               also about to move back to your hometown in order to not have to keep paying for a place in Shanghai.
               We also applied for the green card in this month. I hope that this gets approved soon :(.
           </p>
        </div>
    );
}

export default September;