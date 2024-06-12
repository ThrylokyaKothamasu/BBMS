import './Styles.css';
import { Link } from 'react-router-dom';
import about from './images/about.jpg';
import bs from './images/bs.jpg';

export default function About(){

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






            <h3 className='a1'>About Us</h3>
            <p className="hr-lines"></p><br/>

            <p className='a8 a3'><p>Blood donation is a vital part of worldwide healthcare.It relates</p><p>to blood transfusion as a life-sustaining and life-saving procedure</p><p>as well as a form of therapeutic phlebotomy as a primary medical </p><p>intervention.Over one hundred million units of blood are donated </p>each year throughout the world.<br/>
                        <br/><p>Any healthy adult, both male and female, can donate blood. Men can</p><p>donate safely once in every three months while women can donate every</p><p>four months. Donor should be in the age group of 18 to 65 years.</p>Donor should be in the age group of 18 to 65 years.<br/>
                        <br/><p>It contributes to saving millions of lives each year in both routine </p> <p>and emergency situations, permits increasingly complex medical and </p> <p>surgical interventions and dramatically improves the life expectancy </p><p>and quality of life of patients with a variety of acute and chronic</p> conditions.<br/>
                        <br/><p>Regular blood donation is linked to lower blood pressure and a lower</p><p>risk for heart attacks. “It definitely helps to reduce cardiovascular</p> risk factors,” says DeSimone.</p>

            <img className='a3' src={about} style={{width:'550px',height:'380px'}}></img>

            <br/><br/>


            <img className='a3' src={bs} style={{width:'550px',height:'380px',float:'left'}}></img>
            <br/>
            <p className='a3 a7'>Why Should You Donate Blood?</p>
            <p className='a2 a3'><p>&nbsp;&nbsp;&nbsp;&nbsp;Everyday, there are many emergency cases or other treatments that require </p><p>blood. But unfortunately, the requirement of blood is exponentially more than its</p><p>&nbsp;&nbsp;supply. This, at times, leads to loss of life. An act of kindness and selfless</p><p>&nbsp;&nbsp;&nbsp;&nbsp;service of donating blood can make a big difference and save and prolong </p><p style={{paddingLeft:'350px'}}>someone’s life</p></p>

            <br/><br/><br/>
           
            <br/>
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