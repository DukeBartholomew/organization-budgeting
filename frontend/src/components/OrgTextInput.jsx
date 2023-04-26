import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getJwt } from "./utils/jwt";
import "./CreateAccount.css";

export function OrgTextInput() {
  const url = "http://localhost:8000";
  const navigate = useNavigate();

  const [orgName, setOrgName] = useState("");
  const [_description, _setDescription] = useState("");
  const [venmo, setVenmo] = useState("");
  const [budget, setBudget] = useState("");


  const handleOrgNameChange = (event) => {
    setOrgName(event.target.value);
  };

  const handleOrgDescriptionChange = (event) => {
    _setDescription(event.target.value);
  };

  const handleVenmoChange = (event) => {
    setVenmo(event.target.value);
  };
  
  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestDataOne = {
      orgName: orgName,
      _description: _description,
      venmo: venmo,
      creator: 1, //creator needs to be set to userId
    };
    const requestDataTwo = {
      orgName: orgName,
      budgetAmount: budget.charAt(0) === '$' ? budget : '$' + budget,
    };

    axios
      .post(url + "/organizations", requestDataOne)
      .then((response) => {
        console.log(response);
        // alert(JSON.stringify(response.data));
      })
      .then(() => {
        axios
          .post(url + "/budgets", requestDataTwo)
          .then((response) => {
            navigate("/home");
            // alert(JSON.stringify(response.data));
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
      <div className="create-org-container">
        <div className="create-account-form">
      <label htmlFor="orgName">Organization Name:</label>
      <input
        type="text"
        id="orgName"
        name="orgName"
        required
        value={orgName}
        onChange={handleOrgNameChange}
      />
      <label htmlFor="_description">Organization Description(Max 500 Characters):</label>
      <input
        type="text"
        id="_description"
        name="_description"
        required
        value={_description}
        onChange={handleOrgDescriptionChange}
      />
      <label htmlFor="venmo">Venmo Name(don't include @ symbol):</label>
      <input
        type="text"
        id="venmo"
        name="venmo"
        required
        value={venmo}
        onChange={handleVenmoChange}
      />
      <br></br>
      <label htmlFor="budgetAmount">What is your budget?(include currency unit)</label>
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
      </div>
      </div>
    </form>
  );
}
