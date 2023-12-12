import './videopop.css'
import React from 'react'

function WatchVideo(props) {
  return (props.trigger)?(
    <div className='popupVideo'>
        <div className='insidepop'>
            <button onClick={()=>props.setTrigger(false)} className='closebtn' >Close</button>
            {props.children}
        </div>
    </div>
  ):"";
}

export default WatchVideo