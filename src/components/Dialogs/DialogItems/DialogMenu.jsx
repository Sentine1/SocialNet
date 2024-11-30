import React from "react";
import module from "./DialogMenu.module.css";
import MenuItems from "./DialogMenuItems";

function DialogMenu (props){

    return(     
        <div className={module.Menu}>
            {props.data}
        </div>
    )
}

export default DialogMenu;