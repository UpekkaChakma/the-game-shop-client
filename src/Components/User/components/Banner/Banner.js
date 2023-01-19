import React from 'react'
import './Banner.css';
import { Carousel } from 'react-bootstrap'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/TkzDQfW/Bloodborne.jpg"
                    alt="bloodborne"
                />
                <Carousel.Caption>
                    <h2 className='font-500'>Bloodborne deep dive into the adventure</h2>
                    <p className='text__p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/2SJXGNq/call-of-duty.webp"
                    alt="call-of-duty"
                />
                <Carousel.Caption>
                    <h2 className='font-500'>Call Of Duty: Best Online Multiplayer Games</h2>
                    <p className='text__p2'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/yskR8wc/genshin-impact.jpg"
                    alt="genshin-impact"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner