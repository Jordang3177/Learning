import React, { Component } from "react";
import YearElement from "../../Components/YearElement/YearElement";
import Year3BranchingLine from "../../Components/BranchingLine/Year3BranchingLine";
import TextFileReader from "../../hoc/FileReader/TextFileReader";

class Timeline extends Component {
  render() {
    var n = this.props.location.pathname.length;
    var year = 2017 + Number(this.props.location.pathname.slice(5, n)) - 1;
    var title =
      this.props.location.pathname.slice(1, 5) +
      " " +
      this.props.location.pathname.slice(5, n);
    console.log(this.props.text);
    const text = <TextFileReader txt={this.props.text}></TextFileReader>;
    console.log(text);

    return (
      <div>
        <YearElement year={title} text={text} />
        <Year3BranchingLine year={year} />
      </div>
    );
  }
}

export default Timeline;
