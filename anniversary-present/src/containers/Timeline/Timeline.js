import React, { Component } from 'react';
import YearElement from '../../Components/YearElement/YearElement';
import BranchingLine from '../../Components/BranchingLine/BranchingLine';
import TextFileReader from '../../hoc/FileReader/TextFileReader';


class Timeline extends Component {
    render() {
        var n = this.props.location.pathname.length
        var title = this.props.location.pathname.slice(1, 5) + " " + this.props.location.pathname.slice(5, n);
        console.log(this.props.text);
        const text = <TextFileReader txt = {this.props.text}></TextFileReader>
        console.log(text);
        
        return (
            <div>
                <YearElement year={title} text={text}/>
                <BranchingLine />
            </div>
        )
    }
}

export default Timeline;