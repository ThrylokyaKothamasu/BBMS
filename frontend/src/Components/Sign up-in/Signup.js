import './Sign.css';
import React, { useState, useEffect } from 'react';
import s from './../images/signup.jpg';
import { Link } from 'react-router-dom';


export default function Signup(){

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const [Signup, setSignup] = useState([]);
  const [newSignup, setNewSignup] = useState({
    name: '',
    phone: '',
    email:'',
    p:'',
    cp:'',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchSignup();
  }, []);

  const fetchSignup = () => {
    fetch('http://localhost:5000/api/signup')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched signup:', data);
        setSignup(data);
      })
      .catch((error) => console.error('Error fetching signup:', error));
  };

  const handleAddSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSignup),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Internal Server Error');
      }

      console.log('User signup successfully');
      fetchSignup(); // Refresh the signup list
      setNewSignup({
        name: '',
        phone: '',
        email:'',
        p:'',
        cp:'',
      });       // Clear the input fields
      setSuccessMessage(`You Registered Successfully ${newSignup.name} !.`); // Set the success message
      setErrorMessage(''); // Reset error message
    } catch (error) {
      console.error('Error:', error.message);
      setSuccessMessage(''); // Clear any existing success message
      setErrorMessage('Error: ' + error.message);
    }
  };

    return(
        <>
            <div className="nav" style={{paddingTop:'12px'}}>
            <div className="cc">
                
                <i id="aa" class="bi bi-envelope"></i>&nbsp;&nbsp;bloodbank@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <i id="bb" class="bi bi-clock"></i>Service time : 12.00 AM

                <i id="cc" class="bi bi-telephone"></i>&nbsp;&nbsp;+91 08011457337&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <i id="bb" class="bi bi-person"></i><div class="dropdowns"><button class="dropbtns">Login <i class="fa fa-caret-down" style={{color:'white'}}></i></button>
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
                <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="iconh" onClick={myFunction}>&#9776;</a>
           
            </div>
        <br/><br/>

        <h3 className='su2'>Sign Up</h3>  <br/>
        <p className="hr-line"></p>

       
        <div className='contain1 su1'>
            <div className='content1'>
                <div class="right-side1">
                <form action="#">
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-user" style={{color:"#de1f26"}}></i>
                    <input type="text" placeholder="Enter your name"   value={newSignup.name}
                    onChange={(e) => setNewSignup({ ...newSignup, name: e.target.value })}/>
                    </div>
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-phone" style={{color:"#de1f26"}}></i>
                    <input type="text" placeholder="Enter your mobile no"  value={newSignup.phone}
                    onChange={(e) => setNewSignup({ ...newSignup, phone: e.target.value })}/>
                    </div>
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-envelope" style={{color:"#de1f26"}}></i>
                    <input type="text" placeholder="Enter your email" value={newSignup.email}
                    onChange={(e) => setNewSignup({ ...newSignup, email: e.target.value })}/>
                    </div>
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-lock" style={{color:"#de1f26"}}></i>
                    <input type="password" placeholder="Enter your password"   value={newSignup.p}
                    onChange={(e) => setNewSignup({ ...newSignup, p: e.target.value })}/>
                    </div>
                    <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-lock" style={{color:"#de1f26"}}></i>
                    <input type="password" placeholder="Re-enter your password" value={newSignup.cp}
                    onChange={(e) => setNewSignup({ ...newSignup, cp: e.target.value })}/>
                    </div>
                    <div class="button1">
                    <input type="button" value="Sign Up" onClick={handleAddSignup}/>
                    </div><br/><br/><br/>
                    {successMessage && (
                        <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>{successMessage} <i class="fa-solid fa-thumbs-up fa-xl" style={{color:'#151647'}}></i></p>
                    )}
                    {errorMessage && <p style={{ color: 'red' , fontWeight:'bold'}}>{errorMessage}</p>}
                </form>
                </div>
             </div>
             <p style={{padding:"10px 10px 10px 70px"}}>If you have an account <Link to='/Signin'>SignIn</Link></p>
        </div>
        <img src={s} style={{height:'500px',width:'500px',float:'right',margin:'-450px 100px 20px 0'}} className='su1'></img>

        <br/><br/><br/><br/>
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