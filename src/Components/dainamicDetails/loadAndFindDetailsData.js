const jobDetails = async (id) => {
  const res = await fetch("jobs.json");
  const data = await res.json();
  const jobD = data.find(job => job.id ===id)
  return jobD
};

export default jobDetails;
