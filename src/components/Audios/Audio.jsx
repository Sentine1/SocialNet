import React from "react";
import module from "./Audios.module.css"
import Menu from "./Items/Menu"
import Content from "./Items/Content";

function Dialogs (){
    return(
        <div className={module.Dialogs}>
            <Menu />
            <Content />
        </div>
    )
}

export default Dialogs;