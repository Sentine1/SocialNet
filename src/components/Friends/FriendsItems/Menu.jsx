import React from "react";
import module from "./Menu.module.css"
import {NavLink} from "react-router-dom";

function DialogMenu (props){
    let avatars  = props.data.Friends.map(e => <img src={e.ava} alt={e.name + " avatar"}/>);
    let names = props.data.Friends.map(e => <div><NavLink to="/friends">{e.name}</NavLink></div>);
    return(
        <div className={module.Menu}>
            <div>{avatars}</div>
            <div>{names}</div>
        </div>
    )
}

export default DialogMenu;