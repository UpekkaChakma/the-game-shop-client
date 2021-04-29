import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Image, Row, Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderList from './OrderList';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    const [orderLists, setOrderLists] = useState([]);
    const [loading, setLoading] = useState(false);

    const totalPrice = orderLists.reduce((prev, next) => prev + parseInt(next.price), 0);

    useEffect(() => {
        setLoading(true);
        fetch(`https://obscure-crag-81002.herokuapp.com/userTotalOrderedLists/${email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setOrderLists(data);
                setLoading(false);

            });
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col style={{backgroundColor: ' rgb(32,126,128)'}} lg={12}>
                    <Image style={{marginLeft: '45%'}} src={loggedInUser.photoURL} roundedCircle />
                    <h2 style={{marginLeft: '35%', color: 'white'}} >Hello! {loggedInUser.name}</h2>
                    <h4 style={{color: 'white'}} >Your Ordered Game List and total price:</h4>
                </Col>
                <Col id="page-content-wrapper">
                    {
                        loading ? <Spinner style={{marginLeft: '45%', height:'100px', width: '100px'}} animation="grow" variant="success" /> :
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Game Name</th>
                                        <th>Order Time</th>
                                        <th>Order Date</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderLists.map(list => <OrderList key={list._id} list={list} totalPrice={totalPrice} ></OrderList>)
                                    }
                                    <tr>
                                        <th>Total</th>
                                        <td></td>
                                        <td></td>
                                        <td>=</td>
                                        <td>${totalPrice}</td>
                                    </tr>
                                </tbody>
                            </Table>
                    }
                </Col>
            </Row>
        </Container >
    );
};

export default Orders;