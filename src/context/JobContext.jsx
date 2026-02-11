import { createContext, useContext, useState } from "react";
import { jobs as initialJobs } from "../mock/jobs";

const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState(initialJobs);

  function acceptJob(jobId, userId) {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId
          ? { ...job, accepted: true, professionalId: userId }
          : job
      )
    );
  }

  return (
    <JobContext.Provider value={{ jobs, acceptJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useJobs precisa estar dentro do JobProvider");
  }

  return context;
}
