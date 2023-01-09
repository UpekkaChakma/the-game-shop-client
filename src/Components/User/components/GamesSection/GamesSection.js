import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './GamesSection.css';

const GamesSection = ({ gamesList, handleCheckOut }) => {

    return (
        <Container className="px-3 py-5 mx-auto" size="md">
            <h5 className='text-white py-3 d-flex justify-content-end mx-3 font-500'>TOP RATED GAMES</h5>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    gamesList?.map(game =>
                        <Card id="game-card" className='mx-2 my-4' key={game._id} onClick={() => handleCheckOut(game._id)}>
                            <Card.Img
                                variant="top"
                                src={game.img}
                                className="card-img"
                            />
                            <Card.Body className="p-0">
                                <Card.Title id="card-title" className="pt-3 font-400">{game.title}</Card.Title>
                                <Card.Text className='h6 text-white font-400 '>
                                    {game.price}$
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </Container>
    )
}

export default GamesSection