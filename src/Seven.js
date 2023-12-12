import React from 'react'
import './seven.css'

function Seven() {
  return (
    <div>
         <div className='row'>
            {/* first col */}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                <div className='sevenBoxOne'>
                    <h5>🟦PRODUCTS</h5>
                    <h1>Our HR Tools</h1>
                    <p>Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision.</p>
                </div>

            </div>
            {/* second col */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                    <div className='sevenBoxTwo'>
                        <h2 style={{padding:"20px"}}>Job Grading and Evaluation</h2>
                        <p style={{padding:"20px"}}>Job evaluation assesses and ranks job roles in an organization based on responsibilities and skills, often for compensation and structuring purposes.</p>
                        <img style={{height:"100px",width:"180px",padding:"20px"}} src='https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp'/>
                        <button className='sevenbtnone'>Free Trial 🡵</button>
                    
                    </div>

            </div>
            {/* third col */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                     <div className='sevenBoxThree'>
                    <h2 style={{padding:"20px"}}>Compensation Management</h2>
                    <p style={{padding:"20px"}}>Compensation management software automates salary planning, budget management, and equity analysis, ensuring fair and competitive pay practices.</p>
                    <img style={{height:"100px",width:"180px",padding:"20px"}} src='https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp'/>
                    <button className='sevenbtntwo'>Book For Demo 🡵</button>
                    </div>

            </div>
         </div>
    </div>
  )
}

export default Seven