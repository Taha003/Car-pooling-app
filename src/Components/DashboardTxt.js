import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import  PreviewIcon from '@mui/icons-material/Preview';
import DescriptionIcon from '@mui/icons-material/Description';
import SecurityIcon from '@mui/icons-material/Security';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
export const data=[
    {
        title:"Driver's Name",
        icon:<PersonIcon/>,
        path:'/'
    },
    {
    title:'Home',
    icon:<HomeIcon/>,
    path:'/driverdashboard'
},
{
    title:'Wallet',
    icon:<AccountBalanceWalletIcon/>,
    path:'/'
},
{
    title:'My trips',
    icon:<DriveEtaIcon/>,
    path:'/'
},
{
    title:'Notification',
    icon:<NotificationsActiveIcon/>,
    path:'/'
},
{
    title:'How it works',
    icon:<PreviewIcon/>,
    path:'/'
},
{
    title:'Terms and conditions',
    icon:<DescriptionIcon/>,
    path:'/'
},
{
    title:'Privacy and policy',
    icon:<SecurityIcon/>,
    path:'/'   
},
{
    title:'Logout',
    icon:<LogoutIcon/>,
    path:'/driverLogin'
},

]
