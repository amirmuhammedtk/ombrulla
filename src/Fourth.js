import React,{useState} from 'react'
import './fourth.css'
import Popup from './Popup'
import WatchVideo from'./WatchVideo'

function Fourth() {
    
  const[popup,setPopup]=useState(false)
  const[video,setVideo]= useState(false)

  return (
    <div className='bodyy'>
        <div className='row'>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <img className='fourthImage' src='https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp'></img>
         </div>
         
        {/* second coloumn */}
        <div className=" col-md-12 col-lg-6 col-xl-6 ">
            <div className='thirdbox'>
            <h5 className='thirdPara'>🟦AI VISUAL INSPECTION</h5>
            <h1 className='thirdHead'>Improving Quality with Greater Precision</h1>

            <ul>
                <li>Automated Defect Detection: Automated visual inspection uses computer vision and machine learning to identify defects autonomously.</li>
                <li>Advanced Image Processing: It captures and enhances digital images for relevant feature extraction.</li>
                <li>Informed Decision-Making: The system classifies defects, aiding manufacturers in quality control decisions.</li>
                <li>Real-Time Quality Assurance: Integration with manufacturing enables real-time quality control and reduces substandard product risks.</li>
            </ul>
            <div className='btn'>
                <button onClick={()=>{setPopup((true))  }} className='thirdButtonOne'>Schedule Call</button>
                <button onClick={()=>{setVideo(true)}}  className='thirdButtonTwo'>Read more</button>
            </div>
            </div>

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

export default Fourth

