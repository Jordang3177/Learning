import React from "react";
import classes from "./February.module.css";
import Neutered1 from "../../../../Assets/Pictures/Year 1/February/Neutered1.jpg";
import Neutered2 from "../../../../Assets/Pictures/Year 1/February/Neutered2.jpg";
import NY1 from "../../../../Assets/Pictures/Year 1/February/NY1.jpg";
import NY2 from "../../../../Assets/Pictures/Year 1/February/NY2.jpg";
import NY3 from "../../../../Assets/Pictures/Year 1/February/NY3.jpg";
import NY4 from "../../../../Assets/Pictures/Year 1/February/NY4.jpg";
import Training1 from "../../../../Assets/Pictures/Year 1/February/Training1.jpg";
import Training2 from "../../../../Assets/Pictures/Year 1/February/Training2.jpg";
import Trip1 from "../../../../Assets/Pictures/Year 1/February/Trip1.jpg";

function February() {
  return (
    <div>
      <img src={Neutered1} className={classes.img1} alt="Neutered1" />
      <img src={Neutered2} className={classes.img2} alt="Neutered2" />
      <img src={Training1} className={classes.img1} alt="Training1" />
      <img src={Training2} className={classes.img2} alt="Training2" />
      <img src={Trip1} className={classes.img1} alt="Trip1" />
      <img src={NY1} className={classes.img2} alt="NY1" />
      <img src={NY2} className={classes.img1} alt="NY2" />
      <img src={NY3} className={classes.img2} alt="NY3" />
      <img src={NY4} className={classes.img1} alt="NY4" />
      <p>
        Alot happened in this month. First this was the month in which we were finally
        able to have cheese neutered. He absolutley hated that cone and would whine about
        it being on all the time. <br />
        During this time I also went to get him trained at a local training place in
        Elletsville so that he would listen to us a bit more and hopefully stop jumping on
        people. He did learn a few tricks while we did this, one was to stay. <br />
        Then me and cheese drove all the way from Indiana to New York so that we could
        live with you for a little while you were getting adjusted to New York The trip
        there was a little hard for cheese as he threw up on me while I was driving, but
        we were able to make it and cheese seemed to love being able to be with both us. I
        was also very happy to be able to finally be back with you again and not having to
        live by myself
      </p>
    </div>
  );
}

export default February;
