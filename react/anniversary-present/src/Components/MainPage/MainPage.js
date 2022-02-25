import React from "react";
import classes from "./MainPage.module.css";
import Family1 from "../../Assets/Pictures/MainPage/Family1.jpg";
import {Year1} from "../../Year1"
import {Year2} from "../../Year2"
import {Year3} from "../../Year3"
import {Year4} from "../../Year4"

const mainpage = (props) => {
  return (
    <div className={classes.p2}>
      <p>
        Welcome to Update 1.1. Where we are here to help you see what has been going on in the last few months
        since the Third Year Anniversary in May. 
        <br></br>
        There are a few changes that have gone on here since you last saw this.
        There are some changes that were made in Year 3, we added some more pictures and then if you look
        there is an entirely new section for year 4 that goes until December of 2020. WOW!!
        <br></br>
        Pleaes explore around and have a good time, we are here to help so please reach out to us on WeChat
        if you have any questions or you know of something that we missed. Thank you and now a message from our CEO
        Jordan Graves.
        <br></br>
        <b>This website is for Ruolan Wu and only for Ruolan Wu. If you are not my baby then please leave,
          If you are my baby, then Have fun looking around and I love you!!!!
        </b>
      </p>
      <img src={Family1} className={classes.p1} alt="Family1" />
      <h1>Year 1</h1>
      <Year1 />
      <h1>Year 2</h1>
      <Year2 />
      <h1>Year 3</h1>
      <Year3 />
      <h1>Year 4</h1>
      <Year4 />
    </div>
  );
};

export default mainpage;
