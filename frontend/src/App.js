import "./App.css";
import axios from "axios";
import { MantineProvider } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { useState } from "react";
import { Login } from "./components/Login";
import { Font } from "./components/Font";
import { getJwt } from "./utils/jwt";

function App() {
  const url = "http://localhost:8000";

  const user = {
    firstName: "Duke",
    lastName: "Bartholomew",
    userName: "dukeBartholomew",
    password: "password",
    age: 21,
    admin: true,
  };

  const user2 = {
    firstName: "Rich",
    lastName: "Beverly",
    userName: "Rico",
    password: "hello",
    age: 21,
    admin: true,
  };

  const organization = {
    name: "SMU",
    budget: 1000,
  };

  const register = (user) => {
    axios
      .post(url + "/register", user)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const profile = () => {
    axios
      .post(url + "/profile", {
        Headers: {
          "Content-Type": "application/json",
          jwt: getJwt(),
        },
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendUser = () => {
    axios
      .post(url + "/users", user)
      .then((res) => {
        alert(res.data);
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

  const [userId, setUserId] = useState(0);

  return (
    <div className="App">
      <Font />

      <h1 class="header">Budget Mania</h1>
      <body>
        <Login />

        <button onClick={profile}>Profile</button>
        <button onClick={sendUser}>Send User to DB</button>
        <button onClick={getUsers}>Get Users from DB</button>
        <button onClick={clearUsers}>Clear Users in DB</button>
        <button
          onClick={() => {
            register(user2);
          }}
        >
          Register
        </button>
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

        <br />
      </body>
    </div>
  );
}
export default App;
