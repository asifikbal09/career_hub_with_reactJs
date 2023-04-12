import React, { useEffect, useState } from "react";
import "./AppliedJobs.css";
// import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
    const [applyJob,setApplyJob] = useState([])
    useEffect(()=>{
        if(jobs.length!==0){
            setApplyJob(jobs)
        }
    },[jobs])

    const remoteJobs=()=>{
        const remote = jobs.filter(job => job.workPlace === "Remote")
        setApplyJob(remote)
    }
    const onsideJobs=()=>{
        const onside = jobs.filter(job => job.workPlace === "On-site")
        setApplyJob(onside)
    }

  return (
    <div className="">
      <div className="dropdown  w-9/12 mx-auto p-3 flex flex-row justify-end">
        <label tabIndex={0} className="btn m-1">
          Filter
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button onClick={remoteJobs}>Remote</button>
          </li>
          <li>
            <button onClick={onsideJobs}>Onsite</button>
          </li>
        </ul>
      </div>
      <div>
        {applyJob.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
