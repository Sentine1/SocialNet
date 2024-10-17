import React from "react";
import module from "./Menu.module.css"

function DialogMenu (props){
    return(
        <div className={module.Menu}>
            <div>{props.data.ava}</div>
            <div>{props.data.names}</div>
        </div>
    )
}

export default DialogMenu;