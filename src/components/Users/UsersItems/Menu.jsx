import React from "react";
import module from "./Menu.module.css"

function DialogMenu(props) {
    return (
        <div className={module.Menu}>
            <div>{props.avatars}</div>
            <div>{props.names}</div>
        </div>
    )
}

export default DialogMenu;