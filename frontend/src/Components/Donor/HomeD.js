import React from 'react';
import './StylesD.css'; 
import { Link } from 'react-router-dom';
import img from '../images/blog/blog_01.jpg';

export default function HomeD(){
    return(
        <>
            <img className="h1" src={img} style={{width: '550px', height:'550px'}}></img>

            <div className="h2">
                <p className='h3'>Give blood, preserve life.</p>
                <p className='h4'>Donate your blood for a reason, let the reason to be life.<br/>Donating blood is a positive, selfless act that saves lives and <br/>ensures a stable blood supply for medical needs. The impact is <br/>immediate and gratifying, making it a simple yet powerful <br/>way to contribute to your community's well-being.</p>
                <p><p className='h5'><Link to='/Add'>Include Donor</Link></p>&nbsp;&nbsp;&nbsp;&nbsp;<p className='h5'><Link to='/Read'>Access Donor</Link></p></p>
            </div>

            
        </>
    )
}