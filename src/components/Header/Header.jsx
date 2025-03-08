import React from 'react';
import module from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return <header className={module.header}>
        <img src="logo.svg" alt="logo"/>
        <h1>Реакт соц сеть вырвиглаз вёрстка инкорпарейтед</h1>
        <div className={module.loginBlock}>
            {props.isAuth ? <span> {props.login} </span> :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;