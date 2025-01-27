import React from "react";
import module from "./News.module.css"
import Menu from "./NewsItems/Menu"
import Content from "./NewsItems/Content";

function News() {
    return (
        <div className={module.Dialogs}>
            <Menu/>
            <Content/>
        </div>
    )
}

export default News;