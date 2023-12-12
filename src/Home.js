import React from 'react'
import './nav.css'




function Home() {
  return (
    // first row
    <div>
    <div className='firstRow'>

        {/* first col */}
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
                    <button className='btnone'>Shedule Call</button>
                    <button className='btntwo'>Watch Video</button>
                </div>
            </div>
        </div>


        {/* secon col */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">

             <img  className="image" src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" />
         </div>

    </div>
    </div>
  )
}

export default Home