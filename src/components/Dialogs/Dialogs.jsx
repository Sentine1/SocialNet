import React from "react";
import Menu from "./DialogItems/DialogMenu";
import Content from "./DialogItems/DialogContent";
import module from "./Dialogs.module.css";

function Dialogs(props) {
    return (
        <div className={module.Dialogs}>
            <Menu className={module.Menu} MapPersonList={props.MapPersonList}/>
            <Content className={module.Content} MapMessage={props.MapMessage}/>
        </div>
    )
}

export default Dialogs;