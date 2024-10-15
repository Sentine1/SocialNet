import React from "react";
import module from "./Dialogs.module.css"
import Menu from "./DialogItems/DialogMenu"
import Content from "./DialogItems/DialogContent";

function Dialogs (props){
    return(
        <div className={module.Dialogs}>
            <Menu className ={module.Menu} data ={props.data}/>
            <Content className ={module.Content}/>
        </div>
    )
}

export default Dialogs;