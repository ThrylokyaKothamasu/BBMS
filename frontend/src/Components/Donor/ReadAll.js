import './StylesD.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import add from './../images/add.jpg';


export default function ReadAll() {





  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const [donors, setDonors] = useState([]);

  // Fetch all donors from the backend when the component mounts
  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = () => {
    axios.get('http://localhost:5000/api/donors')
      .then(response => {
        console.log('Fetched donors:', response.data);
        setDonors(response.data);
      })
      .catch(error => console.error('Error fetching donors:', error));
  };



  const [newDonor, setNewDonor] = useState({
    id: '',
    name: '',
    age: '',
    phone: '',
    bg: '',
    ml:'',
    gender: '',
    ddate: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchDonors();
  }, []);


  const handleAddDonor = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/donors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDonor),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Internal Server Error');
      }

      console.log('Donor added successfully');
      fetchDonors(); // Refresh the donors list
      setNewDonor({
        id: '',
        name: '',
        age: '',
        phone: '',
        bg: '',
        ml:'',
        gender: '',
        ddate: '',
      });       // Clear the input fields
      setSuccessMessage(`Thanks,Your donation will save lives ${newDonor.name} !.`); // Set the success message
      setErrorMessage(''); // Reset error message
    } catch (error) {
      console.error('Error adding donor:', error.message);
      setSuccessMessage(''); // Clear any existing success message
      setErrorMessage('Error adding donor: ' + error.message);
    }
  };



  const [fetchId, setFetchId] = useState('');
  const [fetchedDonor, setFetchedDonor] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [updateData, setUpdateData] = useState({
    id: '',
    name: '',
    age: '',
    phone: '',
    bg: '',
    ml: '',
    gender: '',
    ddate: ''
  });

  useEffect(() => {
    fetchDonors();
  }, []);



  
  const handleDeleteClick = (id) => {
    setDeleteId(id); // Store the ID to be deleted
    document.getElementById('deleteConfirmationModal').style.display = 'block'; // Display the confirmation modal
  };

  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const handleDeleteConfirmation = (confirmed) => {
    if (confirmed) {
      // If user confirms deletion
      fetch(`http://localhost:5000/api/donors/${deleteId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            console.log('Donor deleted successfully');
            fetchDonors(); // Refresh the donor list after deletion
            setDeleteSuccess(true); // Set the delete success state
          } else {
            console.error('Error deleting donor:', response.statusText);
          }
        })
        .catch((error) => console.error('Error deleting donor:', error));
    }
    // Close the modal regardless of user choice
    document.getElementById('deleteConfirmationModal').style.display = 'none';
    setDeleteId(null); // Reset the delete ID
  };

  useEffect(() => {
    if (deleteSuccess) {
      const timer = setTimeout(() => {
        setDeleteSuccess(false); // Reset the delete success state
      }, 30000); // 30 seconds
      return () => clearTimeout(timer);
    }
  }, [deleteSuccess]);





  const handleFetchData = () => {
    fetch(`http://localhost:5000/api/donors/${fetchId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched donor:', data);
        setFetchedDonor(data);
        setButtonClicked(true);
        setShowNoDataMessage(false);
      })
      .catch((error) => {
        console.error('Error fetching donor:', error);
        setFetchedDonor(null);
        setButtonClicked(true);
        setShowNoDataMessage(true);
      });
  };

  const handleUpdateClick = (data) => {
    // Set updateData to the clicked donor details
    setUpdateData({
      id: data[0],
      name: data[1],
      age: data[2],
      phone: data[3],
      bg: data[4],
      ml: data[5],
      gender: data[6],
      ddate: data[7]
    });
    // Open the update modal
    document.getElementById('updateModal').style.display = 'block';
  };


  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState('');


  const handleUpdate = () => {
    // Send the updated data to the server
    axios.put(`http://localhost:5000/api/donors/${updateData.id}`, updateData)
      .then((response) => {
        console.log('Update successful');
        // Refresh the donor list after update
        fetchDonors();
        // Show success message
        setUpdateSuccess(true);
        // Close the update modal
        document.getElementById('updateModal').style.display = 'none';
      })
      .catch((error) => {
        console.error('Error updating donor:', error);
        // Set the error message state
        setUpdateError('Error updating donor. Please try again.');
      });  };

  // Function to close success message after some time
  const closeSuccessMessage = () => {
    setUpdateSuccess(false);
  };

  // Use useEffect to close success message after 3 seconds
  useEffect(() => {
    if (updateSuccess) {
      const timer = setTimeout(() => {
        closeSuccessMessage();
      }, 30000); 
      return () => clearTimeout(timer);
    }
  }, [updateSuccess]);


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



      <h2 style={{ textAlign: 'center', padding: '15px' }}>Details of Donors</h2>
      <p className="hr-lines"></p><br />


      <div className='h12'>
        <h3>Get details of donor by Id</h3><br />
        <input
          type='text'
          placeholder='Enter ID...'
          value={fetchId}
          onChange={(e) => setFetchId(e.target.value)}
          style={{ height: "40px", width: "700px" ,padding:'20px'}}
        /><br /><br />
        <button className='button' onClick={handleFetchData}>Get</button><br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;
      
      </div>

      {fetchedDonor ? (
        <div className='h8 h9'>
          <h3 style={{ paddingLeft: '430px', fontSize: '20px',marginTop:'-30px'}}>Details for Donor ID: {fetchId}</h3><br />
          {Array.isArray(fetchedDonor) && fetchedDonor.length >= 1 ? (
            <table className='h10'>
              <tbody>
                {fetchedDonor.map((data, index) => (
                  <div className='row' key={index}>
                    <tr>
                      <th>ID</th>
                      <td className='h0'>{data[0]}</td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td className='h0'>{data[1]}</td>
                    </tr>
                    <tr>
                      <th>Age</th>
                      <td className='h0'>{data[2]}</td>
                    </tr>
                    <tr>
                      <th>Mobile Number</th>
                      <td className='h0'>{data[3]}</td>
                    </tr>
                    <tr>
                      <th>Blood Group</th>
                      <td className='h0'>{data[4]}</td>
                    </tr>
                    <tr>
                      <th>Units</th>
                      <td className='h0'>{data[5]}</td>
                    </tr>
                    <tr>
                      <th>Gender</th>
                      <td className='h0'>{data[6]}</td>
                    </tr>
                    <tr>
                      <th>Date</th>
                      <td className='h0'>{data[7]}</td>
                    </tr>
                    <br />
                    <button className="button h13" style={{ backgroundColor: 'blue', margin: '0 30px 0px 10px' }} onClick={() => handleUpdateClick(data)}>Update</button>
                    <button className="button h13" style={{ backgroundColor: '#de1f26' }} onClick={() => handleDeleteClick(data[0])}>Delete</button><br/>
                  </div>
                ))}
              </tbody>
            </table>
          ) :
            showNoDataMessage ? (
              <p className="no-data-message">No data available for the specified ID.<br/></p>
            ) : null}
        </div>
      ) : showNoDataMessage ? (
        <p style={{ textAlign: 'center', fontWeight: 'bold',marginBottom:'40px'}}>No data available for the specified ID.</p>
      ) : null}


        {updateSuccess && (
                <div className="success-message"> Data updated successfully and click on get to read updated data.</div>
              )}

        {updateError && (
            <div className="error-message">{updateError}</div>
          )}

        {deleteSuccess && (
                <div className="success-message"> Donor deleted successfully.</div>
              )}


      {/* Update Modal */}
      <div id="updateModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => document.getElementById('updateModal').style.display = 'none'}>&times;</span>
          <h3>&nbsp;Update Donor</h3>
          <input
            type="text"
            placeholder="ID"
            value={updateData.id} className='form-field-u'
            onChange={(e) => setUpdateData({ ...updateData, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Name"
            value={updateData.name}  className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Age"
            value={updateData.age} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, age: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone"
            value={updateData.phone} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Blood Group"
            value={updateData.bg} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, bg: e.target.value })}
          />
          <input
            type="text"
            placeholder="Units"
            value={updateData.ml} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, ml: e.target.value })}
          />
          <input
            type="text"
            placeholder="Gender" 
            value={updateData.gender} className='form-field-u'
            onChange={(e) => setUpdateData({ ...updateData, gender: e.target.value })}
          />
          <input
            type="date"
            placeholder="Date"
            value={updateData.ddate} className='form-field-u' 
            onChange={(e) => setUpdateData({ ...updateData, ddate: e.target.value })}
          /><br/>
          <button onClick={handleUpdate} className="button h13" style={{ backgroundColor: 'blue',margin:'10px',padding:'10px'}}>Save Changes</button>
        </div>
      </div>

      {/* Delete confirmation modal */}
      <div id="deleteConfirmationModal" className="modal">
        <div className="modal-content">
          <p style={{fontWeight:'bold'}}>Are you sure you want to delete this donor?</p>
          <div className="button-container">
            <button className="confirm-btn" onClick={() => handleDeleteConfirmation(true)}>Yes</button>
            <button className="cancel-btn" onClick={() => handleDeleteConfirmation(false)}>No</button>
          </div>
        </div>
      </div>


      {donors.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Mobile Number</th>
              <th>Blood Group</th>
              <th>Units</th>
              <th>Gender</th>
              <th>Donated Date</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((data, index) => (
              <tr className="row" key={index}>
                <td className='h0'>{data[0]}</td>
                <td className='h0'>{data[1]}</td>
                <td className='h0'>{data[2]}</td>
                <td className='h0'>{data[3]}</td>
                <td className='h0'>{data[4]}</td>
                <td className='h0'>{data[5]}</td>
                <td className='h0'>{data[6]}</td>
                <td className='h0'>{data[7]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      
      <br /><br/>
      
      <h2 style={{ textAlign: 'center', padding: '15px' }}>Include Donor</h2>
      <p className="hr-lines"></p><br />
    <div className="container2">
		
		<div class="content2">
			<div class="col-1">
      <img src={add} style={{width: "630px", height:"650px"}}></img>
			</div>
			<div class="col-2">
				<form>
					<div class="form-container">
          <div class="form-row">
						<label>Donor Id</label>
							<div>
								<input type="text" placeholder="Enter Donor Id...." class="form-field" value={newDonor.id}
                          onChange={(e) => setNewDonor({ ...newDonor, id: e.target.value })}/>
							</div>
						</div>
						<div class="form-row">
						<label>Donor Name</label>
							<div>
								<input type="text" placeholder="Enter Donor Name...." class="form-field" value={newDonor.name}
                          onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}/>
							</div>
						</div>
						<div class="form-row">
						<label>Donor Age</label>
							<div>
								<input type="text" placeholder="Enter Donor Age...." class="form-field" value={newDonor.age}
                          onChange={(e) => setNewDonor({ ...newDonor, age: e.target.value })}/>
							</div>
						</div>
						<div class="form-row">
					  <label>Mobile Number</label>
							<div>
								<input type="text" placeholder="Enter Mobile No...." class="form-field" value={newDonor.phone}
                          onChange={(e) => setNewDonor({ ...newDonor, phone: e.target.value })}/>
              </div>
						</div>
            <div class="form-row">
					  <label>Donor Blood Group</label>
							<div>
								<input type="text" placeholder="Enter Blood Group...." class="form-field" value={newDonor.bg}
                          onChange={(e) => setNewDonor({ ...newDonor, bg: e.target.value })}/>
              </div>
						</div>
            <div class="form-row">
					  <label>Units of Blood Donated</label>
							<div>
								<input type="text" placeholder="Enter Quantity of Blood Donated...." class="form-field" value={newDonor.ml}
                          onChange={(e) => setNewDonor({ ...newDonor, ml: e.target.value })}/>
              </div>
						</div>
            <div class="form-row">
					  <label>Gender</label>
							<div>
								<input type="text" placeholder="Enter Gender...." class="form-field" value={newDonor.gender}
                          onChange={(e) => setNewDonor({ ...newDonor, gender: e.target.value })}/>
              </div>
						</div>
            <div class="form-row">
					  <label>Donated Date</label>
							<div>
								<input type="date" placeholder="Select Donated Date...." class="form-field" style={{height: "40px",border:"1px solid #F0F1F8"}}
                value={newDonor.ddate}   onChange={(e) => setNewDonor({ ...newDonor, ddate: e.target.value })}/>
              </div>
						</div>
						<input type="button" class="send-btn" value="Add Donor" onClick={handleAddDonor}/>
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


      
      <br /><br /><br />

      <section className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Info</h4>
            <ul className="links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Donate</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="links">
              <li><a href="#">Free Designs</a></li>
              <li><a href="#">Latest Designs</a></li>
              <li><a href="#">Themes</a></li>
              <li><a href="#">Popular Designs</a></li>
              <li><a href="#">Art Skills</a></li>
              <li><a href="#">New Uploads</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="links">
              <li><a href="#">Customer Agreement</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">GDPR</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Media Kit</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for a weekly dose
              of news, updates, helpful tips, and
              exclusive offers.
            </p>
            <form action="#">
              <input type="text" placeholder="Your email" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div className="icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
