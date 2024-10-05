import React from 'react';
import module from  './Header.module.css'

function Header() {
return <header className={module.header}>
	<img src="logo.svg" alt="logo"/>	
</header>
};

export default Header;