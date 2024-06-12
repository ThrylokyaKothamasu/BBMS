import './../Styles.css';
import { Link } from 'react-router-dom';
import g1 from './../images/gallery/g1.jpg';
import g2 from './../images/gallery/g2.jpg';
import g3 from './../images/gallery/g3.jpg';
import g4 from './../images/gallery/g6.jpg';
import g5 from './../images/gallery/g5.jpg';
import g6 from './../images/gallery/g9.jpg';

export default function Gallerys(){


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



            <div className="nav" style={{paddingTop:'12px'}}>
              <div className="cc">
                
                <i id="aa" class="bi bi-envelope"></i>&nbsp;&nbsp;bloodbank@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <i id="bb" class="bi bi-clock"></i>Service time : 12.00 AM

                <i id="cc" class="bi bi-telephone"></i>&nbsp;&nbsp;+91 08011457337&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <i id="bb" className="bi bi-person"></i><div class="dropdowns"><button class="dropbtns">Login <i class="fa fa-caret-down" style={{color:'white'}}></i></button>
                    <div class="dropdown-contents">
                        <Link to="/Signin">login</Link>
                        <Link to="/Adminlogin">Admin login</Link>
                    </div>
                </div> 
              </div>
            </div>

            <div class="navbar">
                <img className="ee" src="https://capstoneguide.com/wp-content/uploads/2020/09/Blood-Bank-Management-System.jpg" alt=""></img>
                <p className="ff">Blood Bank Management System</p>   
            </div>

            <div class="topnav" id="myTopnav">
            <Link to='/Homes' className='g' style={{paddingLeft:'100px'}}>Home</Link>
                <Link  to='/Abouts'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to='/Servicess'>Services</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to='/Contacts'>Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to='/Gallerys'>Gallery</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                
                <Link to='/Signup'>Sign Up</Link>
                
                <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="iconh" onClick={myFunction}>&#9776;</a>
            </div>





            <p className='a1'>Gallery</p>
            <p className="hr-lines"></p>

            <div>
                <div className='g1'>
                    <p className='g3'><img className='g2' src={g4} /></p>
                    <p className='g3'><img className='g2' src={g5} /></p>
                    <p className='g3'><img className='g2' src={g3} /></p>
                </div>
                <div className='g1'>
                    <p className='g3'><img className='g2' src={g1} /></p>
                    <p className='g3'><img className='g2' src={g2} /></p>
                    <p className='g3'><img className='g2' src={g6} /></p>
                </div>
            </div>
            <br/>

            <p className='a1'>Videos</p>
            <p className='g4'style={{paddingLeft:'100px'}}><iframe width="560" height="315" src="https://www.youtube.com/embed/FvG7MyDsEjg?si=bw4moTJrEIqpEe2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
            <p className='g4'><iframe width="560" height="315" src="https://www.youtube.com/embed/JzyQzRACFnA?si=b1m7zKY0c555UKGL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
            <p className='g5'>&nbsp;&nbsp;&nbsp;What are the Benefits of Donating Blood ?</p>
            <p className='g5'>&nbsp;&nbsp;&nbsp;Does Donating Blood Burn Calories?</p>
            <br/>





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