import React,{useContext} from 'react'
import './Slidebar.css'
import { context } from './GlobalVariable'

import SlidebarComponent from './SlidebarComponent'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';

const Slidebar = ({ width }) => {
    const {toggler,setToggler} = useContext(context);
    return (
        <>{
            width > 1020 && toggler===false?(<div className='slidebar'>
            <SlidebarComponent selected={true} Icon={HomeIcon} title='Home' />
            <SlidebarComponent Icon={ExploreIcon} title='Explore' />
            <SlidebarComponent Icon={SubscriptionsIcon } title='Subscription' />
            <hr />
            <SlidebarComponent Icon={VideoLibraryIcon } title='Library' />
            <SlidebarComponent Icon={HistoryIcon } title='History' />
            <SlidebarComponent Icon={PlayCircleOutlineIcon } title='Your Videos' />
            <SlidebarComponent Icon={WatchLaterIcon } title='Watch Later' />
            <SlidebarComponent Icon={ThumbUpIcon } title='Liked Videos' />
            <SlidebarComponent Icon={ArrowDropDownIcon } title='Show More' />
            <hr />
        </div>):width > 1020 && toggler===true?(<aside className="sidebar-collapse">
               <HomeIcon className='sidebar-collapse-icon'/>
               <ExploreIcon className='sidebar-collapse-icon'/>
               <SubscriptionsIcon className='sidebar-collapse-icon'/>
               <VideoLibraryIcon className='sidebar-collapse-icon'/>
               </aside>):width > 424 && toggler === false? (<aside className="sidebar-collapse">
               <HomeIcon className='sidebar-collapse-icon'/>
               <ExploreIcon className='sidebar-collapse-icon'/>
               <SubscriptionsIcon className='sidebar-collapse-icon'/>
               <VideoLibraryIcon className='sidebar-collapse-icon'/>
               </aside>):width > 424 && toggler === true?(<aside className="sidebar-absolute">
                   <header className='sidebar-absolute-header'>
                        <MenuIcon onClick={e=>setToggler(toggler?false:true)} className='sidebar-absolute-header__icon' />
                        <img className='header__brand' src='/images/youTube-logo.jpg' alt='youTube' />  
                  
                   </header>
                   <SlidebarComponent selected={true} Icon={HomeIcon} title='Home' />
                    <SlidebarComponent Icon={ExploreIcon} title='Explore' />
                    <SlidebarComponent Icon={SubscriptionsIcon } title='Subscription' />
                    <hr />
                    <SlidebarComponent Icon={VideoLibraryIcon } title='Library' />
                    <SlidebarComponent Icon={HistoryIcon } title='History' />
                    <SlidebarComponent Icon={PlayCircleOutlineIcon } title='Your Videos' />
                    <SlidebarComponent Icon={WatchLaterIcon } title='Watch Later' />
                    <SlidebarComponent Icon={ThumbUpIcon } title='Liked Videos' />
                    <SlidebarComponent Icon={ArrowDropDownIcon } title='Show More' />
                    <hr />
               </aside>):toggler && (<aside className="sidebar-absolute">
                   <header className='sidebar-absolute-header'>
                        <MenuIcon onClick={e=>setToggler(toggler?setToggler(false):setToggler(true))} className='sidebar-absolute-header__icon' />
                        <img className='header__brand' src='/images/youTube-logo.jpg' alt='youTube' />  
                  
                   </header>
                   <SlidebarComponent selected={true} Icon={HomeIcon} title='Home' />
                    <SlidebarComponent Icon={ExploreIcon} title='Explore' />
                    <SlidebarComponent Icon={SubscriptionsIcon } title='Subscription' />
                    <hr />
                    <SlidebarComponent Icon={VideoLibraryIcon } title='Library' />
                    <SlidebarComponent Icon={HistoryIcon } title='History' />
                    <SlidebarComponent Icon={PlayCircleOutlineIcon } title='Your Videos' />
                    <SlidebarComponent Icon={WatchLaterIcon } title='Watch Later' />
                    <SlidebarComponent Icon={ThumbUpIcon } title='Liked Videos' />
                    <SlidebarComponent Icon={ArrowDropDownIcon } title='Show More' />
                    <hr />
               </aside>)
        }</>
    )
}

export default Slidebar

{/* <div className='slidebar'>
            <SlidebarComponent selected={true} Icon={HomeIcon} title='Home' />
            <SlidebarComponent Icon={ExploreIcon} title='Explore' />
            <SlidebarComponent Icon={SubscriptionsIcon } title='Subscription' />
            <hr />
            <SlidebarComponent Icon={VideoLibraryIcon } title='Library' />
            <SlidebarComponent Icon={HistoryIcon } title='History' />
            <SlidebarComponent Icon={PlayCircleOutlineIcon } title='Your Videos' />
            <SlidebarComponent Icon={WatchLaterIcon } title='Watch Later' />
            <SlidebarComponent Icon={ThumbUpIcon } title='Liked Videos' />
            <SlidebarComponent Icon={ArrowDropDownIcon } title='Show More' />
            <hr />
        </div> */}