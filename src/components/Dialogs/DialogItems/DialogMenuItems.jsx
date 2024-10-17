import React from "react";
import {NavLink} from "react-router-dom";
import module from "./DialogMenuItems.module.css";

const DialogMenuItems = (props) => {
    return <div>
        <NavLink className={module.Items} to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogMenuItems;