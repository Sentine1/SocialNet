import React from "react";
import Content from "./DialogItems/DialogContent";
import module from "./Dialogs.module.css";
import DialogMenuContainer from "./DialogItems/DialogMenuContainer";
import DialogContentContainer from "./DialogItems/DialogContentContainer";

function Dialogs(props) {
    return (
        <div className={module.Dialogs}>
            <DialogMenuContainer className={module.Menu} store = {props.store}/>
            <DialogContentContainer className={module.Content} store = {props.store}/>
        </div>
    )
}

export default Dialogs;