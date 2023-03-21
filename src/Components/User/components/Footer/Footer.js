import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faFacebookMessenger, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {

    const footerLinks = [
        {
            "id": "footerLink-1",
            "link_1": "Support-A-Creator",
            "link_2": "Publish On",
            "link_3": "Company",
            "link_4": "Career",
        },
        {
            "id": "footerLink-2",
            "link_1": "Fan Art Policy",
            "link_2": "Ux Research",
            "link_3": "Store EULA",
            "link_4": "Online Services",
        },
        {
            "id": "footerLink-3",
            "link_1": "Community",
            "link_2": "Newsroom",
            "link_3": "Resources",
            "link_4": "Battle Breakers",
        },
        {
            "id": "footerLink-4",
            "link_1": "Infinity",
            "link_2": "Shadow Complex",
            "link_3": "Unreal",
            "link_4": "Guidelines",
        }
    ]
    return (
        <footer>
            <Container>
                <Row className="pl-2 ml-2 py-4">
                    <FontAwesomeIcon icon={faFacebook} className="text__p mx-3" />
                    <FontAwesomeIcon icon={faInstagram} className="text__p mx-3" />
                    <FontAwesomeIcon icon={faFacebookMessenger} className="text__p mx-3" />
                    <FontAwesomeIcon icon={faTwitter} className="text__p mx-3" />
                </Row>
                <Row xs={1} lg={2}>
                    <Col>
                        <Row xs={2} md={2} xl={4}>
                            {
                                footerLinks.map(link =>
                                    <Col key={link.id} className="d-flex flex-column mb-4 pl-5">
                                        <Link to={link.id} className='text__p2 my-2'>{link.link_1}</Link>
                                        <Link to={link.id} className='text__p2 my-2'>{link.link_2}</Link>
                                        <Link to={link.id} className='text__p2 my-2'>{link.link_3}</Link>
                                        <Link to={link.id} className='text__p2 my-2'>{link.link_4}</Link>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                    <Col>
                        <p className='text__p2 mt-2'>
                            © 2022,The Game Shop, Inc. All rights reserved. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quisquam eos quae fugit molestiae quis error earum minus porro cumque. Delectus sequi veniam esse inventore eius praesentium eos non quibusdam.
                        </p>
                    </Col>
                </Row>
                <Row className='justify-content-center my-3'>
                    <Link to="" className='text__p mx-2'>Terms of Service</Link>
                    <Link to="" className='text__p mx-2'>Privacy Policy</Link>
                    <Link to="" className='text__p mx-2'>Store Refund Policy</Link>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer