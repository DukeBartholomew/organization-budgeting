import './App.css';
import axios from 'axios';

import { useState } from 'react';

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
    "id": 1,
    "first": "Duke",
    "last": "Bartholomew",
    "username": "dukeBartholomew",
    "password": "123",
    "age": 21,
    "admin" : true
  }

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
export const Login = () => {
  const url = "http://localhost:8000";
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleLogin = () => {
    axios.post(url + '/users/login', { userName: username, userPassword: password })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Successfully logged in");
        } else {
          alert("Failed to log in");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to log in");
      });
  };
  return (
    <>
      <div className="login-info">
        <h2>Username</h2>
        <input type="text" className="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <h2>Password</h2>
        <input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button type="button" className="login-button" onClick={handleLogin}>Login</button>
      </div>
      <div className="clear"></div>
      {message && <p>{message}</p>}
    </>
  );
};
export default App;
