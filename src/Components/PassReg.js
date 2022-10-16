import React from 'react'
import { Link } from 'react-router-dom'
export default function PassReg(props) {

 
  return (
   

    
    <>
    
    <div className="wrapper ">
    
        
        <div className="text-center mt-4 psg name">
            Passenger Registration
        </div>
        <form className="p-3 mt-3">
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
            <Link to="/passLogin"><button className="btn mt-3 bg-dark" id="regBtn" type='submit' onClick={props.showMsg}>Register</button></Link>
          
        </form>
        
    </div>
    </>
  )
}
