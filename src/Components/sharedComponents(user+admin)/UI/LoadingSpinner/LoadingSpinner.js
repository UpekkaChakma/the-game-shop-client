import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.css'

const GrowSpinner = () => {
    return (
        <div
            className='w-100 h-100 d-flex justify-content-center align-items-center'
            id="loading-spinner"
        >
            <Spinner className="m-1" animation="grow" variant="info" />
            <Spinner className="m-1" animation="grow" variant="info" />
            <Spinner className="m-1" animation="grow" variant="info" />
        </div>
    );
};

export default GrowSpinner;