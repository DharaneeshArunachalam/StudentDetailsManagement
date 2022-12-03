import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function Add(){

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};
        
        /*
        datastring.forEach(function(value,index){
            console.log(index+'-'+value);
        })
        */

        
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var dob = document.getElementById('dob').value;
        var education = document.getElementById('education').value;
        var location = document.getElementById('location').value;
        var teststring = /^[A-Za-z]{10}$/;

        // if(firstname === '' || firstname === null){
        //     alert('enter firstname');
        // }
        // else if(!teststring.test(firstname)){
        //     alert('enter firstname as pattern within 10 digit');
        //     document.getElementById('firstname').value = '';
        // }
        // else if(lastname === '' || lastname === null){
        //     alert('enter lastname');
        // }
        // else{

            await axios.post('http://localhost:3002/Add',datastring,config)
                  .then(function(res){
                    if(res.data.status === 'error'){
                        alert('error');
                        window.location.reload();
                    }
                    else if(res.data.status === 'Success'){
                        alert('Inserted');
                        window.location.reload();
                    }
                  })
                  .catch(function(err){
                    alert(err);
                    window.location.reload();
                  })

        //}
        
    }

    return(
        <>
        <div className="container">
            <div className="row mt-2">
                <div className="col-lg-12">
                    <p className="text-center">Student Management System</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3">
                    <p className="text-left">Add Student Details</p>
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
                    <input type="text" name="firstname" id="firstname" className="form-control"/>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <label>Last Name</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="lastname" id="lastname" className="form-control"/>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-lg-2">
                    <label>Email</label>
                </div>
                <div className="col-lg-3">
                    <input type="email" name="email" id="email" className="form-control"/>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <label>DOB</label>
                </div>
                <div className="col-lg-3">
                    <input type="date" name="dob" id="dob" className="form-control"/>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-lg-2">
                    <label>Education</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="education" id="education" className="form-control"/>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <label>Location</label>
                </div>
                <div className="col-lg-3">
                    <input type="text" name="location" id="location" className="form-control"/>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-lg-2">
                    <label>About</label>
                </div>
                <div className="col-lg-10">
                    <textarea name="about" id="about" className="form-control"></textarea>
                </div>
            </div>
            <div className="row mt-2 mb-3">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary">
                    Add
                </button>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}






















// import {Link} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';


// export  function Addstudentdetails(){

//     const handlesubmit = async(event) => {
//         event.preventDefault();
//         var datastring = new FormData(event.target);
//         var config = {headers:{"enctype":"multipart/form-data"}};
        
//         /*
//         datastring.forEach(function(value,index){
//             console.log(index+'-'+value);
//         })
//         */

        
//         var firstname = document.getElementById("firstname").value;
//         var lastname = document.getElementById("lastname").value;
//         var email = document.getElementById("email").value;
//         var dob = document.getElementById('dob').value;
//         var education = document.getElementById('education').value;
//         var location = document.getElementById('location').value;
//         var teststring = /^[A-Za-z]{4,10}$/;

//         if(firstname === '' || firstname === null){
//             alert('enter firstname');
//         }
//         else if(!teststring.test(firstname)){
//             alert('enter firstname as pattern within 10 digit');
//             document.getElementById('firstname').value = '';
//         }
//         else if(lastname === '' || lastname === null){
//             alert('enter lastname');
//         }
//         else{

//             await axios.post('http://localhost:3002/Addstudentdetails',datastring,config)
//                   .then(function(res){
//                     if(res.data.status === 'error'){
//                         alert('error');
//                         window.location.reload();
//                     }
//                     else if(res.data.status === 'Success'){
//                         alert('Inserted');
//                         window.location.reload();
//                     }
//                   })
//                   .catch(function(err){
//                     alert(err);
//                     window.location.reload();
//                   })

        
        
//     }

//     return(
//         <>
//         <div className="container">
//             <div className="row mt-2">
//                 <div className="col-lg-12">
//                     <p className="text-center">Student Management System</p>
//                 </div>
//             </div>
//             <div className="row mt-3">
//                 <div className="col-lg-3">
//                     <p className="text-left">Add Student Details</p>
//                 </div>
//                 <div className="col-lg-7">&nbsp;</div>
//                 <div className="col-lg-2">
//                     <Link to="/">
//                     <button type="button" name="data_back" id="data_back" value="back" className="btn btn-danger">
//                     Go Back
//                     </button>
//                     </Link>
//                 </div>
//             </div>
//             <form onSubmit={handlesubmit}>
//             <div className="row mt-5">
//                 <div className="col-lg-2">
//                     <label>First Name</label>
//                 </div>
//                 <div className="col-lg-3">
//                     <input type="text" name="firstName" id="firstname" className="form-control"/>
//                 </div>
//                 <div className="col-lg-2">&nbsp;</div>
//                 <div className="col-lg-2">
//                     <label>Last Name</label>
//                 </div>
//                 <div className="col-lg-3">
//                     <input type="text" name="lastName" id="lastname" className="form-control"/>
//                 </div>
//             </div>
//             <div className="row mt-1">
//                 <div className="col-lg-2">
//                     <label>Email</label>
//                 </div>
//                 <div className="col-lg-3">
//                     <input type="email" name="email" id="email" className="form-control"/>
//                 </div>
//                 <div className="col-lg-2">&nbsp;</div>
//                 <div className="col-lg-2">
//                     <label>DOB</label>
//                 </div>
//                 <div className="col-lg-3">
//                     <input type="date" name="dob" id="dob" className="form-control"/>
//                 </div>
//             </div>
//             <div className="row mt-1">
//                 <div className="col-lg-2">
//                     <label>Education</label>
//                 </div>
//                 <div className="col-lg-3">
//                     <input type="text" name="education" id="education" className="form-control"/>
//                 </div>
//                 <div className="col-lg-2">&nbsp;</div>
//                 <div className="col-lg-2">
//                     <label>Location</label>
//                 </div>
//                 <div className="col-lg-3">
//                     <input type="text" name="location" id="location" className="form-control"/>
//                 </div>
//             </div>
//             <div className="row mt-1">
//                 <div className="col-lg-2">
//                     <label>About</label>
//                 </div>
//                 <div className="col-lg-10">
//                     <textarea name="about" id="about" className="form-control"></textarea>
//                 </div>
//             </div>
//             <div className="row mt-2 mb-3">
//                 <div className="col-lg-2">&nbsp;</div>
//                 <div className="col-lg-2">
//                 <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary">
//                     Add
//                 </button>
//                 </div>
//             </div>
//             </form>
//         </div>
//         </>
//     )
// }