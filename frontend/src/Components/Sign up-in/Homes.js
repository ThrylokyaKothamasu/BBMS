import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './../Styles.css'; // Make sure to create this CSS file
import slide1 from './../images/slider/slide-01.jpg';
import slide2 from './../images/slider/slide-02.jpg';
import g2 from './../images/gallery/g2.jpg';


const Homes = () => {


 
  const slidesRef = useRef(null);
  let slideIndex = 0;

  useEffect(() => {
    const slides = slidesRef.current;
    
    function showSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.children.length;
      showSlide(slideIndex);
    }

    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds  

    return () => clearInterval(intervalId);
  }, []);
  return (
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
                <Link  to='/Homes' className='g' style={{paddingLeft:'100px'}}>Home</Link>
                <Link  to='/Abouts'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to='/Servicess'>Services</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to='/Contacts'>Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link  to='/Gallerys'>Gallery</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                
                <Link to='/Signup'>Sign Up</Link>
            </div>




    
            <div className="slider">
      <div className="slides" ref={slidesRef}>
        <div className="slide">
          <img src={slide1} alt="Slide 1" />
          <div className="text">
            <p className='oo'>Donate blood & Save a Life</p>
            <p className='pp'>Your blood is a guiding star, a lifeline that brightens someone's darkest hour.<br/> By giving the gift of hope through blood donation, <br/>you become a source of strength and courage for those in need.</p>
            <p><span className='rr'>Donate Now</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='rr'>Contact Us</span></p>
          </div>
        </div>
        <div className="slide">
          <img src={slide2} alt="Slide 2" />
          <div className="text">
            <p className='oo'>Donate blood & Save a Life</p>
            <p className='pp'>Blood donation is a selfless act that has the power<br/> to save lives and bring hope to the ones in despair.</p>
            <p><span className='rr'>Donate Now</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='rr'>Contact Us</span></p>
          </div>
        </div>
        <div className="slide">
          <img src={g2} alt="Slide 3" />
          <div className="text">
            <p className='oo'>Donate blood & Save a Life</p>
            <p className='pp'>A small act with a big impact. Your generosity can minimize suffering, <br/>bringing comfort and healing to those in need. Be a beacon of compassion, <br/>making a significant difference one drop at a time.</p>
            <p><span className='rr'>Donate Now</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='rr'>Contact Us</span></p>
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
  );
};

export default Homes;
