import React from 'react'
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <Col md={12}
            className='p-3 d-flex justify-content-end align-items-center text-white font-300'
        >
            abcd@mail.com
            <FontAwesomeIcon
                icon={faUserCircle}
                style={{ fontSize: '33px' }}
                className="text-white ml-3"
            />
        </Col>
    )
}

export default Profile