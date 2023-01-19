import React from 'react';
import { Image } from 'react-bootstrap';
import useFetchData from '../../Admin/customHooks/useFetchData';
import MainLayout from '../MainLayout';
import LoadingSpinner from '../../sharedComponents(user+admin)/UI/LoadingSpinner/LoadingSpinner'

const Orders = () => {
    const { state } = useFetchData("user/user-orders");
    const { data: games, loading } = state;

    return (
        <MainLayout>
            {
                loading ? <LoadingSpinner /> :
                    <div className='d-flex justify-content-center align-items-center m-4'>
                        {
                            games ? '' : <h4 className="text-white font-500 my-5">
                                Please login to see your library
                            </h4>
                        }
                        {
                            games?.length === 0 ?
                                <h4 className="text-white font-500">
                                    No game purchased yet
                                </h4>
                                : games?.map(game =>
                                    <Image src={game.img} className="w-25" style={{ height: "250px", objectFit: 'cover' }} />
                                )
                        }
                    </div>
            }
        </MainLayout >
    );
};

export default Orders;