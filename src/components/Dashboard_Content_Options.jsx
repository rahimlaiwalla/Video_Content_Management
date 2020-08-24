import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Dashboard_Content_Options(props) {

  const changeTab = () => {
    props.setClickedTab(props.tab);
  }

  return(
    <div className='dashboard_tab_container'>
      <div 
        className='dashboard_tab'
        onClick={changeTab}
      >
        {props.tab}
      </div>
    </div>
  )
};

export default Dashboard_Content_Options;