import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

import useFetchData from '../customHooks/useFetchData';
import useImageUpload from '../customHooks/useImageUpload';
import useFormSubmit from '../customHooks/useFormSubmit';

import LoadingSpinner from '../../sharedComponents(user+admin)/UI/LoadingSpinner/LoadingSpinner';
import Layout from '../Layout/Layout';
import '../Admin.css'

import TableOfGameList from '../components/TableOfGameList';
import GameModal from '../components/GameModal';
import GameForm from '../components/GameForm';

const EditGames = () => {
    const { state, setShouldReFetch, fetchSingleData, data } = useFetchData();
    const { data: gamesList, loading } = state;

    const { register, handleSubmit } = useForm();
    const [imageURL, handleImageUpload] = useImageUpload();

    const url = `admin/update/${data._id}`
    const [onSubmit] = useFormSubmit(imageURL ? imageURL : data.img, "put", url);
    const [showModal, setShowModal] = useState(false);

    const getSelectedData = (id) => {
        setShowModal(true);
        fetchSingleData(id, 'game');
    }

    const closeModal = () => {
        setShowModal(false);
        setShouldReFetch(prevState => !prevState);
    };

    return (
        <Layout>
            {
                loading === true ?
                    <LoadingSpinner />
                    :
                    <TableOfGameList
                        gamesList={gamesList}
                        action={getSelectedData}
                        icon="https://i.ibb.co/pLKJPSk/Group-307.png"
                    />
            }
            <GameModal
                showModal={showModal}
                closeModal={closeModal}
            >
                <GameForm
                    register={register}
                    handleSubmit={handleSubmit}
                    handleImageUpload={handleImageUpload}
                    onSubmit={onSubmit}
                    imageURL={imageURL}
                    game={data}
                />
            </GameModal>
        </Layout>
    );
};

export default EditGames;