import React from 'react'
// import "./assets/css/style.css"
import { Link } from 'react-router-dom'


export default function PassLogin(props) {


  return (
  
    <>
    
    
      <div className="wrapper ">
        <div>
          <h1>{props.msg}</h1>
        </div>
        <div className="logo">
            <img src="https://www.pngitem.com/pimgs/m/302-3023790_a-person-sitting-in-the-passenger-seat-of.png" alt=""/>
        </div>
        <div className="text-center mt-4 name">
            Passenger Login
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <button className="btn mt-3 bg-dark" id="loginBtn">Login</button>
        </form>
        <div className="text-center fs-6 text-black-50" >
            <Link to="#" className='text-black-50' id='frgt'>Forget password?</Link> or <Link to="/passignup" className='text-black-50' id='sgnUp'>Sign up</Link>
        </div>
    </div>
    </>
  )
}
