import React from "react";
import PropTypes from "prop-types";
import store from "./redux/redux-store";

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.Children}
    </StoreContext.Provider>
};
export default StoreContext;