import React from 'react';
import module from './Menu.module.css'

function Menu() {
return <nav className={module.Menu}>

	<div className={module.Items}>
		Profile
	</div>
	<div className={module.Items}>
		News
	</div>
	<div className={module.Items}>
		Friends
	</div>
	<div className={module.Items}>
		Videos
	</div>
	<div className={module.Items}>
		Audios
	</div>
	<div className={module.Items}>
		Messages
	</div>
	<br/>
	<br/>
	<div className={`${module.Items} ${module.Active}`}>
		Settings
	</div>
</nav>
};

export default Menu;