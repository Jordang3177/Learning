import React from 'react';
import classes from './BranchingLine.module.css';
import Dot from '../Dot/Dot';

const branchingline = props => {
    return (
        <div className={classes.vl}>
            <Dot date={'Aug ' + props.year} side={'right'}></Dot>
            <Dot date={'Sept ' + props.year} side={'left'}></Dot>
            <Dot date={'Oct ' + props.year} side={'right'}></Dot>
            <Dot date={'Nov ' + props.year} side={'left'}></Dot>
            <Dot date={'Dec ' + (props.year + 1)} side={'right'}></Dot>
            <Dot date={'Jan ' + (props.year + 1)} side={'left'}></Dot>
            <Dot date={'Feb ' + (props.year + 1)} side={'right'}></Dot>
            <Dot date={'Mar ' + (props.year + 1)} side={'left'}></Dot>
            <Dot date={'Apr ' + (props.year + 1)} side={'right'}></Dot>
            <Dot date={'May ' + (props.year + 1)} side={'left'}></Dot>
            <Dot date={'June ' + (props.year + 1)} side={'right'}></Dot>
            <Dot date={'July ' + (props.year + 1)} side={'left'}></Dot>
        </div>
    )
}

export default branchingline;