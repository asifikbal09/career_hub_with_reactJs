import React from "react";
import "./Blog.css";

const Blog = () => {
  return <div className="container">
    <div className="h-44 flex justify-center items-center font-semibold p-10 bg-slate-100">
        <h1>Blog</h1>
    </div>
    <div className="grid gap-4 md:grid-cols-2 m-5">
    <div className="h-60">
        <h3 className="text-xl font-semibold"><span className="text-violet-400">Q1.</span> When should you use context API?</h3>
    </div>
    <div className="h-60">
        <h3 className="text-xl font-semibold"><span className="text-violet-400">Q2.</span> What is a custom hook?</h3>
    </div>
    <div className="h-60">
        <h3 className="text-xl font-semibold"><span className="text-violet-400">Q3.</span> What is useRef?</h3>
    </div>
    <div className="h-60">
        <h3 className="text-xl font-semibold"><span className="text-violet-400">Q4.</span> What is useMemo?</h3>
    </div>

  </div>
  </div>;
};

export default Blog;
