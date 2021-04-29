
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import NavigationBar from '../NavigationBar/NavigationBar';
import swal from 'sweetalert';


const CheckOut = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const [foundedGame, setFoundedGame] = useState({});

    useEffect(() => {
        const url = `https://obscure-crag-81002.herokuapp.com/findGame/${id}`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((result) => {
                setFoundedGame(result[0])
            })
        },[id])


    //<===========================handleOrder===============================>
    const {gameName, price} = foundedGame;
    const handleAddOrder = () => {
        const newDate = new Date();
        const orderDate = newDate.toDateString();
        const orderDate1 = newDate.toLocaleDateString();
        const orderTime = newDate.toLocaleTimeString();
        const newOrder = { ...loggedInUser, gameName, price, orderDate, orderTime, orderDate1 };
        fetch('https://obscure-crag-81002.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                swal("Product Successfully Added To Your Cart", {
                    icon: "success",
                });
                history.push("/orderList")
            })
    }

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Game Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{foundedGame.gameName}</td>
                            <td>1</td>
                            <td>${foundedGame.price}</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Button variant="danger" onClick= {handleAddOrder}>CheckOut</Button>
        </Container>
    );
};

export default CheckOut;