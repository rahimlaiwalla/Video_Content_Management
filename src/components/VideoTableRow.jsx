import React, { useState, useEffect } from  'react';

function VideoTableRow(props) {

  const videoArray = props.videoArray;
  const [live, setLive] = useState(props.video.live)

  const updateVideos = () => {
    videoArray.forEach( video => {
      if(video.id === props.id){
        video.live = !video.live;
      }
    })
    setLive(!live);
    return props.setVideoArray(videoArray);
  }

  return (
    <tr className='videoTableRow'>
      <td className='videoTableBody'>
        {props.video.title}
      </td>
      <td className='videoTableBody'>
        {props.video.date}
      </td>
      <td className='videoTableBody'>
        {props.video.channel}
      </td>
      <td className='videoTableBody'>
          <input type='checkbox' onChange={updateVideos} checked={props.video.live}></input>
      </td>
    </tr>    
  )
}

export default VideoTableRow;