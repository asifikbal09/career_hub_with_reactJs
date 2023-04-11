import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Jobs from "../Jobs/Jobs";
import { useLoaderData } from "react-router-dom";

const Main = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Jobs data={data}></Jobs>
    </div>
  );
};

export default Main;
