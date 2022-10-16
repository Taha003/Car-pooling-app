import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div><img src="https://images.pexels.com/photos/33488/navigation-car-drive-road.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" id='img1'/>

    <div id='main'>
     <div className="container">
       <div className="col-4 txt text-black">
         <h1 className="fw-bold  fs-1 head"><span id='startLet' className='text-white'>C</span>ar Pooling <br></br>App</h1>
       </div>
     </div>
     <div className='landingButtons'>
         <Link to="/passlogin"><button className='btn btn-secondary landBtn mx-2 my-2 shadow'>I'm a Passenger</button></Link>
         
          <Link to="/driverLogin"><button className='btn btn-secondary landBtn mx-2 my-2 shadow'>I'm a Driver</button></Link>
     </div>
    </div></div>
  )
}
