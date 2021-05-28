import React from 'react'
import './TopicCard.css'

const TopicCard = ({ topic }) => {
    return (
        <p className = 'topicCard'>
            { topic }
        </p>
    )
}

export default TopicCard
