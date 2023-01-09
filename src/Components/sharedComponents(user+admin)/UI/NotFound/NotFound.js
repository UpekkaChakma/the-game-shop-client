import React from 'react';

const NotFound = () => {
    return (
        <div className="min-vh-100 text-white d-flex flex-column justify-content-center align-items-center">
            <h3
                style={{ fontSize: '70px' }}
                className="text-white">
                Error 404!
            </h3>
            <h5
                className="text-white">
                Not Found
            </h5>
        </div>
    );
};

export default NotFound;