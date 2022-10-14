import './App.css';
import About from './components/About'
import Help from './components/Help'
import Contact from './components/Contact'
import logo from './images/logo.svg'
import imageintromobile from './images/imageintromobile.jpg'
import imageintrodesktop from './images/imageintrodesktop.jpg'
import iconsnappyprocess from './images/iconsnappyprocess.svg'
import iconaffordableprices from './images/iconaffordableprices.svg'
import iconpeoplefirst from './images/iconpeoplefirst.svg'
import iconfacebook from './images/iconfacebook.svg'
import icontwitter from './images/icontwitter.svg'
import iconpinterest from './images/iconpinterest.svg'
import iconinstagram from './images/iconinstagram.svg'
import bgpatternintrorightmobile from './images/bgpatternintrorightmobile.svg'
import bgpatternintrorightdesktop from './images/bgpatternintrorightdesktop.svg'
import bgpatternintroleftdesktop from './images/bgpatternintroleftdesktop.svg'
import bgpatternmobilenav from './images/bgpatternmobilenav.svg'

function App() {
  return (
    <div className='page'>
      <div className='heading'>
        <img src={logo} alt="logo"/>
          <div>
          <Menu />
        </div>
        <div className='nav'>
          <a href='#'>HOW WE WORK</a>
          <a href='#'>BLOG</a>
          <a href='#'>ACCOUNT</a>
          <a href='#' id='view'>VIEW PLANS</a>
        </div>
      </div>
      <div><img src={imageintromobile} alt="intro" className='intro-image'/></div>
      <div className='plan'>
        <div className='intro-text'>
          <hr id='hr'/>
          <p id='h3'>Humanizing your insurance.</p>
          <p id='p'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
          <a href='#'>VIEW PLANS</a>
          <img src={bgpatternintrorightmobile} className='bgintropattern' alt=''/>
        </div>
        <div>
          <img src={imageintrodesktop} alt="intro" className='desktop-image'/>
        </div>
        <div>
          <img src={bgpatternintrorightdesktop}  className='bgrightpatterndesktop' alt=''/>
        </div>
        <div>
          <img src={bgpatternintroleftdesktop}  className='bgleftpatterndesktop' alt=''/>
        </div>
      </div>
      <div className='about'>
        <hr/>
        <p id='head'>We’re different</p>
        <div className='ad'>
          <About
          img={iconsnappyprocess} 
          head={"Snappy Process"} 
          text={"Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."}/>
          <About 
          img={iconaffordableprices} 
          head={"Affordable Prices"} 
          text={"We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."}/>
          <About 
          img={iconpeoplefirst} 
          head={"People First"} 
          text={"Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."}/>
        </div>
      </div> 
      <div className='find'>
        <div><h2 id='how'>Find out more about how we work</h2></div>
        <div><a href='#'>HOW WE WORK</a></div>
      </div>
      <div className='footer'>
        <div className='insure'>
          <div><img src={logo} alt="logo"/></div>
          <div className='social'>
            <a href='https://www.facebook.com'><img src={iconfacebook} alt="logo"/></a>
            <a href='https://www.twitter.com'><img src={icontwitter} alt="logo"/></a>
            <a href='https://www.pinterest.com'><img src={iconpinterest} alt="logo"/></a>
            <a href='https://www.instagram.com'><img src={iconinstagram} alt="logo"/></a>
          </div>
        </div>
        <hr style={{width:"81%", margin: "auto",color:'hsl(0, 0%, 98%)'}}/>
        <div className='info'>
          <div>
            <Help
              head={"OUR COMPANY"} a1={"HOW WE WORK"} a2={"WHY INSURE?"} a3={"CHECK PRICE"}
              a4={"REVIEWS"} />
          </div>
          <div>
          <Help
              head={"HELP ME"} a1={"FAQS"} a2={"TERMS OF USE"} a3={"PRIVACY POLICY"}           a4={"COOKIES"} />
          </div>
          <div>
          <Contact
              head={"CONTACT"} a1={"SALES"} a2={"SUPPORT"} a3={"LIVE CHAT"} />
          </div>
          <div style={{marginBottom: '100px'}}>
          <Contact
              head={"OTHERS"} a1={"CAREERS"} a2={"PRESS"} a3={"LICENSES"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
