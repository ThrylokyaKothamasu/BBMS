import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link, Navigate } from 'react-router-dom'; // Import Navigate
import s from './../images/signin.jpg';

export default function Adminlogin() {


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

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    p: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginDetails.email,
          p: loginDetails.p,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Internal Server Error');
      }

      console.log('Login successful');
      window.location.href = '/Homea';
      // Set the state to redirect
    } catch (error) {
      console.error('Error logging in:', error.message);
      setErrorMessage('Invalid email or password');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
      <div className="nav" style={{paddingTop:'12px'}}>
        <div className="cc">
          <i id="aa" className="bi bi-envelope"></i>&nbsp;&nbsp;bloodbank@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <i id="bb" className="bi bi-clock"></i>Service time : 12.00 AM
          <i id="cc" className="bi bi-telephone"></i>&nbsp;&nbsp;+91 08011457337&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <i id="bb" className="bi bi-person"></i><div class="dropdowns"><button class="dropbtns">Login <i class="fa fa-caret-down" style={{color:'white'}}></i></button>
                    <div class="dropdown-contents">
                        <Link to="/Signin">login</Link>
                        <Link to="/Adminlogin">Admin login</Link>
                    </div>
                </div> 
        </div>
      </div>

      <div className="navbar">
        <img className="ee" src="https://capstoneguide.com/wp-content/uploads/2020/09/Blood-Bank-Management-System.jpg" alt=""></img>
        <p className="ff">Blood Bank Management System</p>   
      </div>

      <div className="topnav" id="myTopnav">
        <Link to='/Homes' className='g' style={{paddingLeft:'100px'}}>Home</Link>
        <Link to='/Abouts'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/Servicess'>Services</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/Contacts'>Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/Gallerys'>Gallery</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/Signup'>Sign Up</Link>    
        <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="iconh" onClick={myFunction}>&#9776;</a>
       
      </div>

      <br/><br/>
      <h3 className='su2'>Admin Login</h3>  <br/>
      <p className="hr-line"></p>

      <div className='contain1 su1' style={{ margin: '50px 20px 300px 150px' }}>
        <div className='content1'>
          <div className="right-side1">
            <form onSubmit={handleLogin}>
              {errorMessage && <p style={{ color: 'red',fontWeight:'bold' }}>{errorMessage}<br/></p>}
              <div className="input-box1" style={{ height: "35px", width: "420px" }}>
                <i className="fa-solid fa-envelope" style={{ color: "#de1f26" }}></i>
                <input type="text" placeholder="Enter email" name="email" value={loginDetails.email} onChange={handleInputChange} />
              </div>
              <div className="input-box1" style={{ height: "35px", width: "420px" }}>
                <i className="fa-solid fa-lock" style={{ color: "#de1f26" }}></i>
                <input type="password" placeholder="Enter password" name="p" value={loginDetails.p} onChange={handleInputChange} />
              </div>
              <div className="button1">
                <input type="submit" value="Sign in" />
              </div><br /><br />
            </form>
          </div>
        </div>
      </div>
      <img src={s} style={{ height: '450px', width: '730px', float: 'right', margin: '-600px 100px 20px 0' }} className='su1' alt="signin" />


      

     

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
