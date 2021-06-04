import React from 'react'
import './HomePage.css'
import VideoCard from './VideoCard'

const HomePage = ({ width }) => {
    return (
        <section className='homepage'>
          <h2>Recomended</h2>
          <div 
          className='homepage-grid'
          style={width>1020?{gridTemplateColumns:'repeat(4,1fr)'}:width>767?{gridTemplateColumns:'repeat(3,1fr)'}:width>423?{gridTemplateColumns:'repeat(2,1fr)'}:{gridTemplateColumns:'repeat(1,1fr)'}}
          >
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
