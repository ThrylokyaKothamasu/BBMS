import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; // Import Navigate
import './Stylesa.css';
import img from './../images/admin.jpg';

export default function Homea() {


  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function() {
      window.history.go(1);
  };
  





  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  return (
    <>
      <div className="nav">
        <div className="cc">
          <i id="aa" className="bi bi-envelope"></i>&nbsp;&nbsp;bloodbank@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <i id="bb" className="bi bi-clock"></i>Service time : 12.00 AM
          <i id="cc" className="bi bi-telephone"></i>&nbsp;&nbsp;+91 08011457337&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <i id="bb" className="bi bi-person"></i><Link to='/Signin' style={{color:'white',textDecoration:'none'}}>Sign Out</Link>
        </div>
      </div>

      <div className="navbar">
        <img className="ee" src="https://capstoneguide.com/wp-content/uploads/2020/09/Blood-Bank-Management-System.jpg" alt=""></img>
        <p className="ff">Blood Bank Management System</p>   
      </div>

      <div class="topnav" id="myTopnav">
                <Link to="/ReadAll" style={{padding:'15px 80px 0 550px'}}>Donor</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/ReadAllr" style={{paddingRight:'80px'}}>Receiver</Link>
                <Link to='/Signin'>Signout</Link>
                
                <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="iconh" onClick={myFunction}>&#9776;</a>
      </div>
      
      <br/><br/>
     <br/>

      <img className="h1" src={img} style={{width: '550px', height:'550px'}}></img>

      <div className="h2">
          <br/><br/><br/>
          <p className='h3'>Give blood, preserve life.</p>
          <p className='h4'>Donate your blood for a reason, let the reason to be life.<br/>Donating blood is a positive, selfless act that saves lives and <br/>ensures a stable blood supply for medical needs. The impact is <br/>immediate and gratifying, making it a simple yet powerful <br/>way to contribute to your community's well-being.</p>
          <button className='ad1' style={{marginLeft:'180px'}}><Link to='/ReadAll'>Donors</Link></button>
          <button className='ad1' style={{marginLeft:'-40px'}}><Link to='/ReadAllr'>Receivers</Link></button>
      </div>


    
      


    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

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
}
