import React from "react";
import module from "./DialogMenu.module.css";

function DialogMenu (props){
    return(     
        <div className={module.Menu}>
            {props.data}
        </div>
    )
}

export default DialogMenu;