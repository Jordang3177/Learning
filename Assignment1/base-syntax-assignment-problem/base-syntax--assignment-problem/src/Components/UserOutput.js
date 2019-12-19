import React from 'react';

const useroutput = (props) => {
    return (
        <div>
            <p>Username for {props.name} is as follows: </p>
            <p>{props.username}</p>
        </div>
    )
};

export default useroutput;