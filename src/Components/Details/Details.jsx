import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer , toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from "../../utilities/fakedb";

const Details = () => {
  const details = useLoaderData();
  const appliedTheJob = id =>{
    addToDb(id)

    toast.success('Successfully Applied ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }
  const {
    id,
    workPlace,
    jobType,
    address,
    email,
    phone,
    salary,
    logo,
    companyName,
    experiences,
    educationalRequirements,
    jobResponsibility,
    jobDescription,
    jobTitle,
  } = details;
  return (
   <div>
    <h1 className="text-center font-bold my-5">Job Details</h1>
     <div className="grid gpa-4 md:grid-cols-3 container m-5 w-9/12 mx-auto">
      <div className="p-5 col-span-2 ">
        <p><span className="font-bold">Job Description:</span> {jobDescription}</p>
        <p><span className="font-bold">Job Responsibility:</span> <ul>
        {jobResponsibility.map(list => <li>*{list}</li>)}
            </ul></p>
            <p><span className="font-bold">Educational Requirements:</span><br />{educationalRequirements}</p>
            <p><span className="font-bold">Experiences:</span> <br />{experiences}</p>
      </div>
      <div className="bg-slate-200 p-5">
        <h3 className="font-bold my-5">Job Details</h3>
        <hr />
        <p><span className="font-semibold">Salary:</span> {salary}</p>
        <p><span className="font-semibold">Job Title:</span> {jobTitle}</p>
        <h3 className="font-bold my-5">Contract Information</h3>
        <hr />
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Address:</span> {address}</p>
        <button onClick={()=>appliedTheJob(id)} className="w-full my-5 common-btn">Apply</button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
   </div>
  );
};

export default Details;
