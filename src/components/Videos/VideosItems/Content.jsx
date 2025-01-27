import React from "react";
import module from "./Content.module.css"

function DialogContent() {
    return (
        <div className={module.Content}>
            Videos:
            <div>Video one</div>
            <div>Video two</div>
            <div>Video Three</div>
        </div>
    )
}

export default DialogContent;