import React from "react";
import {NavLink} from "react-router-dom";
import DialogMenu from "./Menu";

function DialogMenuContainer (props){
    let state = props.store.getState();
    let avatars  = state.FriendsData.Friends.map(e => <img src={e.ava} alt={e.name + " avatar"}/>);
    let names = state.FriendsData.Friends.map(e => <div><NavLink to="/friends">{e.name}</NavLink></div>);
    return(
        <DialogMenu avatars = {avatars} names = {names}/>
    )
}

export default DialogMenuContainer;