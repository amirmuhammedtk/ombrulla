import React from 'react';
import './slide.css'

function Data() {
  return (
    <div className='Outer'>
      <h5 style={{color:"white"}}>OUR TESTIMONIALS</h5>
      <h1 className='datahead'>What Customers Say About Us</h1>
      <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-12'>
      <div className='slideSet'>
        {data.map((d) => (
          <div className='slideBox'>
            <h2>{d.name}</h2>
            <p style={{paddingTop:"30px",paddingBottom:"20px"}}>{d.para}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'Quresh Goga',
    para:
      "Ombrulla's AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The system's accuracy and real-time insights not only streamline operations but also elevate overall security measures",
  },
  {
    name: 'Joseph',
    para:
      'Ombrulla\'s AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective ',
  },
  {
    name: 'Vinod MN',
    para:
      'We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project ',
  },
  {
    name: 'David Thomes',
    para:
      "Ombrulla's AI people tracking solution has impressively enhanced our ability to seamlessly monitor and manage foot traffic. The system's accuracy and real-time insights not only streamline operations but also elevate overall security measures",
  },
  {
    name: 'Tony Michael',
    para:
      'Ombrulla\'s AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective ',
  },
  {
    name: 'Manoj Menon ',
    para:
      'We are pleased to express our satisfaction with the collaboration with Ombrulla for the execution of scratch and damage detection in cars. We extend our heartfelt gratitude to Ombrulla for their invaluable support throughout this project ',
  },
];

export default Data;
