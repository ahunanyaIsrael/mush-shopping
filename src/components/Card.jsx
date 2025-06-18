import React from 'react'

function Card(props) {
    return (
        <div className='card'>
            <div className="icon">{props.icon}</div>
            <div className="info">
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default Card