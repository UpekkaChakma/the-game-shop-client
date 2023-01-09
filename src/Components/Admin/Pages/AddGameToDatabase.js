import React from 'react';
import { useForm } from "react-hook-form";
import useImageUpload from '../customHooks/useImageUpload';
import useFormSubmit from '../customHooks/useFormSubmit';
import GameForm from '../components/GameForm';
import Layout from '../Layout/Layout';


const AddGameToDatabase = () => {

  const { register, handleSubmit } = useForm();
  const [imageURL, handleImageUpload] = useImageUpload();
  const [onSubmit] = useFormSubmit(imageURL, "post", "create");

  const game = {
    title: '',
    genre: '',
    developer: '',
    description: '',
    img: '',
    price: null
  }

  return (
    <Layout>
      <GameForm
        register={register}
        handleSubmit={handleSubmit}
        handleImageUpload={handleImageUpload}
        onSubmit={onSubmit}
        imageURL={imageURL}
        game={game}
      />
    </Layout>
  );
};

export default AddGameToDatabase;