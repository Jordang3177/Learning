import React from "react";
import classes from "./July.module.css";
import Cheese1 from "../../../../Assets/Pictures/Year 4/July/Cheese1.jpg";
import Cheese2 from "../../../../Assets/Pictures/Year 4/July/Cheese2.jpg";
import Cheese3 from "../../../../Assets/Pictures/Year 4/July/Cheese3.jpg";
import Cheese4 from "../../../../Assets/Pictures/Year 4/July/Cheese4.jpg";
import Cheese5 from "../../../../Assets/Pictures/Year 4/July/Cheese5.jpg";
import Cheese6 from "../../../../Assets/Pictures/Year 4/July/Cheese6.jpg";
import Cheese7 from "../../../../Assets/Pictures/Year 4/July/Cheese7.jpg";


function July() {
    return (
        <div>
            <img src={Cheese1} className={classes.img1} alt="Cheese1" />
            <img src={Cheese2} className={classes.img2} alt="Cheese2" />
            <img src={Cheese3} className={classes.img1} alt="Cheese3" />
            <img src={Cheese4} className={classes.img2} alt="Cheese4" />
            <img src={Cheese5} className={classes.img1} alt="Cheese5" />
            <img src={Cheese6} className={classes.img2} alt="Cheese6" />
            <img src={Cheese7} className={classes.img1} alt="Cheese7" />
            <p>This was where our little baby cheese turned 3 years old!!!
                <br></br>
                Got his a little hat and a nice doggy cake.
            </p>
        </div>
    );
}

export default July;