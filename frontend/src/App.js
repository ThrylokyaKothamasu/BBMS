import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Components/Sign up-in/Signin';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Include from './Components/Donor/Include';
import Read from './Components/Donor/Read';
import ReadAll from './Components/Donor/ReadAll';
import Signup from './Components/Sign up-in/Signup';
import Includer from './Components/Receiver/Includer';
import Readr from './Components/Receiver/Readr';
import ReadAllr from './Components/Receiver/ReadAllr';




import Homes from './Components/Sign up-in/Homes';
import Abouts from './Components/Sign up-in/Abouts';
import Servicess from './Components/Sign up-in/Servicess';
import Contacts from './Components/Sign up-in/Contacts';
import Gallerys from './Components/Sign up-in/Gallerys';



import Adminlogin from './Components/Admin/Adminlogin';
import Homea from './Components/Admin/Homea';
import HomeD from './Components/Donor/HomeD';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Navbar/*" element={<Navbar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Include" element={<Include />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/ReadAll" element={<ReadAll />} />
        <Route path="/Includer" element={<Includer />} />
        <Route path="/Readr" element={<Readr />} />
        <Route path="/ReadAllr" element={<ReadAllr />} />




        <Route path="/Homes" element={<Homes />} />
        <Route path="/Abouts" element={<Abouts />} />
        <Route path="/Servicess" element={<Servicess />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Gallerys" element={<Gallerys />} />



        <Route path="/Adminlogin" element={<Adminlogin/>}/>
        <Route path="/Homea" element={<Homea />} />
        <Route path="/HomeD" element={<HomeD />} />



      </Routes>
    </Router>
  );
}

export default App;
