import React from "react";
import module from "./DialogContent.module.css"
import Items from "./DialogContentItems"

let mesages = [

    {message: "Message one"},
    {message: "Message two"},
    {message: "Message Three"},
    {message: "Message Four"}

]

let MapMessage = mesages.map(e => <Items message1={e.message}/>)

function DialogContent() {
    return (
        <div className={module.Content}>
            Content:
            {MapMessage}
            fix
        </div>
    )
}

export default DialogContent;