import React,{useState} from 'react'
import './fifth.css'
import Popup from './Popup'
import WatchVideo from'./WatchVideo'

function Fifth() {
  const[popup,setPopup]=useState(false)
  const[video,setVideo]= useState(false)

  return (
    <div>
          <div className='row'>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <img className='thirdImage' src='https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp'></img>
         </div>
        {/* second coloumn */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <div className='thirdbox'>
            <h5 className='thirdPara'>🟦AI DATA ANALYTICS</h5>
            <h1 className='thirdHead'>Empowers Businesses to Make Insightful Decisions</h1>

            <ul>
                <li>Actionable Insights: AI data analysis enhances decisions, personalizes customer experiences and improve operations.</li>
                <li>Increased Customer Loyalty: AI predictive analytics for personalized recommendations & increased customer loyalty.</li>
                <li>Quality Assurance: AI analytics identifies and mitigates potential issues, ensuring the quality and reliability of products and services.</li>
                <li>Efficiency and Responsiveness: Customers benefit from increased efficiency, improved product quality, and more responsive interactions with businesses.</li>
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

export default Fifth
