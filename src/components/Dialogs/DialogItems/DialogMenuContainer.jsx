import React from "react";
import MenuItems from "./DialogMenuItems";
import DialogMenu from "./DialogMenu";
import StoreContext from "../../../StoreContext";

function DialogMenuContainer(props) {
    
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let data = state.messagePage.PersonList.map(e => <MenuItems id={e.id} name={e.name}/>);
                    return <DialogMenu data={data}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogMenuContainer;