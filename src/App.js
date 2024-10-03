import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
	<header className='header'>
	<img src='https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_1280.jpg' alt="logo"/>
	</header>
	<nav className='Menu'>
		
	<div>
		Profile
	</div>
		<div>
		Messages
	</div>
		<div>
		Friends
	</div>
		<div>
		Videos
	</div>
		<div>
		Audios
	</div>
		<div>
		Imges
	</div>
		<div>
		Settings
	</div>
	</nav>
		
	<div className='Content'>
		<div>
			<img src="https://t3.ftcdn.net/jpg/07/46/74/96/360_F_746749607_zDV4D3BHULyb1NVvRVWujOSwNJWv8ufK.jpg" alt="main page"/>
		</div>
		<div>
			Profile.img description
		</div>
		<div>
			<div>
				Wall:
					
				<div>
					Msgs
				</div>
				<div>
					add msgs
				</div>
		</div>
		</div>
	</div>
    </div>
  );
}

export default App;
