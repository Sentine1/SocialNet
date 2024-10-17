import React from 'react';
import module from './Header.module.css'

function Header() {
    return <header className={module.header}>
        <img src="logo.svg" alt="logo"/>
        <h1>Реакт соц сеть вырвиглаз вёрстка инкорпарейтед</h1>
    </header>
}

export default Header;