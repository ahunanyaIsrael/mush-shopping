import React from 'react'
import ContactInfo from '../static/data/ContactInfo'

function Contact() {
    return (
        <div className='cnt-details'>
            {ContactInfo.map((value, index) => {
                return (
                    <div className='info'>
                        <p key={index}>{value.icon} {value.text}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default Contact