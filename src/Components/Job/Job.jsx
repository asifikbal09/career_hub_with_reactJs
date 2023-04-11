import React from "react";
import "./Job.css";

const Job = ({ job }) => {
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
  return (
    <div className="p-5  relative">
      <img className="" src={logo} alt="" />
      <p className="text-xl font-bold">{jobTitle}</p>
      <p>{companyName}</p>
      <div className="flex gap-3 mt-3">
        <p className="look-like-btn">{jobType}</p>
        <p className="look-like-btn">{workPlace}</p>
      </div>
      <div className="flex gap-2 my-5">
        <small>{address}</small>
        <small>Salary: {salary}</small>
      </div>
      <button className="common-btn absolute bottom-2">View Details</button>
    </div>
  );
};

export default Job;
