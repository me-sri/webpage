import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8200/jobs/");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="container ">
      <h2 className="text-center mt-5">Job Listings</h2>
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-md-4 col-sm-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Title : {job.title}</h5>
                <p className="card-text"> Description : {job.description}</p>
                <p className="card-text">
                  <small className="text-muted">Company : {job.company}</small>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Requirements: {job.requirements}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="/">
        {" "}
        <Button>Back To Home </Button>
      </a>
    </div>
  );
}

export default Jobs;
