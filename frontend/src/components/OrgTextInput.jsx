import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function OrgTextInput() {
  const url = "http://localhost:8000";
  const navigate = useNavigate();

  const [orgName, setOrgName] = useState("");
  const [budget, setBudget] = useState("");

  const handleOrgNameChange = (event) => {
    setOrgName(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestDataOne = {
      orgName: orgName,
      creator: 1, //creator needs to be set to userId
    };
    const requestDataTwo = {
      orgId: 1,
      budgetAmount: budget,
    };

    axios
      .post(url + "/organizations", requestDataOne)
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        axios
          .post(url + "/budgets", requestDataTwo)
          .then((response) => {
            navigate("/home");
            alert(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
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
      <label htmlFor="budgetAmount">What is your budget?</label>
      <input
        type="text"
        id="budgetAmount"
        name="budgetAmount"
        required
        value={budget}
        onChange={handleBudgetChange}
      />
      <br></br>
      {/* Add any other relevant input fields here */}
      <button type="submit">Create Organization</button>
    </form>
  );
}
