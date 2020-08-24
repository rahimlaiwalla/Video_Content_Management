import React, { useState, useEffect } from 'react';

function TabContent(props) {

  const [channel, setChannel] = useState('');
  const [checked, setChecked] = useState(false);
    
  return (
    <div className='tabContentParent'>

      {
        props.clickedTab === props.dashboardTabs[0] ?
        <form className='tabContentParent'>
          <div className='uploadVideo_FormContainer_Parent'>
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
              <label className='radioBtn'>
                <input type='radio' value='Nat Geo HD' name='Channel' checked={channel === 'Nat Geo HD'} />
                National Geographic Channel HD
              </label>
              <label className='radioBtn'>
                <input type='radio' value='Nat Geo TV' name='Channel' checked={channel === 'Nat Geo Tv'} />
                Nat Geo Tv
              </label>
              <label className='radioBtn'>
                <input type='radio' value='Nat Geo Wild' name='Channel' checked={channel === 'Nat Geo Wild'} />
                Nat Geo Wild
              </label> 
              <label className='radioBtn'>
                <input type='radio' value='Nat Geo Mundo' name='Channel' checked={channel === 'Nat Geo Mundo'} />
                Nat Geo Mundo
              </label>   
              <label className='radioBtn'>
                <input type='radio' value='Add Channel' name='Channel' checked={channel === 'Add Channel'} />
                <input type='text' placeholder='Create New Channel'/>
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
                <input className='goLiveCheckbox' type='checkbox' checked={checked} />
              </div>
            </div>
          </div>
        </form>
        : 
        <div>{props.clickedTab}</div>
      }

    </div>
  )


}

export default TabContent;