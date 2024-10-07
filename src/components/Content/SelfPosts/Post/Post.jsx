import React from 'react';
import module from './Post.module.css'

function Post(props) {
    return <div className={module.Items}>
        <img src="Ava.jpg" alt="Avatar"/>
        {props.message}
        <div>
            <span>Like</span>
            <span> {props.like} </span>
            <span>Dislike</span>
        </div>

    </div>
}

export default Post;