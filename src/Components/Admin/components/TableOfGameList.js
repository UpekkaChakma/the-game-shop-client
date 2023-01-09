import React from 'react'
import { Image, Table } from 'react-bootstrap'

const TableOfGameList = (props) => {
    const { gamesList, action, icon } = props;
    return (
        <Table hover variant="dark" id="game-list-table" className='mt-4'>
            <thead>
                <tr className='text__p font-300'>
                    <th className='font-400'>Image</th>
                    <th className='font-400'>Title</th>
                    <th className='font-400'>Genre</th>
                    <th className='font-400'>Price</th>
                    <th className='font-400'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    gamesList?.map(game =>
                        <tr className='text__p'
                            key={game._id}
                        >
                            <td>
                                <Image src={game.img}
                                    style={{ height: '35px' }}
                                />
                            </td>
                            <td>{game.title}</td>
                            <td>{game.genre}</td>
                            <td>${game.price}</td>
                            <td>
                                <Image onClick={() => action(game._id, game.title)}
                                    src={icon}
                                    style={{ height: '25px', cursor: 'pointer' }}
                                />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default TableOfGameList