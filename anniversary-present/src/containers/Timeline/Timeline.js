import React, { Component } from 'react';
import YearElement from '../../Components/YearElement/YearElement';
import BranchingLine from '../../Components/BranchingLine/BranchingLine';
import Thing from '../../Assets/Text/Year1/Year1.txt'


class Timeline extends Component {
    render() {
        var n = this.props.location.pathname.length
        var title = this.props.location.pathname.slice(1, 5) + " " + this.props.location.pathname.slice(5, n);
        const Year1Text = Thing;
        console.log(Thing);
        
        return (
            <div>
                <YearElement year={title} text={Year1Text}/>
                <BranchingLine />
            </div>
        )
    }
}

export default Timeline;