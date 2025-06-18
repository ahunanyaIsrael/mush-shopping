import React from 'react'

function Button(props) {
    const handleClick = () => {
        console.log("Pressed")
    }
    return (
        <button className='buttonStyle' style={{ backgroundColor: props.bgColor, color: props.color, border: props.border }} onClick={handleClick}>{props.name}</button>
    )
}

export default Button