import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



function Footer() {
    function InstagramIcon() {
        return (
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        );
      }
      function FacebookIcon() {
        return (
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        );
      }
      function TwitterIcon() {
        return (
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        );
      }
      function LinkedInIcon() {
        return (
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        );
      }
  return (
    <div className='footer'>
        <div className='row'>
            <div className='tenflex'>
            {/* first col */}
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'>
               <div className='tenbox'>
                <h3 style={{paddingBottom:"30px"}} >About Us</h3>
                <p>Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.</p>
                <div className='iconsfooter'>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
                </div>
               </div>
            </div>
            {/* second col */}
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'>
               <div className='tenbox'>
               <h3 style={{paddingBottom:"30px"}} >Our Services</h3>
               <p>AI Infrastructure Inspection<br/>
AI Visual Inspection<br/>
AI Data Analytics<br/>
AI People Tracking</p>
                
               </div>
            </div>
            {/* third col */}
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'>
            <div className='tenbox'>
            <h3 style={{paddingBottom:"30px"}} >Our Solutions</h3>
            <p>Asset Performance Management<br></br>
Job Grading & Evaluation<br/>
Compensation Management</p>

                </div>  
            </div>
            {/* fourth col */}
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'>
                <div className='tenbox'>
            <h3 style={{paddingBottom:"30px"}} >Reach Us</h3>
            <p>United Kingdom, 53 Denton close

Redhill, Surrey, RH1 5LB

+44 787 999 3892<br/>

Germany, Schützenstraße 51A

Lübeck, 23558

+49 179 512 5812<br/>

India, No. 154/20, Royal Space

Third Floor TI, HSR Layout,

Bangalore, Karnataka

560102

+91 85900 56435</p>
</div>
            </div>
          </div>  
        </div>

    </div>
  )
}

export default Footer