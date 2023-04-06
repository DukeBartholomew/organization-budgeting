import "./App.css";
import axios from "axios";

import { useState } from "react";

import { Font } from "./components/Font";
import { Login } from "./components/Login";

function App() {
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
    name: "SMU",
    budget: 1000,
  };

  const budget = {
    budgetId: 1,
    orgId: 1,
    dateCreated: '2008-11-11'
  }

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

  const [userId, setUserId] = useState(0);
  const [budgetId, setBudgetId] = useState(0);

  return (
    <div className="App">
      <Font />

      <h1 class="header">Budget Mania</h1>
      <body>
        <Login />

        <button onClick={sendUser}>Send User to DB</button>
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
        <br />
      </body>
    </div>
  );
}

export default App;
