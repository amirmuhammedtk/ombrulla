import React,{useState} from 'react'
import './six.css'
import Popup from './Popup'
import WatchVideo from'./WatchVideo'


function Sixth() {
  const[popup,setPopup]=useState(false)
  const[video,setVideo]= useState(false)
  return (
    <div className='bluebg'>
          <div className='row'>
            {/* first col */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                <div className='sixBox'>
                <img style={{height:"30px",width:"100px"}} src='https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp'/>
                <h6 style={{color:"white"}}>PErformance - TRacking - ANalytics</h6>
                <h1 style={{color:"white"}}>AI & IoT Enabled<br/> Asset Performance<br/> Management</h1>
                <p style={{color:"white"}}>Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.</p>
                <div className='sixbtn'>
                    <button onClick={()=>{setPopup((true))  }}  className='sixbtnone'>Shedule Call</button>
                    <button onClick={()=>{setVideo(true)}} className='sixbtntwo'>▶️Watch Video</button>
                </div>
                </div>
            </div>
            {/* second col */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                <img className='siximg' style={{height:"400px",width:"400px"}} src='https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp'/>

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

export default Sixth