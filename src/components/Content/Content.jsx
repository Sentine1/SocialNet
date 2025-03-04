import React from 'react';
import module from './Content.module.css'
import SelfPostsContainer from './SelfPosts/SelfPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Content(props) {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <SelfPostsContainer className={module.Profile}/>
    </div>
}

export default Content;