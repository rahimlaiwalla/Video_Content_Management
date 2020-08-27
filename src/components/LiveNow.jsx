import React, { useState, useEffect } from  'react';

function LiveNow(props) {
  return(
    <div className='tabContentParent'>
      <table className='VideoTable'>
        <thead >
          <tr >
            <th className='VideoTableHeadRow'>Video Title</th>
            <th className='VideoTableHeadRow'>Upload Date</th>
            <th className='VideoTableHeadRow'>Channel</th>
          </tr>
        </thead>
        <tbody>
            {
              props.videoArray.map( video => {
                if(video.live) {
                  return (
                    <tr className='videoTableRow'>
                      <td className='videoTableBody'>
                        {video.title}
                      </td>
                      <td className='videoTableBody'>
                        {video.date}
                      </td>
                      <td className='videoTableBody'>
                        {video.channel}
                      </td>
                    </tr>
                  )
                }
              })
            }
        </tbody>
      </table>

    </div>
)
}

export default LiveNow;
