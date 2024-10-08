import React from 'react';
import module from './Menu.module.css'

function Menu() {
return <nav className={module.Menu}>

	<div className={module.Items}>
		<a href="/profile">Profile</a>
	</div>
	<div className={module.Items}>
		<a href="/news">News</a>
	</div>
	<div className={module.Items}>
		<a href="/friends">Friends</a>
	</div>
	<div className={module.Items}>
		<a href="/videos">Videos</a>
	</div>
	<div className={module.Items}>
		<a href="/audios">Audios</a>
	</div>
	<div className={module.Items}>
		<a href="/dialogs">Messages</a>
	</div>
	<br/>
	<br/>
	<div className={`${module.Items} ${module.Active}`}>
		<a href="/settings">Settings</a>
	</div>
</nav>
};

export default Menu;