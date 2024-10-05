import React from 'react';
import './App.css';
import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'

function App() {
  return (
    <div className='app-wrapper'>
	<Header />
	<Menu />		
	<Content />
    </div>
  );
}

export default App;
