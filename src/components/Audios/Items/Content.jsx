import React from "react";
import module from "./Сontent.module.css"

function Content (){
    return(
        <div className={module.Content}>
            Content:
            <div>Audio one</div>
            <div>Audio two</div>
            <div>Audio Three</div>
        </div>
    )
}

export default Content;