import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function OrgTextInput() {
  const url = "http://localhost:8000";
  const navigate = useNavigate();

  const [orgName, setOrgName] = useState("");

  const handleOrgNameChange = (event) => {
    setOrgName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestData = {
      orgName: orgName,
      // Add any other relevant properties to the request body here
    };

    axios
      .post(url + "/orgs", requestData)
      .then((response) => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="orgName">Organization Name:</label>
      <input
        type="text"
        id="orgName"
        name="orgName"
        required
        value={orgName}
        onChange={handleOrgNameChange}
      />
      {/* Add any other relevant input fields here */}
      <button type="submit">Create Organization</button>
    </form>
  );
}

