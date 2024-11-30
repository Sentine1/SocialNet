import React from "react";
import module from "./Friends.module.css"
import Content from "./FriendsItems/Content";
import MenuContainer from "./FriendsItems/MenuContainer";

function Friends (props){
    return(
        <div className={module.Friends}>
            <MenuContainer store = {props.store}/>
            <Content />
        </div>
    )
}

export default Friends;