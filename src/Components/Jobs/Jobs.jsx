import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";

const Jobs = ({data}) => {
const [jobs, setJobs] = useState([])
useEffect(()=>{
    if(data.length !== 4){
        setJobs(data.slice(0,4))
    }
} ,[data])

const seeAllData =()=>{
    setJobs(data)
}
console.log(jobs)

  return (
    <div className="container w-full">
    <h3 className="text-3xl font-semibold text-center mb-3">Featured Jobs</h3>
    <p className="text-xl text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
    <div className="grid gap-5 md:grid-cols-2">
      {
        jobs.map(job => <Job key={job.id} job={job}></Job>)
      }
    </div>


    {
        jobs.length===4? <button onClick={seeAllData} className={`text-center common-btn`}>
        See All
      </button> : <div></div>
    }

    </div>
  );
};

export default Jobs;
