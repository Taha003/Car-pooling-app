import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
export default function DriveReg(props) {
 
// It will show the driver cnic,license,profile image before submitting the form
const [selectedImage,setSelectedImage]=useState();
let [cnic,setCnic]=useState();
const Imagechange=(e)=>{
    if(e.target.files&&e.target.files.length>0){
        setSelectedImage(e.target.files[0]);
             
    }
}
const [selectedImage1,setSelectedImage1]=useState();


const uploadCnicfrnt=(e)=>{
    e.preventDefault();
    cnic=URL.createObjectURL(selectedImage);
    setCnic(cnic)
}
const Imagechange2=(e)=>{
    if(e.target.files&&e.target.files.length>0){
        setSelectedImage1(e.target.files[0])
    }
}
let [cnic1,setCnic1]=useState()
const uploadCnicback=(e)=>{
    e.preventDefault();
    cnic1=URL.createObjectURL(selectedImage1);
    setCnic1(cnic1)
}
const [selectedImage3,setSelectedImage3]=useState();
const Imagechange3=(e)=>{
    
    if(e.target.files&&e.target.files.length>0){
        setSelectedImage3(e.target.files[0])

    }
}
let [cnic3,setCnic3]=useState();

const uploadProfile=(e)=>
    {e.preventDefault();
    cnic3=URL.createObjectURL(selectedImage3);
    setCnic3(cnic3)}

const [selectedImage4,setSelectedImage4]=useState();
const Imagechange4=(e)=>{
    
    if(e.target.files&&e.target.files.length>0){
        setSelectedImage4(e.target.files[0])

    }
}
let [drLic1,setdrLic1]=useState();
const uploadLiscenceFrnt=(e)=>{
    e.preventDefault();
    drLic1=URL.createObjectURL(selectedImage4);
    setdrLic1(drLic1)
}

const [selectedImage5,setSelectedImage5]=useState();
const Imagechange5=(e)=>{
    if(e.target.files&&e.target.files.length>0){
        setSelectedImage5(e.target.files[0])
    }
}
let [drLic2,setDrLic2]=useState()
const uploadLiscenceBack=(e)=>{
    e.preventDefault();
    drLic2=URL.createObjectURL(selectedImage5);
    setDrLic2(drLic2);

}

  return (
    <>
    <div>
        
     <div className="wrapper">
     
        
    <div className="text-center mt-0 psg name">
        Driver Registration
    </div>
    <form className="p-2 mt-3">
    
        <div className="form-field d-flex align-items-center">
           
            <span className="far fa-user"></span>
            <input type="text" name="firstName" id="firstName" placeholder="First Name"required/>
           
           
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name"required/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="text" name="password" id="email" placeholder="Email"required/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="number" name="mobnumber" id="mobnumber" placeholder="Ph.Number"required/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="text" name="gender" id="gender" placeholder="Gender"required/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="text" name="cnic" id="cnic" placeholder="Cnic(XXXXX-XXXXXXX-X)"required/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="text" name="city" id="city" placeholder="City"required/>
        </div>
        <div className="d-flex align-items-center">
            <h5>Upload Your Documents:</h5><hr />
        </div>
        
        <div >
            <p className='text-primary text-decoration-underline'>Cnic Front:</p>
            <input type="file" name="" id="cnicFrnt" onChange={Imagechange}/>  </div>
            <div className='Imagepreview border'>    <img src={cnic} alt="Preview" className='cnicImg'/><br/>
            </div>
            <button className='btn btn-secondary my-2 upload' onClick={uploadCnicfrnt}>Upload</button>

            <div >
            <p className='text-primary text-decoration-underline'>Cnic Back:</p>
            <input type="file" name="" id="cnicFrnt" onChange={Imagechange2}/>  </div>
            <div className='Imagepreview border'>   <img src={cnic1} alt="Preview" className='cnicImg'/></div>
            <button className='btn btn-secondary my-2 upload' onClick={uploadCnicback}>Upload</button>
            <div >
            <p className='text-primary text-decoration-underline'>Profile Image:</p>
            <input type="file" name="" id="cnicFrnt" onChange={Imagechange3}/>  </div>
            <div className='Imagepreview border'>   <img src={cnic3} alt="Preview" className='cnicImg'/></div>
            <button className='btn btn-secondary my-2 upload' onClick={uploadProfile}>Upload</button>
            <div >
            <p className='text-primary text-decoration-underline'>Driving License Front:</p>
            <input type="file" name="" id="cnicFrnt" onChange={Imagechange4}/>  </div>
            <div className='Imagepreview border'>   <img src={drLic1} alt="Preview" className='cnicImg'/></div>
            <button className='btn btn-secondary my-2 upload' onClick={uploadLiscenceFrnt}>Upload</button>

            <div >
            <p className='text-primary text-decoration-underline'>Driving License Back:</p>
            <input type="file" name="" id="cnicFrnt" onChange={Imagechange5}/>  </div>
            <div className='Imagepreview border'>   <img src={drLic2} alt="Preview" className='cnicImg'/></div>
            <button className='btn btn-secondary my-2 upload' onClick={uploadLiscenceBack}>Upload</button>

 
        <Link to="/driverLogin"><button className="btn mt-3 bg-dark my-3" id="regBtn" type='submit' onClick={props.showmsg1}>Register</button></Link>
     
    </form>
    
</div>
</div>
    </>
  )
}
