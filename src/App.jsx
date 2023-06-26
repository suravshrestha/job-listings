import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";
import jobsData from "./data.json";

import Filter from "./components/Filter";
import Card from "./components/Card";

const API_URL =
  "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedKeywords, setSelectedKeywords] = useState(new Set());

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await axios.get(API_URL);

        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from API, using local JSON data.");

        setJobs(jobsData);
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">Jobs</h1>

      {selectedKeywords.size > 0 && (
        <Filter
          selectedKeywords={selectedKeywords}
          setSelectedKeywords={setSelectedKeywords}
        />
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        jobs.map(
          (job, index) =>
            Array.from(selectedKeywords).every((keyword) =>
              job.keywords.includes(keyword)
            ) && (
              <Card
                key={index}
                position={job.position}
                timing={job.timing}
                location={job.location}
                keywords={job.keywords}
                company={job.company}
                companyLogo={job.company_logo}
                postedOn={job.posted_on}
                selectedKeywords={selectedKeywords}
                setSelectedKeywords={setSelectedKeywords}
              />
            )
        )
      )}
    </>
  );
}

export default App;
