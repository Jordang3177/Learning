import React from "react";
import classes from "./February.module.css";
import JordanHaoHao from "../../../../Assets/Pictures/Year 3/February/JordanHaoHao.jpg";

function February() {
  return (
    <div>
      <img src={JordanHaoHao} className={classes.img1} alt="JordanHaoHao" />
      <p>
        This was a hard month, and alot of unexpected things happened. We were stuck in
        your hometown for this entire month. And even though we were not able to leave
        your hometown i'm really glad I was able to spend this time with you even though
        it wasn't planned.
      </p>
    </div>
  );
}

export default February;
