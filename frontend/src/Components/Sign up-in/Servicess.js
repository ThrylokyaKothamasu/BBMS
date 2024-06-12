import './../Styles.css';
import { Link } from 'react-router-dom';
import p1 from './../images/blog/blog_01.jpg';
import p2 from './../images/blog/blog_02.jpg';
import p3 from './../images/blog/blog_03.jpg';
import p4 from './../images/blog/blog_04.jpg';
import p5 from './../images/blog/blog_05.jpg';
import p6 from './../images/blog/blog_06.jpg';
import p7 from './../images/blog/blog_07.jpg';
import p8 from './../images/blog/blog_08.jpg';

export default function Servicess(){


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








        <br/><br/>
        <p style={{fontWeight:'bold',fontSize:'30px',textAlign:'center'}}>Services</p><br/>
        <p className="hr-lines"></p><br/><br/>
            <div className='s1'>
                <div className="card s7" style={{marginLeft:'135px'}}>
                    <img  className='s3' src={p5} alt=''/>
                    <div className="container">
                        <h4 className='b16'><b>Blood Storage</b></h4> <br/>
                        <p className='s6'>We store the safest blood of all blood groups which you can use for any kind of treatments or in an emergency.</p><br/>
                    </div>
                </div>
                <div className="card s7">
                    <img className='s3' src={p6} alt=''/>
                    <div className="container">
                        <h4 className='b16'><b>Blood Donation</b></h4><br/> 
                        <p className='s6'>Donation of blood is service that we do for mankind! We allow you to save life by donating blood to the ones who need it.</p>
                    </div>
                </div>
                <div className="card s7">
                    <img className='s3' src={p7} alt=''/>
                    <div className="container">
                        <h4 className='b16'><b>Provision of Red Blood</b></h4><br/> 
                        <p className='s6'>We provide red blood cells to address low counts and ensure effective treatment for various medical conditions.</p><br/>
                    </div>
                </div>
                <div className="card s7">
                    <img className='s3' src={p8} alt=''/>
                    <div className="container">
                        <h4 className='b16'><b>Provision of platelets</b></h4><br/> 
                        <p className='s6'>We provide vital platelets to prevent excessive bleeding during injuries and maintain optimal blood clotting.</p>
                    </div>
                </div>
            </div>

        <br/><br/>
        
         <p style={{fontWeight:'bold',fontSize:'30px',textAlign:'center'}}>Donation Process</p><br/>

            <div className='s1'>
                <div className="card s7" style={{marginLeft:'135px'}}>
                    <img  className='s3' src={p1} alt=''/>
                    <div className="container">
                        <h4 className='b16'><b>1-Registration</b></h4> <br/>
                        <p className='s6'>When you arrive at a blood donation center or a mobile blood drive, you will need to provide some basic information about yourself, such as your name, address, and contact information. You may also be asked to show identification.</p><br/>
                    </div>
                </div>
                <div className="card s7">
                    <img className='s3' src={p2} alt=''/>
                    <div className="container">
                        <h4 className='b16'><b>2-Donation</b></h4><br/> 
                        <p className='s6'>After Registration, donors move to collection area where a needle draws blood from a vein in about 8-10 minutes. The amount collected varies based on donation type (whole blood, platelets), concluding the process.</p>
                    </div>
                </div>
                <div className="card s7">
                    <img className='s3' src={p3} alt=''/>
                    <div className="container">
                        <h4 className='b16'><b>3-Rest and Refreshment</b></h4><br/> 
                        <p className='s6'>After the donation, you will be given some time to rest and recover. It's essential to take a few minutes to relax and have a snack or drink provided by the donation center. This helps prevent dizziness or fainting.<br/></p><br/>
                    </div>
                </div>
                <div className="card s7">
                    <img className='s3' src={p4} alt=''/>
                    <div className="container">
                        <h4 className='b16'><b>4-Record Keeping</b></h4><br/> 
                        <p className='s6'>Your donation details will be recorded and stored in database.This information includes the type of donation,the amount of blood collected and date of donation.This data optimizes blood donation system management.</p>
                    </div>
                </div>
            </div>  <br/>  









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