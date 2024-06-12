import './Styles.css';
import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';import About from './About';
import Services from './Services';
import Contact from './Contact';
import Gallery from './Gallery';
import HomeD from'./Donor/HomeD';
import Include from './Donor/Include';
import Read from './Donor/Read';
import ReadAll from './Donor/ReadAll';
import Signup from './Sign up-in/Signup';
import Signin from './Sign up-in/Signin';

export default function Navbar(){
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
                <i id="bb" class="bi bi-person"></i>Login

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
                <div class="dropdown">
                    <button class="dropbtn">Donors <i class="fa fa-caret-down" style={{color:'white'}}></i></button>
                    <div class="dropdown-content">
                        <Link to="/Include">Include Donor</Link>
                        <Link to="/Read">Access Donor</Link>
                    </div>
                </div> 
                <div class="dropdown">
                    <button class="dropbtn">Receivers <i class="fa fa-caret-down" style={{color:'white'}}></i></button>
                    <div class="dropdown-content">
                        <Link to="/Add">Include Receiver</Link>
                        <Link to="/Read">Access Receiver</Link>
                    </div>
                </div>
                <Link to='/Signup'>Login</Link>
                
                <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="icon" onClick={myFunction}>&#9776;</a>
            </div>
                        


        <Routes>        
            <Route exact path='/Home' element={<Home />}></Route>
            <Route exact path='/About' element={<About />}></Route>
            <Route exact path='/Services' element={<Services />}></Route>
            <Route exact path='/Contact' element={<Contact />}></Route>
            <Route exact path='/Gallery' element={<Gallery />}></Route>
            <Route exact path='/Signup' element={<Signup />}></Route>
            <Route exact path='/Signin' element={<Signin />}></Route>
            <Route exact path='/HomeD' element={<HomeD />}></Route>
            <Route exact path='/Include' element={<Include/>}></Route>
            <Route exact path='/Read' element={<Read />}></Route>
            <Route exact path='/ReadAll' element={<ReadAll />}></Route>
        </Routes>

        

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