import React from 'react';
import module from './Post.module.css'

function Post() {
    return <div className={module.Items}>
        <img src="Ava.jpg" alt="Avatar"/>
        Msgs
        <div>
            <span>Like</span>
            <span> </span>
            <span>Dislike</span>
        </div>

    </div>
}

export default Post;