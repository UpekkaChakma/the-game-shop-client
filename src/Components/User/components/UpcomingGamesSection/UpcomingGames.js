import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './UpcomingGames.css';

const UpcomingGames = () => {
    return (
        <Container fluid className='bg__color py-5'>
            <Row xs={1} sm={1} md={2} lg={2} xl={2} className="bg__color py-4 mx-auto col-xl-8 justify-content-center  upcoming-section__row">
                <Col className='four-img__div d-flex justify-content-center py-4'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Col>
                <Col className='p-3 my-auto'>
                    <h4 className="text-white d-block pb-3">Our Upcoming Games</h4>
                    <p className="text__p d-block pb-3">Lorem ipsum dolor sit adicta consectetur. Sint consectetur earum maiores quaerat a voluptatem suscipit neque ipsa quae omnis.</p>
                    <Button variant="outline-light" size="sm">Learn More</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default UpcomingGames