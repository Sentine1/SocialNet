import React from 'react';

import "./Menu.css";
import Menu from "./Menu";
import {NavLink} from "react-router-dom";

function MenuContainer(props) {
    let state = props.store.getState();
    let data = state.FriendsData.Friends
    return (<Menu friends={data.slice(0,3)}/>)
}

export default MenuContainer;