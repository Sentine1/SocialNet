import React from 'react';
import module from './Content.module.css'
import SelfPosts from "./SelfPosts/SelfPosts";

function Content() {
    return <div className={module.Content}>
        <div className={module.Img}>
            <img src="dragonball.png" alt="main page"/>
        </div>
        <div className={module.Profile}>
            <img src="Ava.jpg" alt="Avatar" /> 
            Profile Data
        </div>
        <SelfPosts/>
    </div>
}

export default Content;