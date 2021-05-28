import React from 'react'
import './Slidebar.css'
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

const Slidebar = () => {
    return (
        <div className='slidebar'>
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
        </div>
    )
}

export default Slidebar

