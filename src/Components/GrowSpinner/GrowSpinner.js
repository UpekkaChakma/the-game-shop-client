import React from 'react';
import { Spinner } from 'react-bootstrap';

const GrowSpinner = () => {
    return (
        <Spinner style={{height: '100px', width: '100px', margin: '100px auto'}} animation="grow" variant="info" />
    );
};

export default GrowSpinner;