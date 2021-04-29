import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Game from '../Game/Game';
import GrowSpinner from '../GrowSpinner/GrowSpinner';
import Sidebar from '../Sidebar/Sidebar';
import swal from 'sweetalert';

const ManageGames = () => {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

//============= load all saved game ===============================

    useEffect(() => {
        setLoading(true);
        fetch('https://obscure-crag-81002.herokuapp.com/games')
            .then(res => res.json())
            .then(data => {
                setGames(data);
                setLoading(false)
            })
    }, []);

//====================== delete a game ================================

    const deleteGameById = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this game file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url = `https://obscure-crag-81002.herokuapp.com/deleteGame/${id}`;
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type':'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    swal("Product Successfully Deleted", {
                        icon: "success",
                    });
                    const newGameList = games.filter(game=> game._id !== id);
                    setGames(newGameList);
                })
                
            } else {
                swal("Your game file is safe!");
            }
        });
    }

    return (
        <Container fluid>
            <Row>
                <Col md={3} sm={12} className="grid" >
                    <Sidebar />
                </Col>
                <Col md={9} sm={0} id="page-content-wrapper">
                    <h1>Edit/Delete Game</h1>
                    {
                        loading ? <GrowSpinner /> :
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Game Name</th>
                                        <th>Genre</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        games.map(game => <Game key={game._id} game={game} deleteGameById={deleteGameById} ></Game>)
                                    }
                                </tbody>
                            </Table>
                    }
                </Col>
            </Row>
        </Container >
    );
};

export default ManageGames;