import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { faPlusCircle, faUnlock, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    const location = useLocation();

    const sideNavLinks = [
        {
            title: "Add game",
            link: "/admin/add",
            icon: faPlusCircle
        },
        {
            title: "Edit game",
            link: "/admin/edit",
            icon: faEdit
        },
        {
            title: "Delete game",
            link: "/admin/delete",
            icon: faTrash
        },
        {
            title: "Log out",
            link: "/admin/log",
            icon: faUnlock
        }
    ]

    return (
        <Col xs={2} sm={4} md={3} className="sidebar shadow-lg min-vh-100" >
            <Row className="py-4">
                {
                    sideNavLinks.map(({ title, link, icon }) =>
                        <Col key={title}
                            className={`${location.pathname === link && 'side-nav-link-active'} mb-2 pt-1`} xs={12}>
                            <Nav.Link as={Link} to={link}
                            >
                                <h6 className="d-flex justify-content-center d-sm-block font-400">
                                    <FontAwesomeIcon icon={icon} />
                                    <span className={`d-none d-sm-inline text-light ${title === "Edit game" ? 'ml-3' : 'ml-20'}`} >
                                        {title}
                                    </span>
                                </h6>
                            </Nav.Link>
                        </Col>
                    )
                }
            </Row>
        </Col>


    );
};
export default Sidebar