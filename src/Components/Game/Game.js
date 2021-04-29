import React from 'react';

const Game = (props) => {
    const gameList = props.game;
    const deleteGameById = props.deleteGameById;
    const { gameName, genre, price, _id } = gameList;
    return (
        <tr>
            <td>{gameName}</td>
            <td>{genre}</td>
            <td>${price}</td>
            <td>
                <img style={{ width: '30px', cursor: 'pointer', margin:'auto', padding:'4px' }} src="https://i.ibb.co/pLKJPSk/Group-307.png" alt="Group-33150" border="0"></img>
                <img style={{ width: '30px', cursor: 'pointer', margin:'auto', padding:'4px' }} onClick={() => deleteGameById(_id)} src="https://i.ibb.co/wMbLHFp/Group-33150.png" alt="Group-33150" border="0"></img>
            </td>
        </tr>
    );
};

export default Game;