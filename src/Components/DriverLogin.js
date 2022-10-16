import React from 'react'
import { Link } from 'react-router-dom'

export default function DriverLogin(props) {
  return (
   <>
   <div className="wrapper ">
   <div>
          <h1>{props.msg1}</h1>
        </div>
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmOEgSdepPpTpJfV3qfxCwR-lLT1IYJYwqZwoR6cWejqYX_UMnKUQ1iN7cPBmkXuQV9E&usqp=CAU" alt=""/>
        </div>
        <div className="text-center mt-4 name">
            Driver Login
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="number" name="driverphonenum" id="driverphNum" placeholder="Ph.Number"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <Link to="/driverdashboard"><button className="btn mt-3 bg-dark" id="loginBtn">Login</button></Link>
        </form>
        <div className="text-center fs-6 text-black-50" >
            <Link to="#" className='text-black-50' id='frgt'>Forget password?</Link> or <Link to="/driverreg" className='text-black-50' id='sgnUp'>Sign up</Link>
        </div>
    </div>
   
   
   </>
  )
}
