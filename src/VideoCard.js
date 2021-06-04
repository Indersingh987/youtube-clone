import { Avatar } from '@material-ui/core'
import React from 'react'
import './VideoCard.css'

const VideoCard = () => {
    return (
        <div className='videoCard'>
            <img className='videoCard__img' src='https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png'
            alt='thumbnail' />
            <div className='videoCard__info'>
                <Avatar />
                <div className='videoCard__text'>
                    <h6>React js Crash course</h6>
                    <p className='videoCard__channel'>
                        React Js
                    </p>
                    <p className='videoCard__views'>
                        1M views * 3 years ago
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
