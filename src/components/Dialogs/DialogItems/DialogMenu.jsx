import React from "react";
import module from "./DialogMenu.module.css"

function DialogMenu (){
    return(
        <div className={module.Menu}>
            <div>Person one</div>
            <div className={module.active}>Person two</div>
            <div>Person n</div>
        </div>
    )
}

export default DialogMenu;