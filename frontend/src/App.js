import './App.css';
import axios from 'axios';
import { MantineProvider } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { useState } from 'react';
import { Login } from './components/Login';
import { Font } from './components/Font';

function App() {
  const url = "http://localhost:8000";

  const checkAPI = () => {
    axios
      .get(url + "/")
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const user = {
    first: "Duke",
    last: "Bartholomew",
    age: 21,
    admin: true,
  };

  const organization = {
    name: "SMU",
    budget: 1000,
  };

  const sendJSON = () => {
    console.log(user);

    axios
      .put(url + "/parse", user)
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
      <Font/>
        
      <h1 class="header">Budget Mania</h1>
      <body>
      <Login />

      <button onClick={checkAPI}>Check API</button>
      <button onClick={sendJSON}>Send JSON</button>
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

      <br />
      </body>
    </div>
  );
}
export default App;
