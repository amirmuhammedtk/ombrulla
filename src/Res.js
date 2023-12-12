import React, { useState } from 'react'
import './home.css'
import './nav.css'
import Popup from './Popup'
import WatchVideo from'./WatchVideo'

function Res() {

  const[popup,setPopup]=useState(false)
  const[video,setVideo]= useState(false)
  
  return (
    <div className='bodys'>
       {/*first page  */}
    <div className='row'>
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
         <div className='box'>
                {/* first head */}
                <div className='head'>
                    <h1 className='header'>Manual <br/>Inspection is</h1>
                </div>
                <div className='secHead'>
                    <h1 className='header'>Slow & Error-<br/>Prone</h1>
                </div>
                <p className='para'>Ai-driven computer vision transforms manufacturing Quality inspection,boosting precission and const=efficiency while upholding product excellence</p>
                <div className='btn'>
                    <button onClick={()=>{
                      setPopup((true))
                    }} className='btnone'>Shedule Call</button>
                    <button onClick={()=>{setVideo(true)}} className='btntwo'>▶️Watch Video</button>
                </div>
            </div>
         </div>
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
         <img style={{marginTop:"80px"}} className="image avat" src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" />

            </div>

    </div>

    <Popup trigger={popup} setTrigger={setPopup}>
              <form>
                <input type='text'   placeholder='enter your name'/><br/>
                <input type='text' placeholder='enter number'/>   <br/> 
                <input type='mail' placeholder='enter your email'/><br/>
                <input type='textarea'  placeholder='enter mesaage'></input>       
                </form>
              </Popup>
    <WatchVideo trigger={video} setTrigger={setVideo}>
              <h1>YOUTUBE</h1>
              <img style={{height:"400px",width:"400px"}} src='https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp'/>
              <p>https://youtu.be/RHrTxizgOjc</p>        
                 </WatchVideo>
    </div>


  
 
    
  )
}

export default Res