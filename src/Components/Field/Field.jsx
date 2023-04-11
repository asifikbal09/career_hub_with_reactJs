import React from "react";
import "./Field.css";

const Field = ({ field }) => {
  const { name, logo, id, jobs } = field;
  return <div className="field">
    <img className="m-4" src={logo} alt="" />
    <h3 className="text-2xl font-bold">{name}</h3>
    <p>{jobs}+ Jobs Available</p>
  </div>;
};

export default Field;
