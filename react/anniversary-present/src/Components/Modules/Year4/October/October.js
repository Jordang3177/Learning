import React from "react";
import classes from "./October.module.css";
import Amazon1 from "../../../../Assets/Pictures/Year 4/October/Amazon1.jpg";
import Amazon2 from "../../../../Assets/Pictures/Year 4/October/Amazon2.jpg";
import Amazon3 from "../../../../Assets/Pictures/Year 4/October/Amazon3.jpg";
import Amazon4 from "../../../../Assets/Pictures/Year 4/October/Amazon4.jpg";
import Amazon5 from "../../../../Assets/Pictures/Year 4/October/Amazon5.jpg";
import Amazon6 from "../../../../Assets/Pictures/Year 4/October/Amazon6.jpg";

function October() {
    return (
        <div>
            <img src={Amazon1} className={classes.img1} alt="Amazon1" />
            <img src={Amazon2} className={classes.img2} alt="Amazon2" />
            <img src={Amazon3} className={classes.img1} alt="Amazon3" />
            <img src={Amazon4} className={classes.img2} alt="Amazon4" />
            <img src={Amazon5} className={classes.img1} alt="Amazon5" />
            <img src={Amazon6} className={classes.img2} alt="Amazon6" />
            <p>This was the first month that you set up your amazon and were beginning to send things over
                to them for FBA. Started off with a few kitchen things like a pizza cutter, whisks, and dog toys.
            </p>
        </div>
    );
}

export default October;