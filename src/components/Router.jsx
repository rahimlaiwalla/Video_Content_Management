import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard.jsx';


function Router(props) {

  if(window.location.pathname === '/'){
    return (<div>Home</div>)
  }

  if(window.location.pathname === '/dashboard'){
    return (<Dashboard />)
  }

};

export default Router;