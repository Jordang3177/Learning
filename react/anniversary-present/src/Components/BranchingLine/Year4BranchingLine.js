import React, { useState } from "react";
import classes from "./BranchingLine.module.css";
import Dot from "../Dot/Dot";
import Modal from "../Modal/Modal";
import January from "../Modules/Year4/January/January";
import February from "../Modules/Year4/February/February";
import March from "../Modules/Year4/March/March";
import April from "../Modules/Year4/April/April";
import May from "../Modules/Year4/May/May";
import June from "../Modules/Year4/June/June";
import July from "../Modules/Year4/July/July";
import August from "../Modules/Year4/August/August";
import September from "../Modules/Year4/September/September";
import October from "../Modules/Year4/October/October";
import November from "../Modules/Year4/November/November";
import December from "../Modules/Year4/December/December";

function Branchingline(props) {
  const [mayClicked, setMayClicked] = useState(false);
  const [juneClicked, setJuneClicked] = useState(false);
  const [julyClicked, setJulyClicked] = useState(false);
  const [augustClicked, setAugustClicked] = useState(false);
  const [septemberClicked, setSeptemberClicked] = useState(false);
  const [octoberClicked, setOctoberClicked] = useState(false);
  const [novemberClicked, setNovemberClicked] = useState(false);
  const [decemberClicked, setDecemberClicked] = useState(false);
  const [januaryClicked, setJanuaryClicked] = useState(false);
  const [februaryClicked, setFebruaryClicked] = useState(false);
  const [marchClicked, setMarchClicked] = useState(false);
  const [aprilClicked, setAprilClicked] = useState(false);

  const mayClickedHandler = () => {
    setMayClicked(true);
  };
  const mayExitedHandler = () => {
    setMayClicked(false);
  };

  const juneClickedHandler = () => {
    setJuneClicked(true);
  };
  const juneExitedHandler = () => {
    setJuneClicked(false);
  };

  const julyClickedHandler = () => {
    setJulyClicked(true);
  };
  const julyExitedHandler = () => {
    setJulyClicked(false);
  };

  const augustClickedHandler = () => {
    setAugustClicked(true);
  };
  const augustExitedHandler = () => {
    setAugustClicked(false);
  };

  const septemberClickedHandler = () => {
    setSeptemberClicked(true);
  };
  const septemberExitedHandler = () => {
    setSeptemberClicked(false);
  };

  const octoberClickedHandler = () => {
    setOctoberClicked(true);
  };
  const octoberExitedHandler = () => {
    setOctoberClicked(false);
  };

  const novemberClickedHandler = () => {
    setNovemberClicked(true);
  };
  const novemberExitedHandler = () => {
    setNovemberClicked(false);
  };

  const decemberClickedHandler = () => {
    setDecemberClicked(true);
  };
  const decemberExitedHandler = () => {
    setDecemberClicked(false);
  };

  const januaryClickedHandler = () => {
    setJanuaryClicked(true);
  };
  const januaryExitedHandler = () => {
    setJanuaryClicked(false);
  };

  const februaryClickedHandler = () => {
    setFebruaryClicked(true);
  };
  const februaryExitedHandler = () => {
    setFebruaryClicked(false);
  };

  const marchClickedHandler = () => {
    setMarchClicked(true);
  };
  const marchExitedHandler = () => {
    setMarchClicked(false);
  };

  const aprilClickedHandler = () => {
    setAprilClicked(true);
  };
  const aprilExitedHandler = () => {
    setAprilClicked(false);
  };

  return (
    <div className={classes.vl}>
      <Dot clicker={mayClickedHandler} date={"May " + props.year} side={"right"}></Dot>
      <Modal show={mayClicked} modalClosed={mayExitedHandler}>
        <May></May>
      </Modal>
      <Dot clicker={juneClickedHandler} date={"June " + props.year} side={"left"}></Dot>
      <Modal show={juneClicked} modalClosed={juneExitedHandler}>
        <June></June>
      </Modal>
      <Dot clicker={julyClickedHandler} date={"July " + props.year} side={"right"}></Dot>
      <Modal show={julyClicked} modalClosed={julyExitedHandler}>
        <July></July>
      </Modal>
      <Dot clicker={augustClickedHandler} date={"Aug " + props.year} side={"left"}></Dot>
      <Modal show={augustClicked} modalClosed={augustExitedHandler}>
        <August></August>
      </Modal>
      <Dot
        clicker={septemberClickedHandler}
        date={"Sept " + props.year}
        side={"right"}
      ></Dot>
      <Modal show={septemberClicked} modalClosed={septemberExitedHandler}>
        <September></September>
      </Modal>
      <Dot clicker={octoberClickedHandler} date={"Oct " + props.year} side={"left"}></Dot>
      <Modal show={octoberClicked} modalClosed={octoberExitedHandler}>
        <October></October>
      </Modal>
      <Dot
        clicker={novemberClickedHandler}
        date={"Nov " + props.year}
        side={"right"}
      ></Dot>
      <Modal show={novemberClicked} modalClosed={novemberExitedHandler}>
        <November></November>
      </Modal>
      <Dot
        clicker={decemberClickedHandler}
        date={"Dec " + props.year}
        side={"left"}
      ></Dot>
      <Modal show={decemberClicked} modalClosed={decemberExitedHandler}>
        <December></December>
      </Modal>
      <Dot
        clicker={januaryClickedHandler}
        date={"Jan " + (props.year + 1)}
        side={"right"}
      ></Dot>
      <Modal show={januaryClicked} modalClosed={januaryExitedHandler}>
        <January></January>
      </Modal>
      <Dot
        clicker={februaryClickedHandler}
        date={"Feb " + (props.year + 1)}
        side={"left"}
      ></Dot>
      <Modal show={februaryClicked} modalClosed={februaryExitedHandler}>
        <February></February>
      </Modal>
      <Dot
        clicker={marchClickedHandler}
        date={"Mar " + (props.year + 1)}
        side={"right"}
      ></Dot>
      <Modal show={marchClicked} modalClosed={marchExitedHandler}>
        <March></March>
      </Modal>
      <Dot
        clicker={aprilClickedHandler}
        date={"Apr " + (props.year + 1)}
        side={"left"}
      ></Dot>
      <Modal show={aprilClicked} modalClosed={aprilExitedHandler}>
        <April></April>
      </Modal>
    </div>
  );
}

export default Branchingline;
