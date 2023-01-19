import React from 'react'
import { Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Profile = () => {
    const { loggedInUser } = useContext(UserContext);
    const { email, photo } = loggedInUser;
    return (
        <div>
            <Col sm={12} className='text-white text-center text__p mt-3'>
                Fully functional ADMIN panel for crud operation
            </ Col>
            <Col md={12}
                className='p-3 d-flex justify-content-end align-items-center text-white font-300'
            >
                {email ? email : "noUser@mail.com"}
                {email ?
                    <Image
                        src={photo}
                        className="mx-2 my-1"
                        style={{ width: "40px", height: "40px", backgroundColor: 'rgba(0,0,0,0.08)' }}
                        roundedCircle
                    /> :
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        style={{ fontSize: '33px' }}
                        className="text-white ml-3"
                    />}
            </Col>
        </div>
    )
}

export default Profile