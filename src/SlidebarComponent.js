import React from 'react'
import './SlidebarComponent.css'

const SlidebarComponent = ({selected, Icon ,title }) => {
    return (
        <div className={`slidebarComponent ${selected && 'selected'}`}>
            <Icon className='slidebarComponent__icon'/>
            <p className='slidebarComponent__title'>{title}</p>
        </div>
    )
}

export default SlidebarComponent
