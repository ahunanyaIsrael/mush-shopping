import React from 'react'
import Button from '../static/common/Button'
import heroImg from '../assets/images/mushroom.png'
import Card from './Card'
import ServiceData from '../static/data/ServiceData'
import details from '../static/data/details'
import RightDetail from '../static/common/RightDetail'
import LeftDetail from '../static/common/LeftDetail'
import Contact from './Contact'
import ContactInfo from '../static/data/ContactInfo'

function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section id='hero'>
                <div className="hero-container">
                    <div className="hero-info">
                        <span>100% Natured Products</span>
                        <h1>MUSHROOMS</h1>
                        <p>Mushrooms are edible fungus that can provide several important nutrients. This many kinds of mushrooms have varying compositions and nutritional profiles</p>
                        <div className="button-container">
                            <Button name="Buy Now" />
                            <Button name="Contact Us" border="1px solid #000000" bgColor="white" color="black" />

                        </div>

                    </div>
                    <div className="heroImg">
                        <img src={heroImg} alt="Mushroom" style={{ backgroundColor: "transparent" }} />
                    </div>
                </div>
            </section>
            {/* Service Section */}
            <section className='service-section'>
                <div className="service-container">
                    <h3 style={{ color: "#ea510e" }}>Service</h3>
                    <h1>We offer for you</h1>

                    <div className="card-service">
                        {ServiceData.map((value, index) => {
                            return (
                                <Card key={index} heading={value.heading} description={value.description} icon={value.icon} />
                            )
                        })}
                    </div>
                </div>

            </section>

            {/* Details Section */}
            <section className='details-section'>
                <RightDetail image={details[0].img} heading={details[0].heading} details={details[0].details} />
                <LeftDetail image={details[1].img} heading={details[1].heading} details={details[1].details} />
                <RightDetail image={details[2].img} heading={details[2].heading} details={details[2].details} />
            </section>
            {/* Footer Sections */}
            <section className="footer-section">
                <div className="subscribe">
                    <h1>Subscribe to our Newsletter</h1>
                    <p>Mushrroms are edible figure that can provide very import nutrients</p>
                    <form className='input-form'>
                        <input type="text" placeholder='Enter your email' />
                        <button>subscribe</button>
                    </form>
                </div>

                <div className="footer">
                    <div className="address">
                        <h1>Shopping</h1>
                        <p>123 Sam Avenue, The Hill Road </p>
                        <p>@2025 MushMush. All Rights Reserved</p>
                    </div>
                    <div className="about-us">
                        <h1>About Us</h1>
                        <p>Our Story</p>
                        <p>Designer</p>
                        <p>Sustainablility</p>
                    </div>
                    <div className="support">
                        <h1>Support</h1>
                        <p>FAQ</p>
                        <p>Shipping</p>
                        <p>Return Policy</p>
                        <p>Terms & Conditions</p>
                    </div>

                    <div className="contact-us">
                        <h1>Contact Us</h1>
                        {ContactInfo.map((value, index) => {
                            return (
                                <p key={index}>{value.icon} {value.text}</p>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero