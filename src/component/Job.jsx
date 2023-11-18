import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Job(job) {
  const navigate = useNavigate();
  return (
    <Card
      style={{ marginTop: "10px", borderRadius: "10px", cursor: "pointer" }}
      onClick={() => {
        navigate("/opening", { replace: true, state: { job } });
      }}
      className="job"
    >
      <CardContent>
        <h1>{job.name}</h1>
        <h3>{job.companyName}</h3>
        <p> {job.location}</p>
      </CardContent>
    </Card>
  );
}