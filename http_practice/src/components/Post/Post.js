import React from "react";
import "./Post.css";

const post = props => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;

// Can use export default withRouter(post) in order
// to get the props from the parent link's props.
