import './Footer.css';
import gmail from "./../Footer/footer-icon/gmail.png"
import facebook from "./../Footer/footer-icon/facebook.png"
import twitter from "./../Footer/footer-icon/twitter.png"
import google from "./../Footer/footer-icon/google.png"
import { siteDetails,theme} from '../../data/data'

function Footer({}) {
  return (<>

    <div className="footer">
        <div className="footer-desc">
            <div className="footer-img">
                <p className="site-title" style={{color:theme.text, backgroundColor:theme.primaryColor}}>{siteDetails.title}</p>
            </div>

            <div className="quick-links">
                <span><b><u>Quick Links</u></b></span>
                <span className="links"> Home   </span>
                <span className="links"> Product </span>
                <span className="links"> About   </span>
                <span className="links"> Contact </span>
            
            </div>

            <div className="useful-links">
                <span><b><u>Usefull Links</u></b></span>
                <span>Privacy Policy</span>
                <span>Terms And conditions</span>
                
                <span>Support</span>
                <span>FAQ</span>
            </div>

            <div className="contact">
                <p><b>CONTACT</b></p>
                <span>{siteDetails.contactDetails}</span>

                <div>
                    <img src={gmail} className='footer-icon' />
                    <img src={facebook} className='footer-icon' />
                    <img src={twitter} className='footer-icon' />
                    <img src={google} className='footer-icon' />
                </div>
            </div>
        </div>
    </div>
            

        </>  )
}

export default Footer