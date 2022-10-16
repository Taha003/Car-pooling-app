import React from 'react'
import { data } from './DashboardTxt'
// import { NavLink } from 'react-router-dom';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import googleMapReact from 'google-map-react';
// import googleMapReact from 'google-map-react';
// import { NavLink } from 'react-router-dom';
// import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
// import { Link } from 'react-router-dom';
export default function DriveSidebar() {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    let [active,setActive]=useState(true)
    let [activetxt,setactivetxt]=useState('');
    
    const activeDrive=(e)=>{
        if(active===true){
            setActive(false);
            setactivetxt('you are active');
            setTimeout(()=>{
                setactivetxt(null);
            },2000)
            
            
        }
        else{
            setActive(true)
           
            setactivetxt('you are Unactive');
            setTimeout(()=>{
                setactivetxt(null);
            },2000)
        }
        
        
    }
  
   
    return (
    <>
    
    <div className="main">
        <div style={{width:isOpen?'200px':'50px'}} className="sidebar">
            <div className="top_section">
                <h1 className='logo1' style={{display: isOpen ? "block" : "none"}}>Carpooling</h1>
                <div className="bars" style={{marginLeft: isOpen ? "50px" : "0px"}} >
                    <ViewWeekIcon onClick={toggle}/><br/>
                </div>
                
                <div class="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={activeDrive}/>
  
</div>
                
                </div>
                
             {data.map((e,i)=>{
                    return <NavLink to={e.path} key={i} className='link' exact activeClassName='active'>
                    <div className="icon1">{e.icon}</div>
                    <div className="title">{e.title}</div>
                </NavLink>
             })}
        
            </div>
            <div id='activeAlert' className='mx-auto'>
                <h2 style={{color:active===true?'red':'green'}}>{activetxt}</h2>
            </div>
            <div id='landing'><h1 className='text-center'>Driver's landing page</h1></div>
             
        </div>
        

    {/* </div> */}



  
    
    
  
    </>
  )
}

