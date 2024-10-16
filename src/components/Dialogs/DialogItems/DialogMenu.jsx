import React from "react";
import module from "./DialogMenu.module.css";

function DialogMenu (props){
    return(     
        <div className={module.Menu}>
            {props.MapPersonList}
        </div>
    )
}

export default DialogMenu;