import React from 'react'
import './HomePage.css'
import TopicCard from './TopicCard'
import VideoCard from './VideoCard'

const HomePage = () => {
    return (
        <div className = 'homepage'>
            <hr />
            <div className='homepage__topic'>
                <TopicCard topic='All'/>
                <TopicCard topic='Javascript'/>
                <TopicCard topic='react'/>
                <TopicCard topic='redux'/>
                <TopicCard topic='one piece'/>
                <TopicCard topic='naruto'/>
            </div>
            <hr />
            <div className ='homepage__videos'>
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default HomePage
