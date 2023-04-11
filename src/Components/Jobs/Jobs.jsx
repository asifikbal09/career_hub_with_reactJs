import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

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
    


    {
        jobs.length===4? <button onClick={seeAllData} className={`text-center common-btn`}>
        See All
      </button> : <div></div>
    }

    </div>
  );
};

export default Jobs;
