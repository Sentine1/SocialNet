import React from "react";
import module from "./Dialogs.module.css";
import DialogMenuContainer from "./DialogItems/DialogMenuContainer";
import DialogContentContainer from "./DialogItems/DialogContentContainer";

function Dialogs(props) {
    return (
        <div className={module.Dialogs}>
            <DialogMenuContainer className={module.Menu}/>
            <DialogContentContainer className={module.Content}/>
        </div>
    )
}

export default Dialogs;