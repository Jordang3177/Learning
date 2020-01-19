import React, { Component } from 'react';
import YearElement from '../../Components/YearElement/YearElement';
import BranchingLine from '../../Components/BranchingLine/BranchingLine';

class Timeline extends Component {
    render() {
        var n = this.props.location.pathname.length
        var title = this.props.location.pathname.slice(1, 5) + " " + this.props.location.pathname.slice(5, n);
        
        return (
            <div>
                <YearElement year={title} />
                <BranchingLine />
            </div>
        )
    }
}

export default Timeline;