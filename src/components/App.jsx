import React, { useState, useEffect } from 'react';
import Router from './Router.jsx';

function App() {

  return(
    <div className='allContent'>
      <header className='header'>
        <div className='companyNav'>
          <img className='company' src='https://xctuality.com/wp-content/uploads/2020/07/Xctuality_Color-768x96.png'></img>
        </div>
        <div className='nav'>
          <nav className='navOptions'>
            <a href='/'>Home</a>
            <a href='/dashboard'>Dashboard</a>
            <a href='/login'>Login</a>
          </nav>
        </div>
      </header>
      <section>
        <Router />
      </section>
    </div>
  )
};

export default App;