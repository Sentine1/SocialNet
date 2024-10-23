import React from "react";
import Menu from "./DialogItems/DialogMenu";
import Content from "./DialogItems/DialogContent";
import module from "./Dialogs.module.css";

function Dialogs(props) {
    return (
        <div className={module.Dialogs}>
            <Menu className={module.Menu} MapPersonList={props.messagePage.MapPersonList}/>
            <Content className={module.Content} messagePage={props.messagePage} addMessage={props.addMessage}
                     editMessageText={props.editMessageText}/>
        </div>
    )
}

export default Dialogs;