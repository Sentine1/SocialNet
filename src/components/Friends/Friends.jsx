import React from "react";
import module from "./Friends.module.css"
import Menu from "./FriendsItems/Menu"
import Content from "./FriendsItems/Content";

function Friends (props){
    return(
        <div className={module.Friends}>
            <Menu data={props.state}/>
            <Content />
        </div>
    )
}

export default Friends;