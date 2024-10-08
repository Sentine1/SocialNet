import React from "react";
import module from "./Friends.module.css"
import Menu from "./FriendsItems/Menu"
import Content from "./FriendsItems/Content";

function Friends (){
    return(
        <div className={module.Friends}>
            <Menu />
            <Content />
        </div>
    )
}

export default Friends;