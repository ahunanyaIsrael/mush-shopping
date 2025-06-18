import React from 'react'
import navLinks from '../static/data/navLinks'
import Button from '../static/common/Button'

function NavBar() {
    return (
        <header className='navbar-container'>
            <div className="logo"><h2>Shopping</h2></div>
            <div className="navLinks">
                {navLinks.map((value, index) => {
                    return <a href={value.url} key={index}>{value.text}</a>
                })}
            </div>
            <div className="nav-button">
                <Button
                    name="Login"
                    bgColor="white"
                    color="black"
                />
                <Button
                    name="Sign Up"
                    color="white"
                />
            </div>
        </header>
    )
}

export default NavBar