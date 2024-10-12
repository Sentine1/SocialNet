import React from "react";
import module from "./Dialogs.module.css"
import Menu from "./DialogItems/DialogMenu"
import Content from "./DialogItems/DialogContent";

function Dialogs (){
    return(
        <div className={module.Dialogs}>
            <Menu className ={module.Menu}/>
            <Content className ={module.Content}/>
        </div>
    )
}

export default Dialogs;