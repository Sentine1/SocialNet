import React from "react";
import MenuItems from "./DialogMenuItems";
import DialogMenu from "./DialogMenu";

function DialogMenuContainer (props){
    let state = props.store.getState();
    let data =state.messagePage.PersonList.map(e => <MenuItems id={e.id} name={e.name}/>);
    return <DialogMenu data={data} />;
}
    
export default DialogMenuContainer;