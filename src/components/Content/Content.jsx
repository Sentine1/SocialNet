import React from 'react';
import module from './Content.module.css'
import SelfPostsContainer from './SelfPosts/SelfPostsContainer'
function Content(props) {
    return <div>
        <div className={module.Content}>
            <img src="dragonball.png" alt="main page"/>
        </div>
        <div className={module.Profile}>
            <img src="Ava.jpg" alt="Avatar"/>
            Profile Data
        </div>
        <SelfPostsContainer store = {props.store}/>
    </div>
}

export default Content;