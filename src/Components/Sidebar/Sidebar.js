import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import './Sidebar.css'
import { faPlus, faTasks, faGamepad, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = props => {
    const history = useHistory();

    const goToHome = () => {
        history.push('/home');
    }

    return (
        <Row>
            <h3 onClick={goToHome}><FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon> GAME SHOP</h3>
            <Col className="navColumn" xl={12}>
                <Nav.Link as={Link} to="/admin/addGame" ><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Games</Nav.Link>
            </Col>
            <Col className="navColumn" xl={12}>
                <Nav.Link as={Link} to="/admin/ManageGames"><FontAwesomeIcon icon={faTasks}></FontAwesomeIcon> Manage Games</Nav.Link>
            </Col>
            <Col className="navColumn" xl={12}>
                <Nav.Link as={Link} to="/admin/ManageGames" ><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Edit Game</Nav.Link>
            </Col>
        </Row>

    );
};
export default Sidebar