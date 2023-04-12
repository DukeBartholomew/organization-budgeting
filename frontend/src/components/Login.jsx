import { useState } from "react";
import axios from "axios";
import { getJwt, setJWT, removeJWT } from "./utils/jwt";
import { useNavigate } from "react-router-dom";

const user = {
  id: 1,
  first: "Duke",
  last: "Bartholomew",
  username: "dukeBartholomew",
  password: "123",
  age: 21,
  admin: true,
};


const url = "http://localhost:8000";

const handleLogin = (username, password) => {
  axios
    .post(url + "/logIn", { username, password })
    .then((res) => {
      setJWT(res.data.token);
      alert(res.data.username);
    })
    .catch((err) => {
      console.log(err.res.data);
    });
};

const handleRegistration = (user) => {
  axios
    .post(url + "/register", user)
    .then((res) => {
      alert(JSON.stringify(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleProfileRequest = () => {
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

const handleLogout = () => {
  removeJWT();
  alert("Logged Out");
};

export const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [admin, setAdmin] = useState("");
  const [message, setMessage] = useState("");

  

  return (
    <>
      <div className="login-info">
        <h2>Username</h2>
        <input
          type="text"
          className="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type="text"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <h2>First Name</h2>
        <input
          type="text"
          className="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <h2>Last Name</h2>
        <input
          type="text"
          className="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <h2>Age</h2>
        <input
          type="text"
          className="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <h2>Admin</h2>
        <input
          type="text"
          className="admin"
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
        /> */}
        <br />
        <br />
        <button
          type="button"
          className="login-button"
          onClick={() => {
            navigate('/home');
            handleLogin(username, password);
            
          }}
        >
          Login
        </button>
        <br />
        {/* <button
          type="button"
          className="login-button"
          onClick={() => {
            handleRegistration({
              username,
              password,
              firstName,
              lastName,
              age,
              admin,
            });
          }}
        >
          Register
        </button> */}
        <br />
        <button
          type="button"
          className="login-button"
          onClick={handleProfileRequest}
        >
          Go to profile page
        </button>
        <br />
        <button type="button" className="login-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="clear"></div>
      {message && <p>{message}</p>}
    </>
  );
};
