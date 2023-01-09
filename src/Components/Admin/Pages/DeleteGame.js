import React from 'react';
import LoadingSpinner from '../../sharedComponents(user+admin)/UI/LoadingSpinner/LoadingSpinner';
import useFetchData from '../customHooks/useFetchData';
import Layout from '../Layout/Layout';
import axios from 'axios';
import swal from 'sweetalert';
import '../Admin.css'
import { failedAlert, successAlert, noChangeAlert } from '../../sharedComponents(user+admin)/UI/Alert';
import TableOfGameList from '../components/TableOfGameList';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const DeleteGame = () => {
    const [loggedInUser] = useContext(UserContext);
    const { state, setShouldReFetch } = useFetchData();
    const { data: gamesList, loading } = state;

    const deleteGameById = (id, title) => {
        swal({
            text: `Are you sure to delete?`,
            title: title,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    try {
                        const res = await axios.delete(`http://localhost:5000/admin/delete/${id}`, {
                            headers: {
                                "Authorization": loggedInUser.token
                            }
                        });
                        res.data && successAlert(`${title} deleted`);
                        setShouldReFetch(prevState => !prevState);
                    } catch (error) {
                        failedAlert(error.response.data)
                    }

                } else {
                    noChangeAlert()
                }
            });
    }

    return (
        <Layout>
            {
                loading === true ?
                    <LoadingSpinner />
                    :
                    <TableOfGameList
                        gamesList={gamesList}
                        action={deleteGameById}
                        icon="https://i.ibb.co/wMbLHFp/Group-33150.png"
                    />
            }
        </Layout>
    );
};

export default DeleteGame;