import React from 'react';
import './AppliedJobs.css'
// import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData()
    return (
        <div>
            {
                jobs.map(job=> <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;