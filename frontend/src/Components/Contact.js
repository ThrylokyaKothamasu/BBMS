import './Styles.css';
import { Link } from 'react-router-dom';

export default function Contact(){


  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


    return(
        <>
        
        
        <div className="nav">
              <div className="cc">
                
                <i id="aa" class="bi bi-envelope"></i>&nbsp;&nbsp;bloodbank@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <i id="bb" class="bi bi-clock"></i>Service time : 12.00 AM

                <i id="cc" class="bi bi-telephone"></i>&nbsp;&nbsp;+91 08011457337&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <i id="bb" className="bi bi-person"></i><Link to='/Signin' style={{color:'white',textDecoration:'none'}}>Sign Out</Link>

              </div>
            </div>

            <div class="navbar">
                <img className="ee" src="https://capstoneguide.com/wp-content/uploads/2020/09/Blood-Bank-Management-System.jpg" alt=""></img>
                <p className="ff">Blood Bank Management System</p>   
            </div>

            <div class="topnav" id="myTopnav">
                <Link  to='/Home' className='g'>Home</Link>
                <Link  to='/About'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to='/Services'>Services</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to='/Contact'>Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to='/Gallery'>Gallery</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Read">Donor</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Readr">Receiver</Link>
                <Link to='/Signin'>Signout</Link>
                
                <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="iconh" onClick={myFunction}>&#9776;</a>
            </div>
        
        
        
        
        
        
        
        
        <br/><br/>
        <h3 className='c2'>Contact Us</h3>  <br/>
        <p className="hr-lines"></p>
     
        <div className='c1'>
            
        <div class="contain">
            <div class="content">
                <div class="left-side">
                <div class="address details">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="topic">Address</div>
                    <div class="text-one">Narasaraopet,</div>
                    <div class="text-two">Andhra Pradesh</div>
                </div>
                <div class="phone details">
                    <i class="fas fa-phone"></i>
                    <div class="topic">Phone</div>
                    <div class="text-one">+91 9751791203</div>
                <div class="text-two">+91 9159669599</div>
            </div>
            <div class="email details">
                <i class="fas fa-envelope"></i>
                <div class="topic">Email</div>
                <div class="text-one">bloodbanksupport@gmail.com</div>
                <div class="text-two"> bloodbankenquiry@gmail.com</div>
            </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any inquiries or any types of queries related to the blood bank management system, you can send us a message from here. It's our pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          <input type="text" placeholder='Enter your message'/>
        </div>
        <div class="button1">
          <input type="button" value="Send Now" />
        </div>
      </form>
        </div>
        </div>
    </div>
    </div>





    <br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Donate</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="#">Free Designs</a></li>
            <li><a href="#">Latest Designs</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Popular Designs</a></li>
            <li><a href="#">Art Skills</a></li>
            <li><a href="#">New Uploads</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </section>

    </>
    )
}