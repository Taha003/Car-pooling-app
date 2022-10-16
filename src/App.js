import './App.css';
// import {Route,Link} from "react-router-dom"
import PassLogin from './Components/PassLogin';
// import { Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Home from './Components/Home';
import PassReg from './Components/PassReg';
import DriveReg from './Components/DriveReg';
import DriverDashboard from './Components/DriverDashboard';
// import DriveSidebar from './Components/DriveSidebar';
import {
  
  HashRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { useState } from 'react';
import DriverLogin from './Components/DriverLogin';
function App(props) {
  let [msg,setMsg]=useState('');
  let showMsg=()=>{
  msg="You are registered!";
  setMsg(msg) 
    setTimeout(() => {
      setMsg(null)
    }, 2000);
   
   
  }

  let [msg1,setMsg1]=useState('');
  let showmsg1=()=>{
    msg1="You are registered!";
  setMsg1(msg1) 
    setTimeout(() => {
      setMsg1(null)
    }, 2000);
  }

  return (
    
  <>
    
   {/* //Routing To pages */}
    <Router>
    
    <Switch>
      {/* //It will lead to passenger login page */}
      <Route path="/passlogin">
      <PassLogin msg={msg}/>
      </Route>
      {/* //It will lead to passenger sign up page */}
      <Route path="/passignup">
      <PassReg showMsg={showMsg}/>
      </Route>
      {/* //It will lead to Home page  */}
      <Route path="/" exact>
      <Home/>
      </Route>
      {/* //It will lead to driver login page */}
      <Route path="/driverLogin">
        <DriverLogin msg1={msg1}/>
      </Route>
      <Route path="/driverreg">
      <DriveReg showmsg1={showmsg1}/>
      </Route>
      <Route path="/driverdashboard">
      <DriverDashboard/>
      </Route>
    </Switch>
    </Router>

    </>
  );
}

export default App;
