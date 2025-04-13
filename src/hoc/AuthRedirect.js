import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


export const withAuthRedirect = (Component) => {
    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    });

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <NavLink to={'/login'}/>;

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}