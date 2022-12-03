import React, { useEffect, useState } from 'react';
import { faSearch, faArrowLeft, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
// import './addstudentdetails.css';

import { Link,useParams } from 'react-router-dom';
import axios from 'axios';

export function Editstudentdetails(){

    const {id} = useParams();

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [dob,setDob] = useState('');
    const [education,setEducation] = useState('');
    const [location,setLocation] = useState('');
    const [about,setAbout] = useState('');

    useEffect(()=>{

    fetch("http://localhost:3002/Update/"+id+"")
    .then(response => response.json())
    .then(function(res){
        setFirstname(res[0].firstname);
        setLastname(res[0].lastname);
        setEmail(res[0].email);
        setDob(res[0].dob);
        setEducation(res[0].education);
        setLocation(res[0].location);
        setAbout(res[0].about);
    })
    .catch(function(error){
        alert(error);
        window.location.href="/";
    })

    },[])

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};
        
        await axios.put('http://localhost:3002/updatedata/'+id+'',datastring,config)
                  .then(function(res){
                    if(res.data.status === 'error'){
                        alert('error');
                        window.location.href="/";
                    }
                    else if(res.data.status === 'Success'){
                        alert('Updated');
                        window.location.href="/";
                    }
                  })
                  .catch(function(err){
                    alert(err);
                    window.location.href="/";
                  })
    }

    return(
    <div>
        <div className="container">
            <div className="row mt-2">
                <div className="col-lg-12">
                    <p className="text-center">Student Management System</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3">
                    <p className="text-left">Edit Student Details</p>
                </div>
                <div className="col-lg-7">&nbsp;</div>
                <div className="col-lg-2">
                    <Link to='/'>
                    <button type="button" name="data_back" id="data_back" value="back" className="btn btn-danger">
                    Go Back
                    </button>
                    </Link>
                </div>
            </div>
            <form onSubmit={handlesubmit}>
            <div className="row mt-5">
                <div className="col-lg-2">
                    <label>First Name</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="firstname" id="firstname" className="form-control"
                    value={firstname} onChange={(val)=>setFirstname(val.target.value) } />
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <label>Last Name</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="lastname" id="lastname" className="form-control"
                    value={lastname} onChange={(val)=>setLastname(val.target.value)} />
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-lg-2">
                    <label>Email</label>
                </div>
                <div className="col-lg-3">
                    <input type="email" name="email" id="email" className="form-control"
                    value={email} onChange={(val)=>setEmail(val.target.value)} />
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <label>DOB</label>
                </div>
                <div className="col-lg-3">
                    <input type="date" name="dob" id="dob" className="form-control"
                    value={dob} onChange={(val)=>setDob(val.target.value)} />
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-lg-2">
                    <label>Education</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="education" id="education" className="form-control" 
                    value={education} onChange={(val)=>setEducation(val.target.value)} />
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <label>Location</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="location" id="location" className="form-control"
                    value={location} onChange={(val)=>setLocation(val.target.value)} />
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-lg-2">
                    <label>About</label>
                </div>
                <div className="col-lg-10">
                    <textarea name="about" id="about" className="form-control"
                    value={about} onChange={(val)=>setAbout(val.target.value)} ></textarea>
                </div>
            </div>
            <div className="row mt-2 mb-3">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary">
                    Update
                </button>
                </div>
            </div>
            </form>
        </div>
           </div>
    )
}