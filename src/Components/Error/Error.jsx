import React from 'react';
import "./Error.css"
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <h1 className='text-6xl font-bold m-10'>Oops!</h1>
            <p className='text-xl font-semibold'>404 - PAGE NOT FOUND</p>
            <p className=' text-center p-5'><small>The page you are looking for might have been removed had its name changed or is temporarily unavailable</small></p>
            <Link to="/"><button className='common-btn'>Go To Homepage</button></Link>

        </div>
    );
};

export default Error;