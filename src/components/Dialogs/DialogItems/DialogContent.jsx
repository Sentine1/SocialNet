import React from "react";
import module from "./DialogContent.module.css"
import Items from "./DialogContentItems"

function DialogContent (){
    return(
        <div className={module.Content}>
            Content:
            <Items message1="Message one"/>
            <Items message2="Message two"/>
            <Items message3="Message Three"/>
            <Items message4="Message Four"/>
            fix
        </div>
    )
}

export default DialogContent;