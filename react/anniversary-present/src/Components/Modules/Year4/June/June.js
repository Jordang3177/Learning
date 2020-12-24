import React from "react";
import classes from "./June.module.css";
import Dominos1 from "../../../../Assets/Pictures/Year 4/June/Dominos1.jpg";
import Dominos2 from "../../../../Assets/Pictures/Year 4/June/Dominos2.jpg";
import Dominos3 from "../../../../Assets/Pictures/Year 4/June/Dominos3.jpg";
import Dominos4 from "../../../../Assets/Pictures/Year 4/June/Dominos4.jpg";
import Dominos5 from "../../../../Assets/Pictures/Year 4/June/Dominos5.jpg";
import Dominos6 from "../../../../Assets/Pictures/Year 4/June/Dominos6.jpg";
import VillagePark from "../../../../Assets/Pictures/Year 4/June/VillagePark.jpg";


function June() {
    return (
        <div>
            <img src={Dominos1} className={classes.img1} alt="Dominos1" />
            <img src={Dominos2} className={classes.img2} alt="Dominos2" />
            <img src={Dominos3} className={classes.img1} alt="Dominos3" />
            <img src={Dominos4} className={classes.img2} alt="Dominos4" />
            <img src={Dominos5} className={classes.img1} alt="Dominos5" />
            <img src={Dominos6} className={classes.img2} alt="Dominos6" />
            <img src={VillagePark} className={classes.img1} alt="VillagePark" />
            <p>This is the month where I started my first real job after college at Domino's 
                and moved into a new apartment.</p>
        </div>
    );
}

export default June;