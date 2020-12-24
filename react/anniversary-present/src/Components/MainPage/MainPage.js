import React from "react";
import classes from "./MainPage.module.css";
import Family1 from "../../Assets/Pictures/MainPage/Family1.jpg";

const mainpage = (props) => {
  return (
    <div className={classes.p2}>
      <p>
        This is something I've been trying to make for a long time. I'm going to be honest
        and say that this front page here isn't great, but I kept trying different things
        and don't know the best way to do this. I just kept making it look really bad. So
        I just left it as this for now till I can figure out a better look for this front
        page. <br />
        <br />
        Also I know that this website isn't clean or look amazing, but I really do hope
        that you like the idea and effort that I put into it. I'll keep coming back to
        this page and updating it as time goes on and I'm hoping one day I can figure out
        the best way to make it look good. <br />
        <br />
        But Happy Third Year Anniversary Honey. I love you so much and hope that we can be
        together for a long time.
      </p>
      <img src={Family1} className={classes.p1} alt="Family1" />
    </div>
  );
};

export default mainpage;
