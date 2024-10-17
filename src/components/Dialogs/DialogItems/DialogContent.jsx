import React from "react";
import module from "./DialogContent.module.css"

function DialogContent(props) {
    return (
        <div className={module.Content}>
            <div>
                {props.MapMessage}
            </div>
        </div>
    )
}

export default DialogContent;