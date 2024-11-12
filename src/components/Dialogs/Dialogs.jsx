import React from "react";
import Menu from "./DialogItems/DialogMenu";
import Content from "./DialogItems/DialogContent";
import module from "./Dialogs.module.css";

function Dialogs(props) {
    return (
        <div className={module.Dialogs}>
            <Menu className={module.Menu} PersonList={props.messagePage.PersonList}/>
            <Content className={module.Content} messagePage={props.messagePage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Dialogs;