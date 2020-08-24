import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Dashboard_Content_Options from './Dashboard_Content_Options.jsx';
import TabContent from './TabContent.jsx';

function Dashboard(props) {

  const [username, setUserName] = useState('');
  const dashboardTabs = ['Upload Video', 'Videos', 'Channels', 'Live Now'];
  const [clickedTab, setClickedTab] = useState(dashboardTabs[0]);

  useEffect( () => {
    Axios.get('/getUserName', )
      .then( response => {
        console.log('RESONSE IN DASHBOARD: ', response.data);
        setUserName(response.data)
      })
  }, ['username']);

  return(
    <section className='dashboard'>
      <article className='dashboardUserInfo'>
        <div className='dashboardProfileInfo'>
          <div className='userPic'>
            <div className='userPicContent'>
              <div className='userPicContent_Letter'>{username[0]}</div>
            </div>
          </div>
          <div className='usernameMainContainer'>
            <div className='usernameSecondaryContainer'>
              <div className='username'>{username}</div>
            </div>
          </div>
        </div>
      </article>
      <article className='dashboard_options'>
        <div className='dashboard_options_container'>
          {
            dashboardTabs.map( tab => {
              return <Dashboard_Content_Options 
                tab={tab}
                clickedTab={clickedTab}
                setClickedTab={setClickedTab}/>
            })
          }
        </div>
      </article>
      <article className='dashboardContent_Container'>
        <div className='dashboardContent_Parent'>
          <div className='dashboardContent'>
            <TabContent 
              dashboardTabs={dashboardTabs}
              clickedTab={clickedTab}
            />
          </div>
        </div>
      </article>
    </section>
  )
};

export default Dashboard;