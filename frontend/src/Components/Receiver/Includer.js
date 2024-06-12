import React, { useState, useEffect } from 'react';
import add from './../images/addr.jpg';
import './../Sign up-in/Sign.css';
import { Link } from 'react-router-dom';


export default function Includer() {


  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  const [receiver, setreceiver] = useState([]);
  const [Newreceiver, setNewreceiver] = useState({
    id: '',
    name: '',
    age: '',
    phone: '',
    bg: '',
    ml:'',
    gender: '',
    ddate: '',
    hospital:'',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchreceiver();
  }, []);

  const fetchreceiver = () => {
    fetch('http://localhost:5000/api/receiver')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched receiver:', data);
        setreceiver(data);
      })
      .catch((error) => console.error('Error fetching receiver:', error));
  };

  const handleAddReceiver = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/receiver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Newreceiver),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Internal Server Error');
      }

      console.log('Donor added successfully');
      fetchreceiver(); // Refresh the receiver list
      setNewreceiver({
        id: '',
        name: '',
        age: '',
        phone: '',
        bg: '',
        ml:'',
        gender: '',
        ddate: '',
        hospital:'',
      });       // Clear the input fields
      setSuccessMessage(`Data Recorded Successfully ${Newreceiver.name} !.`); // Set the success message
      setErrorMessage(''); // Reset error message
    } catch (error) {
      console.error('Error adding receiver:', error.message);
      setSuccessMessage(''); // Clear any existing success message
      setErrorMessage('Error adding receiver: ' + error.message);
    }
  };

  return (
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



      <p style={{ textAlign: 'center', fontSize: '25px', padding: '20px', fontWeight: 'bold' }}>Include Receiver Details</p>
      <p className='hr-lines'></p><br/>
      
	<div className="container2">
		
		<div class="content2">
			<div class="col-1">
      <img src={add} style={{width: "630px", height:"650px"}}></img>
			</div>
			<div class="col-2">
				<form>
					<div class="form-container">
          <div class="form-row">
						<label>Receiver Id</label>
							<div>
								<input type="text" placeholder="Enter Receiver Id...." class="form-field" value={Newreceiver.id}
                          onChange={(e) => setNewreceiver({ ...Newreceiver, id: e.target.value })}/>
							</div>
						</div>
						<div class="form-row">
						<label>Receiver Name</label>
							<div>
								<input type="text" placeholder="Enter Receiver Name...." class="form-field" value={Newreceiver.name}
                          onChange={(e) => setNewreceiver({ ...Newreceiver, name: e.target.value })}/>
							</div>
						</div>
						<div class="form-row">
						<label>Receiver Age</label>
							<div>
								<input type="text" placeholder="Enter Receiver Age...." class="form-field" value={Newreceiver.age}
                          onChange={(e) => setNewreceiver({ ...Newreceiver, age: e.target.value })}/>
							</div>
						</div>
						<div class="form-row">
					  <label>Mobile Number</label>
							<div>
								<input type="text" placeholder="Enter Mobile No...." class="form-field" value={Newreceiver.phone}
                          onChange={(e) => setNewreceiver({ ...Newreceiver, phone: e.target.value })}/>
              </div>
						</div>
            <div class="form-row">
					  <label>Receiver Blood Group</label>
							<div>
								<input type="text" placeholder="Enter Blood Group...." class="form-field" value={Newreceiver.bg}
                          onChange={(e) => setNewreceiver({ ...Newreceiver, bg: e.target.value })}/>
              </div>
						</div>
            <div class="form-row">
					  <label>Units of Blood Received</label>
							<div>
								<input type="text" placeholder="Enter Quantity of Blood Received...." class="form-field" value={Newreceiver.ml}
                          onChange={(e) => setNewreceiver({ ...Newreceiver, ml: e.target.value })}/>
              </div>
						</div>
            <div class="form-row">
					  <label>Gender</label>
							<div>
								<input type="text" placeholder="Enter Gender...." class="form-field" value={Newreceiver.gender}
                          onChange={(e) => setNewreceiver({ ...Newreceiver, gender: e.target.value })}/>
              </div>
						</div>
            <div class="form-row">
					  <label>Received Date</label>
							<div>
								<input type="date" placeholder="Select Received Date...." class="form-field" style={{height: "40px",border:"1px solid #F0F1F8"}}
                value={Newreceiver.ddate}   onChange={(e) => setNewreceiver({ ...Newreceiver, ddate: e.target.value })}/>
              </div>
						</div>
                        <div class="form-row">
					  <label>Receiver Hospital Details</label>
							<div>
								<input type="text" placeholder="Enter Receiver Hospital Details...." class="form-field" style={{height: "40px",border:"1px solid #F0F1F8"}}
                value={Newreceiver.hospital}   onChange={(e) => setNewreceiver({ ...Newreceiver, hospital: e.target.value })}/>
              </div>
						</div>
						<input type="button" class="send-btn" value="Add Receiver" onClick={handleAddReceiver}/>
					</div>
            <br/>
          {successMessage && (
            <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>{successMessage} <i class="fa-solid fa-heart" style={{color:'red'}}></i></p>
          )}
          {errorMessage && <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</p>}

				</form><br/><br/>
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
}