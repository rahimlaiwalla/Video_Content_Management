import React, { useState, useEffect } from  'react';
import VideoTableRow from './VideoTableRow.jsx';

function Videos(props) {


  return(
    <div className='tabContentParent'>
      <table className='VideoTable'>
        <thead >
          <tr >
            <th className='VideoTableHeadRow'>Video Title</th>
            <th className='VideoTableHeadRow'>Upload Date</th>
            <th className='VideoTableHeadRow'>Channel</th>
            <th className='VideoTableHeadRow'>Streaming Live</th>
          </tr>
        </thead>
        <tbody>
            {
              props.videoArray.map( video => {
                return (
                  <VideoTableRow 
                    id={video.id}
                    video={video}
                    videoArray={props.videoArray}
                    setVideoArray={props.setVideoArray}/>
                )
              })
            }
        </tbody>
      </table>
    </div>

  )
}

export default Videos;
