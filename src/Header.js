import React,{ useContext } from 'react'
import './Header.css'
import { context } from './GlobalVariable'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

const Header = () => {
    const { toggler,setToggler } = useContext(context);
   
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuIcon onClick = {e=>setToggler(toggler ? false:true)} className='header__icon'/>
                <img className='header__brand' src='/images/youTube-logo.jpg' alt='youTube' />
            </div>
            <div className='header__middle'>
                <input type='text' placeholder='Search'/>
                <SearchIcon className='search'/>
                <MicIcon className='header__icon'/>
            </div>
            <div className='header__right'>
                <VideoCallIcon className='header__icon'/>
                <AppsIcon className='header__icon'/>
                <NotificationsIcon className='header__icon'/>
                <Avatar className='header__right__avatar'>I</Avatar>
            </div>
            
        </div>
    )
}

export default Header

