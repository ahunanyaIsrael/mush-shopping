import React from 'react'
import Button from './Button'

function LeftDetail(props) {
    return (
        <div className="detail-container" id='left'>
            <div className="details">
                <span style={{ color: "#ea510e" }}>DETAILS</span>
                <h1>{props.heading}</h1>
                <p>{props.details}</p>
                <Button name={"Read More"} />
            </div>
            <div className="img">
                <img src={props.image} alt="mushroom" />
            </div>
        </div>
    )
}

export default LeftDetail