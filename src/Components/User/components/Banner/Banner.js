import React from 'react'
import './Banner.css';
import { Carousel } from 'react-bootstrap'
import ClashOfClanBanner from '../../../../Images/clash-of-clan.jpg'
import Bloodborne from '../../../../Images/Bloodborne.jpg'
import GenshinImpactBanner from '../../../../Images/genshin-impact.jpg'
import COD from '../../../../Images/call-of-duty.webp'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bloodborne}
                    alt="Clash Of Clan Banner 2"
                />
                <Carousel.Caption>
                    <h2 className='font-500'>Bloodborne feel the adventure</h2>
                    <p className='text__p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={COD}
                    alt=""
                />
                <Carousel.Caption>
                    <h2 className='font-500'>Call Of Duty: Best Online Multiplayer Games</h2>
                    <p className='text__p2'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={GenshinImpactBanner}
                    alt="Clash Of Clan Banner"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner