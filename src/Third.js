import React , { useState }from 'react'
import './third.css'
import Popup from './Popup'
import WatchVideo from'./WatchVideo'

function Third() {
  
  const[popup,setPopup]=useState(false)
  const[video,setVideo]= useState(false)

  return (
    <div >
         <div className='row'>
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <div className='thirdbox'>
            <h5 className='thirdPara'>🟦AI INFRASTRUCTURE INSPECTION</h5>
            <h1 className='thirdHead'>Enhances Efficiency, Safety, and Cost-Effectiveness</h1>

            <ul>
                <li>Cutting-Edge Solution: Ombrulla leverages AI, drones, and IoT technologies to transform infrastructure inspection.</li>
                <li>Real-Time Insights: Real-time insights enhance inspection efficiency, safety, and reduce conventional challenges.</li>
                <li>Longevity and Cost-Effectiveness: Ombrulla ensures the longevity and safety of critical infrastructure while offering a cost-effective solution.</li>
                <li>Responsive Maintenance: Enhances infrastructure management, increasing reliability and responsiveness, and reducing risks.</li>
            </ul>
            <div className='btn'>
                <button onClick={()=>{setPopup((true))  }} className='thirdButtonOne'>Schedule Call</button>
                <button onClick={()=>{setVideo(true)}} className='thirdButtonTwo'>Read more</button>
            </div>
            </div>

        </div>
        {/* second coloumn */}
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <img className='thirdImage' src='https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp'></img>
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

export default Third