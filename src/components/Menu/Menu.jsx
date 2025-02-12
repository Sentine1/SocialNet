import React from 'react';
import module from './Menu.module.css'
import {NavLink} from "react-router-dom";
import "./Menu.css";

function Menu(props) {
    return <nav className={module.Menu}>

        <div className={module.Items}>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={module.Items}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={module.Items}>
            <NavLink to="/friends">Friends</NavLink>
        </div>
        <div className={module.Items}>
            <NavLink to="/users">Users</NavLink>
        </div>
        <div className={module.Items}>
            <NavLink to="/videos">Videos</NavLink>
        </div>
        <div className={module.Items}>
            <NavLink to="/audios">Audios</NavLink>
        </div>
        <div className={module.Items}>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <br/>
        <br/>
        <div className={`${module.Items} ${module.Active}`}>
            <NavLink to="/settings">Settings</NavLink>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={module.Items}>
            {props.friends.map(e => <NavLink to="/friends"><a href=""
                                                              className={e.names}> <img src={e.ava}
                                                                                        alt={e.name + " avatar"}/> </a></NavLink>)}
        </div>
    </nav>
}

export default Menu;