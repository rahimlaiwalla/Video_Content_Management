import React, { useState, useEffect } from 'react';
import Videos from './Videos.jsx';
import Channels from './Channels.jsx';
import LiveNow from './LiveNow.jsx';

function TabContent(props) {

  const channels = [
    'National Geographic Channel HD',
    'Nat Geo Wild',
    'Nat Geo Mundo',
  ];

  const [videoArray, setVideoArray] = useState([
    {
      id: 1,
      title: '1989: The Year That Made Us',
      date: "8/25/2020",
      channel: 'National Geographic Channel HD',
      live: true
    },
    {
      id: 2,
      title: `Alaska's Deadliest`,
      date: "8/25/2020",
      channel: 'Nat Geo Wild',
      live: false
    },
    {
      id: 3,
      title: `Parcs Nacionales de America`,
      date: "8/25/2020",
      channel: 'Nat Geo Mundo',
      live: false
    }
  ]);

  const [channel, setChannel] = useState('');
  const [checked, setChecked] = useState(false);
  const [newChannel, setNewChannel] = useState('')

  // const changechannel = (channelName) => {
  //   setChannel(channelName)
  // };

  if(props.clickedTab === props.dashboardTabs[0]) {
    return(
      <div className='tabContentParent'>
        <form className='tabContentParent'>
          <div className='uploadVideo_FormContainer_Parent leftBorder'>
            <div className='uploadVideoTitle'>Upload a Video</div>
            {/* <input type='button' className='uploadBtn' value='Upload Video' /> */}
            <label className='uploadBtn'>
              <input type='file' className='inputFile'/>
              <div className='uploadBtnText_Parent'>
                <div className='uploadBtnText'>Upload Video</div>
              </div>
            </label>
            {/* <label for='file' className='uploadBtn'>Upload a Video</label> */}
          </div>
          <div className='uploadVideo_FormContainer_Parent'>
            <div className='uploadVideoTitle'>Choose Channel</div>
            <div className='radioContainer'>
              {
                channels.map( channelName => {
                  return (
                    <label className='radioBtn'>
                      <input type='radio' value={channelName} name='Channel' onChange={ () => {setChannel(channelName); setNewChannel('')}} checked={channel === channelName} />
                      {channelName}
                    </label>
                  )
                })
              }
              <label className='radioBtn'>
                <input type='radio' value='Add Channel' name='Channel' onChange={() => {setChannel('Add Channel')}} checked={channel === 'Add Channel'} />
                <input type='text' placeholder='Create New Channel' value={newChannel} onChange={(event) => {channel === 'Add Channel' ? setNewChannel(event.target.value) : null}}/>
              </label>                          
            </div>
          </div>
          <div className='uploadVideo_FormContainer_Parent noRightBorder'>
            <div className='uploadVideoTitle'>
              <div>Go Live</div>
              <div className='uploadDescription'>Select below to set video to stream live now</div>
            </div>
            <div className='radioContainer'>
              <div className='goLiveCheckbox_Parent'>
                <input className='goLiveCheckbox' type='checkbox' onChange={() => {setChecked(!checked)}} checked={checked} />
              </div>
            </div>
          </div>
        </form>
    </div>

    )
  } else if(props.clickedTab === props.dashboardTabs[1]) {
    return (
        <Videos 
          clickedTab={props.clickedTab}
          videoArray={videoArray}
          setVideoArray={setVideoArray}/>
    )
  } else if(props.clickedTab === props.dashboardTabs[2]) {
    return (
        <Channels 
          clickedTab={props.clickedTab}/>
    )
  } else if(props.clickedTab === props.dashboardTabs[3]) {
    return (
        <LiveNow 
          clickedTab={props.clickedTab}
          videoArray={videoArray}/>
    )
  }

}

export default TabContent;