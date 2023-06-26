import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";
import jobsData from "../public/data.json";

const API_URL =
  "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await axios.get(API_URL);

        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from URI, using local JSON data.");

        setJobs(jobsData);
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <h1>Job listing</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        jobs.map((job, index) => <p key={index}>{job.position}</p>)
      )}
    </>
  );
}

export default App;
