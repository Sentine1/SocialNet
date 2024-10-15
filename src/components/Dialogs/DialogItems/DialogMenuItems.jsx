import React from "react";
import {NavLink} from "react-router-dom";
import module from "./DialogMenuItems.module.css";

const DialogMenuItems = (props) => {
    let path = "/dialogs/" + props.id;
    return <div>
        <NavLink className={module.Items} to={path}>{props.name}</NavLink>
    </div>
}

export default DialogMenuItems;