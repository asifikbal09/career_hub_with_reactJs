import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal  } from "d3-shape";
import "./Statistics.css";


const Statistics = () => {

    const marks = [
        {
          name: "Assignment-1",
          mark: 50
        },
        {
          name: "Assignment-2",
          mark: 60
        },
        {
          name: "Assignment-3",
          mark: 60
        },
        {
          name: "Assignment-4",
          mark: 60
        },
        {
          name: "Assignment-5",
          mark: 59
        },
        {
          name: "Assignment-6",
          mark: 58
        },
        {
          name: "Assignment-7",
          mark: 60
        },
        {
          name: "Assignment-8",
          mark: 60
        }
      ];
      let total = 0;
      marks.map(mark => {
        total+= mark.mark
      })
      total = total/8
      const cardinal = curveCardinal.tension(0.2);

  return <div className="w-full container p-8">
    <h3 className="text-2xl font-bold">Assignment Analytics</h3>
    <p className="text-xl font-semibold my-8">Avg Assignment Mark = {total.toFixed(2)}</p>
     
    <AreaChart
      width={700}
      height={400}
      data={marks}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip
      />
      <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    
  </div>;
};

export default Statistics;
