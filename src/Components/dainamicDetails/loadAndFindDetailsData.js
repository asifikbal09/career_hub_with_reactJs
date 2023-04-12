import { getShoppingCart } from "../../utilities/fakedb";

const jobDetails = async (id) => {
  const res = await fetch("jobs.json");
  const data = await res.json();
  const jobD = data.find((job) => job.id === id);
  return jobD;
};

const appliedData = async () => {
  const res = await fetch("jobs.json");
  const data = await res.json();
  const jobs = getShoppingCart();
  let appliedJobs = [];
  if (jobs) {
    for (const job in jobs) {
      const getJob = data.find((jb) => jb.id === job);
      appliedJobs.push(getJob);
    }
    return appliedJobs;
  }
};

export {
  jobDetails,
  appliedData
}
