import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';

const Layout = ({ children }) => {
    return (
        <Container fluid >
            <Row>
                <Sidebar />
                <Col xs={10} sm={8} md={9} className='pb-5' >
                    <Profile />
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default Layout