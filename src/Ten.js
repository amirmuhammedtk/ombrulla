import React from 'react'
import './ten.css'

function Ten() {
  return (
    <div>
         <h6 style={{textAlign:"center",paddingTop:"133px"}}>BLOG UPDATES</h6>
        <h1 style={{textAlign:"center",padding:"10px"}}>To Read</h1>
          <div className='row'>
            {/* first col */}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
            <div className='tenBoxOne'>
                <img style={{height:"220px",width:"340px",borderRadius:"30px"}} src='https://www.ombrulla.com/_astro/blog-1.311eedd5_wt4eW.webp'/>
                <h4 style={{paddingTop:"20px"}}>Privacy and security concerns with Artificial Intelligence</h4>
                <p style={{paddingTop:"20px"}}>Privacy and security are significant concerns when it comes to AI. AI systems often require access to large amounts of personal data, which can be ...</p>
                <img style={{height:"50px",width:"50px"}} src='https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp'/>
                <p className='tenpara'>ZARA ELIZABETH</p>
            </div>
            </div>

            {/* second col */}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
            <div className='tenBoxTwo'>
                <img style={{height:"220px",width:"340px",borderRadius:"30px"}} src='https://www.ombrulla.com/_astro/blog-2.c3cc33af_ZkLCIU.webp'/>
                <h4 style={{paddingTop:"20px"}}>The impact of AI on jobs and the workforce</h4>
                <p style={{paddingTop:"20px"}}>The impact of AI on jobs and the workforce is a topic of much debate and speculation. While some argue that AI will create new job opportunities...</p>
                <img style={{height:"50px",width:"50px"}} src='https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp'/>
                <p className='tenpara'>ZARA ELIZABETH</p>
            </div>
            </div>

            {/* third col */}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
            <div className='tenBoxThree'>
                <img style={{height:"220px",width:"340px",borderRadius:"30px"}} src='https://www.ombrulla.com/_astro/blog-3.fee62469_Z3YRpV.webp'/>
                <h4 style={{paddingTop:"20px"}}>Bias and fairness in Artificial Intelligence</h4>
                <p style={{paddingTop:"20px"}}>Bias and fairness are important considerations in AI, as they can significantly impact the accuracy and effectiveness of AI systems, as well as the social and ethical implications of their use...</p>
                <img style={{height:"50px",width:"50px"}} src='https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp'/>
                <p className='tenpara'>ZARA ELIZABETH</p>

            </div>
            </div>
          </div>
    </div>
  )
}

export default Ten