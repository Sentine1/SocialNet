import React from 'react';
import module from './Content.module.css'
import SelfPosts from "./SelfPosts/SelfPosts";

function Content(props) {
    return <div>
        <div className={module.Content}>
            <img src="dragonball.png" alt="main page"/>
        </div>
        <div className={module.Profile}>
            <img src="Ava.jpg" alt="Avatar"/>
            Profile Data
        </div>
        <SelfPosts PostMessage={props.PostMessage} addPost={props.addPost}/>
    </div>
}

export default Content;