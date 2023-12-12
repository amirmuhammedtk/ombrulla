import React , { useState }from 'react'
import './second.css'
import WatchVideo from'./WatchVideo'


function Second() {
  const[video,setVideo]= useState(false)

  return (
    <div className='row'>
    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 boxx'>
        {/* <h5>🟦 The Best AI Service Provider</h5>
        <h1>Crafting Tommorrows World With <br/><h1 className='adjst' style={{color:"blue",}}>AI Excellence</h1></h1>
        <p>The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assist clients in extracting data from diverse sources such as photos, videos, and data lakes, which can assist businesses in making data-driven insights and improving their bottom line.</p> */}
        <div className='secBox'>
        <h5 style={{marginTop:"20px",marginBottom:"30px"}}>🟦 The Best AI Service Provider</h5>
        <h1>Crafting Tommorrows World With <br/><h1 className='adjst' style={{color:"blue",}}>AI Excellence</h1></h1>
        <p style={{marginTop:"20px"}}> The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assist clients in extracting data from diverse sources such as photos, videos, and data lakes, which can assist businesses in making data-driven insights and improving their bottom line.</p> 
        <button onClick={()=>{setVideo(true)}} className='btnsec'>▶️ Watch Corperate Video</button>
        </div>
    </div>
    <WatchVideo trigger={video} setTrigger={setVideo}>
              <h1>YOUTUBE</h1>
              <img style={{height:"400px",width:"400px"}} src='https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp'/>
              <p>https://youtu.be/RHrTxizgOjc</p>        
                 </WatchVideo>
    </div>
  )
}

export default Second