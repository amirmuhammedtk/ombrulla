import React from 'react'
import './popup.css'

function Popup(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='inside'>
            <button onClick={()=>props.setTrigger(false)} className='closebtn' >Close</button>
            {props.children}
            <button>Shedule Call</button>
        </div>
    </div>
  ):"";
}

export default Popup