import React from 'react'
import './HomePage.css'
import VideoCard from './VideoCard'

const HomePage = () => {
    return (
        <section className='homepage'>
          <h2>Recomended</h2>
          <div className='homepage-grid'>
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
          
        </section>
    )
}

export default HomePage
