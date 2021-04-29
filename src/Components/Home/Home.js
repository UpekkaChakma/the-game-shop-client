import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import GrowSpinner from '../GrowSpinner/GrowSpinner';
import NavigationBar from '../NavigationBar/NavigationBar'
import './Home.css';

const Home = () => {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://obscure-crag-81002.herokuapp.com/games')
            .then(res => res.json())
            .then(data => {
                setGames(data);
                setLoading(false)
            })
    }, [])

    const history = useHistory();
    const handleBuyNow = (id) => {
        history.push(`/checkout/${id}`);
    }
    return (
        <Container fluid style={{ height: '2500px' }} >
            <NavigationBar></NavigationBar>
            <Row>
                {
                    loading ? <GrowSpinner/> : 
                    games.map(game =>
                        <Col  key= {game._id}>
                            <Card className="game-card" style={{borderLeft: '7px solid sandyBrown'}}>
                                <Card.Img variant="top" src={game.imageURL} style={{borderTopLeftRadius: 0}} />
                                <Card.Body>
                                    <Card.Title>{game.gameName}</Card.Title>
                                    <Card.Text>
                                        {game.genre}
                                    </Card.Text>
                                    <Card.Text>
                                        ${game.price}
                                    </Card.Text>
                                    <Button onClick={() => handleBuyNow(game._id)} variant="success"><FontAwesomeIcon icon={faShoppingCart} /> Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Home;