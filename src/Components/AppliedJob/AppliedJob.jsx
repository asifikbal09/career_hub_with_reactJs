import React from "react";
import "./AppliedJob.css";

const AppliedJob = ({ job }) => {
  const {
    id,
    jobTitle,
    companyName,
    logo,
    salary,
    address,
    workPlace,
    jobType,
  } = job;
  return <div>
    <div className="flex gap-3 m-5 w-9/12 mx-auto p-3 border rounded-md items-center container">
    <div className="box bg-slate-100">
        <img src={logo} alt="" />
    </div>
    <div className="grow">
        <p className="text-xl font-bold">{jobTitle}</p>
        <p><small>{companyName}</small></p>
        <div className="flex gap-3 mt-3">
        <p className="look-like-btn">{jobType}</p>
        <p className="look-like-btn">{workPlace}</p>
      </div>
      <div className="flex gap-2 my-5">
        <small>{address}</small>
        <small>Salary: {salary}</small>
      </div>
    </div>
    <button className="common-btn">View Details</button>
  </div>
  </div>;
};

export default AppliedJob;
