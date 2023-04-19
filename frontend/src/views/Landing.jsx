import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import { Login } from "../components/Login";
import { CreateAccount } from "../components/CreateAccount";
import { WebsiteInfo } from "../components/WebsiteInfo";

const Landing = () => {
  const url = "http://localhost:8000";

  const user = {
    id: 1,
    firstName: "Duke",
    lastName: "Bartholomew",
    username: "dukeBartholomew",
    password: "123",
    age: 21,
    admin: true,
  };

  const organization = {
    orgName: "notGoogle",
    creator: 1,
    dateCreated: "2008-11-11",
  };

  const budget = {
    orgId: 1,
    budgetAmount: "$25,000.00",
  };

  const sendUser = () => {
    axios
      .post(url + "/users", user)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUsers = () => {
    axios
      .get(url + "/users")
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserById = (id) => {
    axios
      .get(url + "/users/" + id)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearUsers = () => {
    axios
      .delete(url + "/users/clear")
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendBudget = () => {
    axios
      .post(url + "/budgets", budget)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBudgets = () => {
    axios
      .get(url + "/budgets")
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBudgetsById = (budgetId) => {
    axios
      .get(url + "/budgets/" + budgetId)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearBudgets = () => {
    axios
      .delete(url + "/budgets/clearBudget")
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendOrg = () => {
    axios
      .post(url + "/orgs", organization)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrganizations = () => {
    axios
      .get(url + "/orgs")
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrgByOrgId = (orgId) => {
    axios
      .get(url + "/orgs/" + orgId)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearOrgs = () => {
    axios
      .delete(url + "/orgs/clearOrg")
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [userId, setUserId] = useState(0);
  const [budgetId, setBudgetId] = useState(0);
  const [orgId, setOrgId] = useState(0);
  return (
    <>
      <div className="landing-body">
        <section className="landing"></section>
        <Navbar />
        <WebsiteInfo />
        <Login />

        {/* <button onClick={sendUser}>Send User to DB</button>
      <button onClick={getUsers}>Get Users from DB</button>
      <button onClick={clearUsers}>Clear Users in DB</button>
      <button
        onClick={() => {
          getUserById(userId);
        }}
      >
        Get users by id
      </button>
      <input
        value={userId}
        onChange={(event) => {
          setUserId(event.target.value);
        }}
      ></input>
      <button onClick={sendBudget}>Send Budget to DB</button>
      <button onClick={getBudgets}>Get Budgets from DB</button>
      <button onClick={clearBudgets}>Clear Budgets in DB</button>
      <button
        onClick={() => {
          getBudgetsById(budgetId);
        }}
      >
        Get budgets by id
      </button>
      <input
        value={budgetId}
        onChange={(event) => {
          setBudgetId(event.target.value);
        }}
      ></input>
      <button onClick={sendOrg}>Send Organizations to DB</button>
      <button onClick={getOrganizations}>Get Organizations from DB</button>
      <button onClick={clearOrgs}>Clear Organizations in DB</button>
      <button
        onClick={() => {
          getOrgByOrgId(orgId);
        }}
      >
        Get organizations by id
      </button>
      <input
        value={orgId}
        onChange={(event) => {
          setOrgId(event.target.value);
        }}
      ></input>
      <br /> */}
      </div>
    </>
  );
};

export default Landing;
